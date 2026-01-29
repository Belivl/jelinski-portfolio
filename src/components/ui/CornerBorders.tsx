import { cn } from "@/lib/utils";

interface CornerBordersProps {
  isVisible?: boolean;
  size?: string;
  className?: string;
  offset?: string;
  thickness?: string;
  useGroupHover?: boolean;
}

export function CornerBorders({
  isVisible = false,
  size = "w-2 h-2",
  className = "border-amber-400 dark:border-amber-500",
  offset = "0",
  thickness = "border-t border-l", // This is just a placeholder, we'll use the corner-specific ones
  useGroupHover = true,
}: CornerBordersProps) {
  const corners = [
    {
      pos: "top-0 left-0",
      border: "border-t border-l",
      translate: "-translate-x-1 -translate-y-1",
    },
    {
      pos: "top-0 right-0",
      border: "border-t border-r",
      translate: "translate-x-1 -translate-y-1",
    },
    {
      pos: "bottom-0 right-0",
      border: "border-b border-r",
      translate: "translate-x-1 translate-y-1",
    },
    {
      pos: "bottom-0 left-0",
      border: "border-b border-l",
      translate: "-translate-x-1 translate-y-1",
    },
  ];

  // Helper to construct border classes with thickness
  const getBorderClass = (baseBorder: string) => {
    if (!thickness.includes("border-")) return baseBorder;
    // If thickness is "border-t-2", we want to apply that to the relevant sides
    const thicknessValue = thickness.split("-").pop(); // "2"
    return baseBorder
      .split(" ")
      .map((b) => `${b}-${thicknessValue}`)
      .join(" ");
  };

  return (
    <>
      {corners.map((corner, i) => (
        <span
          key={i}
          className={cn(
            "absolute pointer-events-none transition-all duration-300 ease-out",
            corner.pos,
            size,
            className,
            getBorderClass(corner.border),
            isVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0",
            !isVisible &&
              useGroupHover &&
              `group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0`,
            !isVisible && corner.translate,
          )}
          style={{
            top: corner.pos.includes("top-0") ? offset : undefined,
            bottom: corner.pos.includes("bottom-0") ? offset : undefined,
            left: corner.pos.includes("left-0") ? offset : undefined,
            right: corner.pos.includes("right-0") ? offset : undefined,
          }}
        />
      ))}
    </>
  );
}
