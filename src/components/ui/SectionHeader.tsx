import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4" | "label" | "div";
}

export function SectionHeader({
  children,
  className,
  as: Component = "h2",
}: SectionHeaderProps) {
  return (
    <Component className={cn("section-label", className)}>{children}</Component>
  );
}
