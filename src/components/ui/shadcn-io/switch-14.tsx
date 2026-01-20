import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LanguageToggleProps {
  language: "en" | "pl";
  onChange: (lang: "en" | "pl") => void;
}

("use client");

const LanguageToggle = ({ language, onChange }: LanguageToggleProps) => {
  const isPl = language === "pl";
  const { t } = useLanguage();

  return (
    <div className="flex items-center">
      <div className="relative inline-grid h-10 w-20 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          checked={isPl}
          onCheckedChange={(checked) => onChange(checked ? "pl" : "en")}
          className={cn(
            "absolute inset-0 h-[inherit] w-auto rounded-md dark:border-neutral-700 border-neutral-200 dark:data-[state=unchecked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-100 dark:data-[state=checked]:bg-neutral-900 data-[state=checked]:bg-neutral-200",
            "[&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:rounded-sm [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)]",
            "[&_span]:data-[state=checked]:translate-x-full",
            "[&_span]:bg-neutral-600 [&_span]:border-none shadow-none"
          )}
          aria-label="Language switch"
        />

        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                "relative z-20 flex h-full items-center justify-center cursor-pointer transition-colors duration-300",
                language === "en"
                  ? "text-white font-bold"
                  : "dark:text-neutral-400 text-black font-medium"
              )}
              onClick={() => onChange("en")}
            >
              <span className="text-[10px] uppercase">EN</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t.tooltips.en}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                "relative z-20 flex h-full items-center justify-center cursor-pointer transition-colors duration-300",
                language === "pl"
                  ? "dark:text-white text-white font-bold"
                  : "dark:text-neutral-400 text-black font-medium"
              )}
              onClick={() => onChange("pl")}
            >
              <span className="text-[10px] uppercase">PL</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t.tooltips.pl}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default LanguageToggle;
