import { useEffect, useState, useRef } from "react";

interface TextScrambleProps {
  children: string;
  className?: string;
  duration?: number;
  characterSet?: string;
}

const DEFAULT_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export function TextScramble({
  children,
  className = "",
  duration = 800,
  characterSet = DEFAULT_CHARS,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const previousTextRef = useRef(children);

  useEffect(() => {
    if (!children) return;
    if (previousTextRef.current === children) return;

    let iteration = 0;
    const totalIterations = duration / 30; // Approx 30ms per frame

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        const result = children
          .split("")
          .map((char, index) => {
            if (index < (iteration / totalIterations) * children.length) {
              return char;
            }
            return characterSet[
              Math.floor(Math.random() * characterSet.length)
            ];
          })
          .join("");

        return result;
      });

      if (iteration >= totalIterations) {
        setDisplayText(children);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration++;
    }, 30);

    previousTextRef.current = children;

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [children, duration, characterSet]);

  if (!children) return null;

  return <span className={className}>{displayText}</span>;
}
