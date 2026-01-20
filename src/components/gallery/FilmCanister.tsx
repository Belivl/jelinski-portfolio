import { cn } from "@/lib/utils";

interface FilmCanisterProps {
  className?: string;
  color?: "black" | "gold" | "silver";
  totalPhotos?: number;
}

export function FilmCanister({
  className,
  totalPhotos,
}: // color = "black",
FilmCanisterProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center pointer-events-none scale-340 -right-32",
        className
      )}
    >
      {/* Canister Body Cylinder - Vertical orientation implies we look at it broadly? 
          The user wants it to roll FROM the right. Usually a film canister is vertical cylinder.
          Let's make a vertical cylinder.
      */}
      <div className="relative w-24 h-48 md:w-32 md:h-64 flex flex-col items-center ">
        {/* Top Spindle */}
        <div className="w-12 h-4 absolute -top-4  bg-neutral-400 rounded-t-[2px] bg-linear-to-r from-neutral-700 via-black to-neutral-800 shadow-sm z-10" />

        {/* Top Cap */}
        <div className="w-full h-3 relative bg-neutral-900 rounded-[2px] bg-linear-to-r from-neutral-700 via-black to-neutral-900 shadow-md border-b border-black/80 z-10 flex items-center justify-center">
          <div className="w-[40%] h-1 bg-neutral-200/20 rounded-full blur-[3px] absolute top-px left-px" />
          <div className="w-[20%] h-1 bg-neutral-100/20 rounded-full blur-[3px] absolute top-px left-px" />
        </div>

        {/* Main Body */}
        <div className="relative w-[95%] flex-1 bg-linear-to-r from-neutral-900 via-neutral-800 to-black overflow-hidden shadow-2xl flex items-center justify-center">
          <div className="absolute w-[70%] h-[90%] left-0 bottom-0 bg-amber-500 mix-blend-screen rounded-r-sm opacity-90">
            <div className="text-[10px] bottom-5 left-0 absolute font-black uppercase text-black -rotate-90">
              SONY
            </div>
            <div className="absolute bottom-5 left-4 flex flex-col -rotate-90">
              <span className="text-3xl md:text-4xl font-black text-black tracking-tighter">
                400
              </span>
              <span className="text-[8px] md:text-[10px] font-bold text-black uppercase">
                Ultra Color
              </span>
            </div>
            <div className="w-full absolute top-1 -right-12">
              <div className="text-[8px] font-mono font-bold text-black">
                {totalPhotos} EXP
              </div>
            </div>
          </div>

          <div className="absolute z-10 inset-0 bg-linear-to-r from-transparent via-neutral-800/10 to-transparent pointer-events-none" />
          <div className="absolute z-10 left-2 w-1 h-full bg-white/40 blur-[3px]" />
        </div>

        {/* Bottom Cap */}
        <div className="w-full h-3 relative bg-neutral-900 rounded-[2px] bg-linear-to-r from-neutral-700 via-black to-neutral-900 shadow-md border-t border-black/80 z-10 flex items-center justify-center">
          <div className="w-[40%] h-1 bg-neutral-200/20 rounded-full blur-[3px] absolute top-px left-px" />
          <div className="w-[20%] h-1 bg-neutral-100/20 rounded-full blur-[3px] absolute top-px left-px" />
        </div>

        {/* Bottom Spindle */}
        {/* <div className="w-8 h-4 bg-neutral-400 rounded-b-sm bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-500 shadow-sm z-10" /> */}

        {/* Film "Lip" visual (where film comes out) - Vertical slit on the left side */}
        {/* <div className="absolute left-0 top-7 bottom-4 w-1 bg-neutral-800 h-full shadow-[2px_0_5px_rgba(0,0,0,1)] z-20" /> */}
      </div>
    </div>
  );
}
