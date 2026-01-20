import { cn } from "@/lib/utils";
import { Power } from "lucide-react";

interface FilmstripHolderProps {
  className?: string;
  width?: number | string;
  onClose?: () => void;
  showCloseButton?: boolean;
  rotation?: number;
}

const AllenBolt = ({ rotation = 0 }: { rotation?: number }) => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    <div
      className="p-1 w-9 h-9 z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full rotate-20 opacity-10"
      style={{
        background: `
              conic-gradient(
                from 0deg,
                #000000 0deg,
                rgba(255,255,255,0.8) 45deg,
                #000000 90deg,
                #000000 180deg,
                rgba(255,255,255,0.8) 225deg,
                #000000 270deg,
                #000000 360deg
              )
            `,
      }}
    ></div>
    {/* Outer Ring / Socket */}
    <div className="absolute inset-0 rounded-full bg-neutral-900 border border-white/5 shadow-[1px_2px_5px_rgba(0,0,0,0.5)]" />

    {/* Hexagonal Hole */}
    <div
      className="w-4 h-4 bg-black transition-transform duration-500 ease-out"
      style={{
        clipPath:
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        transform: `rotate(${rotation}deg)`,
      }}
    />

    {/* Subtle Metallic Highlight inside the hole */}
    <div
      className="absolute w-4 h-4 opacity-20 pointer-events-none transition-transform duration-500 ease-out"
      style={{
        clipPath:
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        background: "linear-gradient(15deg, white 0%, transparent 40%)",
        transform: `rotate(${rotation}deg)`,
      }}
    />
  </div>
);

export const FilmstripHolder = ({
  className,
  width = "100%",
  onClose,
  showCloseButton,
  rotation = 0,
}: FilmstripHolderProps) => {
  return (
    <div
      className={cn(
        "relative h-12 bg-neutral-900 rounded-t-lg border-x border-t border-white/10 flex items-center justify-between p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]",
        className
      )}
      style={{ width }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5 rounded-t-lg" />
      <div className="absolute bottom-0 left-0 right-0 h-[25px] bg-linear-to-b from-black to-neutral-900 translate-y-[25px] " />

      {/* Left Bolt */}
      <AllenBolt rotation={rotation} />

      {/* Integrated Close Button (for mobile) */}
      {showCloseButton && (
        <button
          onClick={onClose}
          className="relative group/close flex items-center justify-center -mt-px pointer-events-auto active:scale-95 transition-transform"
          aria-label="Close"
        >
          {/* Metallic Socket Ring */}
          <div className="absolute w-10 h-10 rounded-full bg-neutral-900 border border-white/10 shadow-[inner_0_1px_4px_rgba(0,0,0,0.8)]" />
          <div className="absolute w-10 h-10 rounded-full bg-linear-to-br from-white/10 via-transparent to-black/40 pointer-events-none" />

          {/* Power Icon with Glow */}
          <div className="relative z-10 p-2">
            <Power className="w-5 h-5 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover/close:text-red-400 group-hover/close:drop-shadow-[0_0_12px_rgba(239,68,68,0.8)] transition-all" />
          </div>
        </button>
      )}

      {/* Center Section - if no close button, maybe a spacer */}
      {!showCloseButton && <div className="flex-1" />}

      {/* Right Bolt */}
      <AllenBolt rotation={-rotation} />

      {/* Shadow Casting on the strip below */}
      <div className="absolute -bottom-4 left-0 right-0 h-4 bg-linear-to-b from-black/80 to-transparent pointer-events-none z-10" />
    </div>
  );
};
