import { useEffect, useRef, useState, useMemo } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { BlogPost } from "@/data/blogData";
import { useLanguage } from "@/lib/LanguageContext";
import { Layers, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card2 } from "@/components/ui/Card2";

interface BlogMapProps {
  posts: BlogPost[];
}

const getColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 85%, 60%)`;
};

export function BlogMap({ posts }: BlogMapProps) {
  const { t } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [zoom] = useState(4);
  const [center] = useState({ lng: 18.64, lat: 54.35 }); // Default to Gdansk

  // Filters
  const [regionFilter, setRegionFilter] = useState<
    "all" | "tricity" | "outside"
  >("all");
  const [countryFilter, setCountryFilter] = useState<
    "all" | "poland" | "outside"
  >("all");

  const postsWithLocation = useMemo(
    () => posts.filter((p) => !!p.location),
    [posts],
  );

  const filteredPosts = useMemo(() => {
    return postsWithLocation.filter((post) => {
      const regionMatch =
        regionFilter === "all" || post.region === regionFilter;
      const countryMatch =
        countryFilter === "all" || post.country === countryFilter;
      return regionMatch && countryMatch;
    });
  }, [postsWithLocation, regionFilter, countryFilter]);

  // Group posts by exactly the same coordinates
  const groupedPosts = useMemo(() => {
    const groups: Record<string, BlogPost[]> = {};
    filteredPosts.forEach((post) => {
      if (post.location) {
        const key = `${post.location.lat}_${post.location.lng}`;
        if (!groups[key]) groups[key] = [];
        groups[key].push(post);
      }
    });
    return Object.values(groups);
  }, [filteredPosts]);

  const markers = useRef<maplibregl.Marker[]>([]);

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [center.lng, center.lat],
      zoom: zoom,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
  }, [center, zoom]);

  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    markers.current.forEach((m) => m.remove());
    markers.current = [];

    // Add new markers
    groupedPosts.forEach((group) => {
      const firstPost = group[0];
      if (!firstPost.location) return;

      const color = getColor(firstPost.id);

      const el = document.createElement("div");
      el.className = "custom-marker";
      el.style.width = "30px";
      el.style.height = "30px";
      el.style.cursor = "pointer";

      // Create inner container
      const inner = document.createElement("div");
      Object.assign(inner.style, {
        background: "#1D1D1D",
        border: "1px solid #303030",
        borderRadius: "50%",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 0 15px ${color}80`,
        transition: "transform 0.2s",
        color: `${color}`,
      });

      // Add hover effects
      inner.onmouseenter = () => (inner.style.transform = "scale(1.2)");
      inner.onmouseleave = () => (inner.style.transform = "scale(1)");

      // Count span
      const countSpan = document.createElement("span");
      Object.assign(countSpan.style, {
        fontWeight: "bold",
        fontSize: "12px",
        marginRight: group.length > 1 ? "2px" : "0",
      });
      countSpan.textContent = group.length > 1 ? group.length.toString() : "";

      // Icon
      const svg = document.createElement("div");
      svg.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
      `;

      inner.appendChild(svg.firstElementChild as Node);
      inner.appendChild(countSpan);
      el.appendChild(inner);

      // Popup content
      const popupContent = document.createElement("div");
      popupContent.className = "dark-popup";

      const isMultiple = group.length > 1;

      Object.assign(popupContent.style, {
        padding: "10px",
        backgroundColor: "#171717",
        color: "white",
        borderRadius: "8px",
        maxWidth: isMultiple ? "420px" : "250px",
        display: isMultiple ? "flex" : "block",
        flexWrap: "wrap",
        gap: "10px",
        maxHeight: "320px",
        overflowY: "auto",
      });

      const imagesHtml = group
        .map((p) => {
          const pColor = getColor(p.id);
          const itemStyle = isMultiple
            ? `width: calc(50% - 5px); margin-bottom: 0; box-sizing: border-box; display: flex; flex-direction: column;`
            : `margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;`;

          return `
                <div style="${itemStyle}">
                    <img src="${p.coverImage}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 4px; margin-bottom: 4px;" />
                    <div style="font-weight: bold; font-size: ${isMultiple ? "12px" : "14px"}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${p.title}">${p.title}</div>
                    <div style="font-size: 10px; color: #a3a3a3;">${p.date}</div>
                    <a href="/blog/${p.id}" style="color: ${pColor}; font-size: 11px; text-decoration: none; display: block; margin-top: auto;">View Story →</a>
                </div>
            `;
        })
        .join("");

      popupContent.innerHTML = imagesHtml;

      const popup = new maplibregl.Popup({
        offset: 25,
        closeButton: false,
      }).setDOMContent(popupContent);

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([firstPost.location.lng, firstPost.location.lat])
        .setPopup(popup)
        .addTo(map.current!);

      markers.current.push(marker);
    });

    // Fit bounds if markers exist
    if (filteredPosts.length > 0) {
      const bounds = new maplibregl.LngLatBounds();
      filteredPosts.forEach((p) => {
        if (p.location) bounds.extend([p.location.lng, p.location.lat]);
      });
      map.current.fitBounds(bounds, { padding: 50, maxZoom: 10 });
    }
  }, [groupedPosts, filteredPosts, t.blog.multiplePhotos]);

  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 mt-20">
      {/* Filter Overlay */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <Card2 className="p-3 bg-black/80 backdrop-blur-md border border-white/10 flex flex-col gap-3 min-w-[180px]">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-widest mb-1">
            <Layers className="w-4 h-4" />
            {t.blog.mapFilters}
          </div>

          {/* Country Filter */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-neutral-500 font-bold uppercase">
              {t.blog.allCountries}
            </span>
            <div className="flex gap-1 flex-wrap">
              <Button
                size="sm"
                variant={countryFilter === "all" ? "default" : "outline"}
                onClick={() => setCountryFilter("all")}
                className="text-[10px] h-7 px-2"
              >
                All
              </Button>
              <Button
                size="sm"
                variant={countryFilter === "poland" ? "default" : "outline"}
                onClick={() => setCountryFilter("poland")}
                className="text-[10px] h-7 px-2"
              >
                {t.blog.poland}
              </Button>
              <Button
                size="sm"
                variant={countryFilter === "outside" ? "default" : "outline"}
                onClick={() => setCountryFilter("outside")}
                className="text-[10px] h-7 px-2"
              >
                {t.blog.outsidePoland}
              </Button>
            </div>
          </div>

          {/* Region Filter */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-neutral-500 font-bold uppercase">
              {t.blog.allRegions}
            </span>
            <div className="flex gap-1 flex-wrap">
              <Button
                size="sm"
                variant={regionFilter === "all" ? "default" : "outline"}
                onClick={() => setRegionFilter("all")}
                className="text-[10px] h-7 px-2"
              >
                All
              </Button>
              <Button
                size="sm"
                variant={regionFilter === "tricity" ? "default" : "outline"}
                onClick={() => setRegionFilter("tricity")}
                className="text-[10px] h-7 px-2"
              >
                {t.blog.tricity}
              </Button>
              <Button
                size="sm"
                variant={regionFilter === "outside" ? "default" : "outline"}
                onClick={() => setRegionFilter("outside")}
                className="text-[10px] h-7 px-2"
              >
                {t.blog.outsideTricity}
              </Button>
            </div>
          </div>
        </Card2>
      </div>

      {/* Map Container */}
      <div ref={mapContainer} className="w-full h-full" />

      {/* Map Legend/Status */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-neutral-400 flex items-center gap-2">
          <Navigation className="w-3 h-3" />
          Showing {filteredPosts.length} locations
        </div>
      </div>

      {/* Custom Styles for MapLibre Popups */}
      <style>{`
                .maplibregl-popup-content {
                    background-color: #171717 !important;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 12px !important;
                    padding: 0 !important;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5) !important;
                }
                .maplibregl-popup-tip {
                    border-top-color: #171717 !important;
                }
                .dark-popup img {
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .dark-popup div:hover img {
                    transform: scale(1.05);
                }
            `}</style>
    </div>
  );
}
