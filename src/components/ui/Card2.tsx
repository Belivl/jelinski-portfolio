import { cn } from "@/lib/utils";

export const Card2 = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col justify-between gap-6 overflow-hidden p-3 md:p-6 rounded-2xl camera-leather border border-white/5 shadow-2xl transition-all duration-500",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
