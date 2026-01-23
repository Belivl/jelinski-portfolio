import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SmartImage } from "@/components/ui/SmartImage";
import {
  Check,
  LayoutGrid,
  Map,
  Camera,
  User,
  Ticket,
  Briefcase,
  Mountain,
  Contrast,
  PawPrint,
  Building,
  Car,
  Layers,
  Box,
  Zap,
  Palette,
  Folder,
  Brush,
  Pencil,
  MonitorSmartphone,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface CategoryCardProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
  coverImage?: string;
}

const categoryIcons: Record<string, any> = {
  all: LayoutGrid,
  travel: Map,
  street: Camera,
  session: User,
  event: Ticket,
  client: Briefcase,
  landscape: Mountain,
  portrait: User,
  "black-and-white": Contrast,
  animal: PawPrint,
  architecture: Building,
  cars: Car,
  various: Layers,
  "3d": Box,
  "ui/ux": MonitorSmartphone,
  branding: Zap,
  design: Palette,
  projects: Folder,
  art: Brush,
  painting: Brush,
  drawing: Pencil,
};

export function CategoryCard({
  category,
  isActive,
  onClick,
  coverImage,
}: CategoryCardProps) {
  const { t } = useLanguage();
  const Icon = categoryIcons[category.toLowerCase()] || LayoutGrid;
  return (
    <div className="w-full dark:bg-neutral-900 bg-neutral-500 p-[2px] pt-0 rounded-lg border-b border-r border-b-neutral-600 border-r-neutral-700 group">
      <div className="shadow-[8px_12px_20px_0px_rgba(0,0,0,0.9)] rounded-lg group-focus:shadow-[0_0_0px_rgba(0,0,0,0.3)] group-hover:shadow-[12px_16px_12px_0px_rgba(0,0,0,0.4)] transition-all duration-300">
        <motion.button
          whileHover={{ y: -3, x: -1 }}
          whileTap={{ scale: 0.98, x: 1, y: 3 }}
          onClick={onClick}
          className={cn(
            "relative group w-full aspect-3/1 rounded-lg overflow-hidden text-left transition-all duration-300 -translate-x-[2px]",
            "border dark:border-neutral-800 border-l border-b-3  dark:border-b-black border-l-neutral-700 border-t-2 dark:border-t-neutral-700 hover:border-amber-500/50",
            isActive
              ? "ring-2 ring-amber-500 border-transparent shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              : "shadow-xl",
          )}
        >
          {/* Background Image */}
          {coverImage ? (
            <>
              <SmartImage
                src={coverImage}
                alt={category}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
                  isActive ? "scale-110" : "scale-100",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 bg-linear-to-t dark:from-black/90 dark:via-black/20 to-transparent transition-opacity duration-300",
                  isActive
                    ? "opacity-100"
                    : "opacity-40 group-hover:opacity-60",
                )}
              />
            </>
          ) : (
            <div className="absolute inset-0 dark:bg-neutral-900 group-hover:bg-neutral-800 transition-colors" />
          )}

          {/* Content */}
          <div className="absolute inset-0 p-4 flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-linear-to-r dark:from-black/90 dark:via-black/80 dark:to-black/30 from-neutral-200/90 via-neutral-200/80 to-neutral-100/30"></div>
            <div className="flex items-center justify-center gap-4 w-full relative">
              <div className="flex flex-col items-center justify-center">
                <h3
                  className={cn(
                    "text-xl md:text-2xl font-script1 dark:text-white transition-all duration-300 capitalize leading-none",
                    isActive && "text-amber-500 scale-105",
                  )}
                >
                  {t.gallery.tagCategories[
                    category.toLowerCase() as keyof typeof t.gallery.tagCategories
                  ] || category}
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {isActive ? (
                  <motion.div
                    key="active"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="bg-amber-500 p-1 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                  >
                    <Check className="w-3 h-3 text-black stroke-3" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="inactive"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="p-1"
                  >
                    {Icon && (
                      <Icon className="w-5 h-5 text-white group-hover:opacity-100 transition-opacity" />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Active Indicator Gloss */}
          {isActive && (
            <motion.div
              layoutId="active-glow"
              className="absolute inset-0 bg-amber-500/5 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          )}

          {/* Shine Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none">
            <div className="absolute -inset-full bg-linear-to-tr from-transparent via-white/10 to-transparent rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out" />
          </div>
        </motion.button>
      </div>
    </div>
  );
}
