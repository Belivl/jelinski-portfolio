import { cn } from "@/lib/utils";

export const Card2 = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col justify-between gap-6 overflow-hidden p-3 md:p-6 rounded-2xl backdrop-blur-md dark:bg-neutral-900 border dark:border-t-neutral-600  dark:border-l-neutral-700  dark:border-r-neutral-800 dark:border-b-neutral-800 shadow-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
