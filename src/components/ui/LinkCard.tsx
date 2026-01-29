import { GlowContent } from "../gallery/GlowContent";
import { MiniCRTDisplay } from "../gallery/MiniCRTDisplay";

export function LinkCard({
  href,
  portal,
  handle,
  children,
}: {
  href: string;
  portal: string;
  handle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group p-0 md:py-[2px] text-center md:px-[4px] bg-neutral-900 shadow-[inset_0_5px_10px_1px_rgba(0,0,0,0.6)] rounded-2xl border border-t-neutral-900 border-b-neutral-700 border-l-neutral-700/70 border-r-neutral-800">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className=" p-2 md:p-4 rounded-2xl -translate-y-2 group-hover:translate-y-0 group-hover:translate-x-0 md:-translate-x-1 shadow-[8px_12px_10px_0_rgba(0,0,0,0.5)] dark:bg-neutral-900  border-2 border-b-8 border-t-neutral-600 border-b-black/60 border-l-neutral-700/70 border-r-neutral-800 hover:bg-foreground/10 hover:ring-amber-500 hover:ring-2  transition-all duration-300 flex flex-col items-center gap-4"
      >
        <GlowContent>{children}</GlowContent>
        <h3 className="text-xl font-bold mb-1">{portal}</h3>
        <MiniCRTDisplay value={handle} />
        {/* <div className="text-center">
          <h3 className="text-xl font-bold mb-1">{portal}</h3>
          <p className="text-sm text-gray-400">{handle}</p>
        </div> */}
      </a>
    </div>
  );
}
