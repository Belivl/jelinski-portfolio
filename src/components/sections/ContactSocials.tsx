import { siteConfig } from "@/config/site";
import { LinkCard } from "@/components/ui/LinkCard";
import { Palette, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
} from "@/components/ui/map";

export function ContactSocials() {
  const { t } = useLanguage();

  return (
    <div className="mt-24 max-w-4xl mx-auto">
      <div className="text-start mb-12">
        <h2 className="text-3xl font-bold mb-4">{t.contact.socialTitle}</h2>
        <p className="text-gray-400">{t.contact.socialSubtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
        <LinkCard
          href={siteConfig.social.instagram}
          portal={t.contact.social.instagramPhoto}
          handle={siteConfig.socialName.instagram}
        >
          <div className="w-16 h-16 rounded-xl border border-t-neutral-200/50 border-b-neutral-400/50 border-l-neutral-300/50 border-r-neutral-400/50 bg-linear-to-tr from-purple-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" text-white w-8 h-8"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        </LinkCard>
        <LinkCard
          href={siteConfig.social.instagram2}
          portal={t.contact.social.instagramDesign}
          handle={siteConfig.socialName.instagram2}
        >
          <div className="w-16 h-16 rounded-xl border border-t-neutral-200/50 border-b-neutral-400/50 border-l-neutral-300/50 border-r-neutral-400/50 bg-linear-to-tr from-purple-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" text-white w-8 h-8"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        </LinkCard>
        <LinkCard
          href={siteConfig.social.linkedin}
          portal={t.contact.social.linkedin}
          handle={siteConfig.socialName.linkedin}
        >
          <div className="w-16 h-16 rounded-xl border border-t-neutral-200/50 border-b-neutral-400/50 border-l-neutral-300/50 border-r-neutral-400/50 bg-[#0077b5] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" text-white w-8 h-8"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
        </LinkCard>
        <LinkCard
          href={siteConfig.social.youtube}
          portal={t.contact.social.youtube}
          handle={siteConfig.socialName.youtube}
        >
          <div className="w-16 h-16 rounded-xl border border-t-neutral-200/50 border-b-neutral-400/50 border-l-neutral-300/50 border-r-neutral-400/50 bg-[#FF0000] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" text-white w-8 h-8"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </div>
        </LinkCard>

        <LinkCard
          href={siteConfig.social.behance}
          portal={t.contact.social.behance}
          handle={siteConfig.socialName.behance}
        >
          <div className="w-16 h-16 rounded-xl border border-t-neutral-200/50 border-b-neutral-400/50 border-l-neutral-300/50 border-r-neutral-400/50 bg-[#1769ff] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            <Palette className="w-8 h-8" />
          </div>
        </LinkCard>
      </div>

      {/* Map Section */}
      <div className="mt-16 w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-border shadow-2xl relative group/map">
        <Map center={[18.56, 54.44]} zoom={8}>
          <MapControls showZoom showCompass />
          {/* Gdansk Marker */}
          {/* <MapMarker longitude={18.6466} latitude={54.352}>
            <MarkerContent>
              <div className="p-2 bg-primary rounded-full shadow-lg border-2 border-white animate-bounce-subtle group/marker cursor-pointer relative">
                <MapPin className="w-5 h-5 text-white" />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Gdańsk
                </div>
              </div>
            </MarkerContent>
          </MapMarker> */}
          {/* Sopot Marker */}
          <MapMarker longitude={18.56} latitude={54.44}>
            <MarkerContent>
              <div className="p-2 bg-amber-500 rounded-full shadow-lg border-2 border-white animate-bounce-subtle delay-150 group/marker cursor-pointer relative">
                <MapPin className="w-5 h-5 text-white" />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Sopot
                </div>
              </div>
            </MarkerContent>
          </MapMarker>
        </Map>
        <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-md px-4 py-2 rounded-lg border border-border shadow-sm pointer-events-none opacity-0 group-hover/map:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-medium">Tricity Area</p>
        </div>
      </div>
    </div>
  );
}
