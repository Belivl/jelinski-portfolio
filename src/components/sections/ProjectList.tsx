import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projectData";
import { FilterBar } from "@/components/gallery/FilterBar";
import {
  ArrowRight,
  Box,
  Brush,
  Calendar,
  MonitorSmartphone,
  Palette,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/button";
import { PROJECT_CATEGORY_IMAGES } from "@/data/projectTabs";

export function ProjectList() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category))),
    [],
  );

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full border-t dark:border-neutral-800 pt-6">
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categoryImages={PROJECT_CATEGORY_IMAGES}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto perspective-midrange mt-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

const ProjectCard = ({ project }: { project: any }) => {
  const { t } = useLanguage();
  const boundingRef = useRef<DOMRect | null>(null);

  const translated =
    t.data.projects[project.id as keyof typeof t.data.projects] || {};
  const title = translated.title || project.title;
  const description = translated.description || project.description;

  // Generate stamp style based on category
  const { stampColor, StampIcon } = useMemo(() => {
    const category = project.category?.toLowerCase();
    switch (category) {
      case "3d":
        return {
          stampColor: "bg-blue-700",
          StampIcon: Box,
        };
      case "ui/ux":
        return {
          stampColor: "bg-zinc-800",
          StampIcon: MonitorSmartphone,
        };
      case "branding":
        return {
          stampColor: "bg-yellow-700",
          StampIcon: Zap,
        };
      case "design":
        return {
          stampColor: "bg-rose-500",
          StampIcon: Palette,
        };
      default:
        return {
          stampColor: "bg-amber-800",
          StampIcon: Brush,
        };
    }
  }, [project.category]);
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
    <Link to={`/projects/${project.id}`}>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col group"
      >
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
            const xRotation = (xPercentage - 0.5) * 20;
            const yRotation = (0.5 - yPercentage) * 20;

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
          className="group relative w-full flex flex-col rounded-xl dark:bg-neutral-900 border dark:border-t-neutral-700 dark:border-b-neutral-900 dark:border-x-neutral-800 p-4 dark:text-neutral-200 transition-transform duration-500 ease-out hover:transform-[rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.05)] shadow-xl"
        >
          <div
            className={`${stampColor} z-30 wavy-border flex items-center justify-center -right-2 -top-6 absolute group-hover:rotate-5 transition-all duration-200`}
            style={{
              transform: `rotate(${stampRotation}deg)`,
              translate: `-${stampOffset[0]}px ${stampOffset[1]}px`,
            }}
          >
            <StampIcon className={`w-5 h-5 text-white`} />
          </div>
          {/* Cover Image Container */}
          <div className="rounded-lg overflow-hidden relative aspect-video mb-6 block">
            <SmartImage
              src={project.coverImage}
              alt={title}
              width={800}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg border dark:border-t-neutral-900 dark:border-b-neutral-600 dark:border-x-neutral-700  "
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Project Details */}
          <div className="flex flex-col grow px-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl md:text-3xl font-bold font-script1 dark:text-neutral-100 group-hover:text-amber-600 transition-colors leading-tight">
                {title}
              </h3>
              <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] sm:text-xs pt-2">
                <Calendar className="w-3 h-3 text-neutral-500" />
                <span>{project.date}</span>
              </div>
            </div>

            <p className="dark:text-neutral-400 line-clamp-2 text-sm leading-relaxed mb-6 h-10 italic">
              {description}
            </p>

            <div className="mt-auto pt-4 border-t dark:border-neutral-700 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[10px] dark:bg-neutral-800 dark:text-neutral-300 px-2 py-0.5 rounded-full border dark:border-neutral-700 uppercase tracking-tighter"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Button
                variant="link"
                className="p-0 h-auto text-neutral-600 group-hover:text-amber-500 font-bold text-xs uppercase tracking-widest gap-2 no-underline hover:no-underline"
              >
                {t.gallery.view || "View Project"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Interactive Shine Effect */}
          <div className="pointer-events-none absolute inset-0 rounded-lg overflow-clip group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.08)_10%,transparent_60%)] transition-opacity duration-300" />
        </div>
      </motion.div>
    </Link>
  );
};
