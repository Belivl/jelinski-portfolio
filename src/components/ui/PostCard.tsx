import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Link } from "react-router-dom";
import { useRef, useMemo } from "react";
import {
  Briefcase,
  Calendar,
  Camera,
  MapPin,
  Music,
  Plane,
  User,
} from "lucide-react";

type Props = {
  post: any;
};
export function PostCard({ post }: Props) {
  const { t } = useLanguage();
  const boundingRef = useRef<DOMRect | null>(null);

  const translated = (t.data.blog as any)[post.id] || {};
  const title = translated.title || post.title;

  // Generate stamp style based on category
  const { stampColor, StampIcon } = useMemo(() => {
    const category = post.category?.toLowerCase();
    switch (category) {
      case "travel":
        return {
          stampColor: "bg-blue-700",
          StampIcon: Plane,
        };
      case "street":
        return {
          stampColor: "bg-zinc-800",
          StampIcon: Camera,
        };
      case "session":
        return {
          stampColor: "bg-yellow-700",
          StampIcon: User,
        };
      case "event":
        return {
          stampColor: "bg-rose-500",
          StampIcon: Music,
        };
      case "client":
        return {
          stampColor: "bg-emerald-700",
          StampIcon: Briefcase,
        };
      default:
        return {
          stampColor: "bg-amber-800",
          StampIcon: MapPin,
        };
    }
  }, [post.category]);

  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  const maxRotation = 30;
  const maxOffset = 30;

  const stampOffset = useMemo(() => {
    const offsetRND =
      Math.floor(Math.random() * (maxOffset - 0 + 1)) * plusOrMinus;
    const offset = [offsetRND, offsetRND];
    return offset;
  }, [title]);

  const stampRotation = useMemo(() => {
    const rotation =
      Math.floor(Math.random() * (maxRotation - 0 + 1)) * plusOrMinus;
    return rotation;
  }, [title]);
  return (
    <Link to={`/blog/${post.id}`}>
      <div className="flex flex-col perspective-midrange group">
        <div
          onMouseLeave={() => (boundingRef.current = null)}
          onMouseEnter={(ev) => {
            boundingRef.current = ev.currentTarget.getBoundingClientRect();
          }}
          onMouseMove={(ev) => {
            if (!boundingRef.current) return;
            const x = ev.clientX - boundingRef.current.left;
            const y = ev.clientY - boundingRef.current.top;
            const xPercentage = x / boundingRef.current.width;
            const yPercentage = y / boundingRef.current.height;
            const xRotation = (xPercentage - 0.5) * 10;
            const yRotation = (0.5 - yPercentage) * 10;

            ev.currentTarget.style.setProperty(
              "--x-rotation",
              `${yRotation}deg`,
            );
            ev.currentTarget.style.setProperty(
              "--y-rotation",
              `${xRotation}deg`,
            );
            ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
            ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
          }}
          className="group relative w-full flex flex-col rounded-md bg-neutral-100 dark:shadow-xl shadow-2xl  dark:bg-white p-1 pb-0 md:p-4 md:pb-0 text-neutral-700 transition-transform ease-out hover:transform-[rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.05)]"
        >
          {/* <figure className="rounded-md mix-blend-multiply bg-[radial-gradient(at_70%_40%,transparent_30%,currentColor_40%),url(/noise.svg)]" /> */}
          <div
            className="absolute w-10 h-10 translate-x-2 translate-y-4 -right-2 -top-6 bg-black/60 z-30 blur-sm "
            style={{
              transform: `rotate(${stampRotation}deg)`,
              translate: `-${stampOffset[0]}px ${stampOffset[1]}px`,
            }}
          />
          <div
            className={`${stampColor} z-30 wavy-border flex items-center justify-center -right-2 -top-6 absolute group-hover:rotate-5 transition-all duration-200`}
            style={{
              transform: `rotate(${stampRotation}deg)`,
              translate: `-${stampOffset[0]}px ${stampOffset[1]}px`,
            }}
          >
            <StampIcon className={`w-5 h-5 text-white`} />
          </div>
          <div className=" rounded-sm overflow-hidden">
            <div className="relative group-hover:scale-105 transition-all duration-700">
              <h2 className="text-3xl md:text-6xl z-10 text-white text-shadow-[0_2px_10px_rgba(0,0,0,0.9)] group-hover:text-shadow-[0_8px_10px_#432100]  absolute w-full h-full flex items-center justify-center font-script1 group-hover:text-amber-700 dark:group-hover:text-amber-500  leading-tight group-hover:scale-105 transition-all duration-200">
                {title}
              </h2>

              <img
                src="/noise.svg"
                alt="noise"
                className="absolute inset-0 z-10 opacity-25 rounded-md "
              />
              <div className="absolute inset-0 bg-black/20 z-0 rounded-md " />
              <SmartImage
                src={`${post.coverImage}`}
                alt={title}
                width={800}
                className={`object-cover w-full aspect-video rounded-md object-${post.coverImageCrop}  border border-t-neutral-600 border-b-neutral-200 border-x-neutral-400`}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center w-full h-fit pl-2 ">
            <div className="flex items-center gap-2 md:gap-4 ">
              <div className="flex items-center gap-2 text-xs md:text-base truncate">
                <Calendar className="w-4 h-4" /> <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-base truncate">
                <MapPin className="w-4 h-4 md:w-6 md:h-6" />{" "}
                <span className="truncate w-[1/3] md:w-full">
                  {post.city || "Unknown Location"}
                </span>
              </div>
            </div>
            <Button
              variant="link"
              className="text-neutral-700 cursor-pointer dark:text-neutral-500 font-semibold text-xs hover:no-underline group-hover:scale-105 transition-transform gap-1 items-center flex group-hover:text-amber-700 dark:group-hover:text-amber-500"
            >
              <span className="md:block hidden">
                {t.blog.viewPostcard || "View Postcard"}
              </span>
              <span className="block md:hidden">{t.gallery.view}</span>
              <ArrowRight className="w-4 h-4  group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.1)_20%,transparent_90%)]" />
        </div>
      </div>
    </Link>
  );
}
