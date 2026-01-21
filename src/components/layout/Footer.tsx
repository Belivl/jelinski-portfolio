import { Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { siteConfig } from "@/config/site";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/ThemeContext";
import LanguageToggle from "@/components/ui/shadcn-io/switch-14";

export function Footer() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className="bg-background border-t border-border py-12 text-muted-foreground relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex md:flex-row md:gap-0 gap-6 flex-col-reverse justify-between items-center ">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>
            &copy; {siteConfig.legal.copyrightYear} {t.footer.rights}
          </p>
          <div className="flex gap-6  opacity-0">
            <a
              href={siteConfig.legal.privacyPolicyUrl}
              className="hover:text-foreground"
            >
              {t.footer.privacy}
            </a>
            <a
              href={siteConfig.legal.termsOfServiceUrl}
              className="hover:text-foreground"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex justify-center items-center text-xs gap-12">
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className=" w-5 h-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{siteConfig.socialName.instagram}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={siteConfig.social.instagram2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className=" w-5 h-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{siteConfig.socialName.instagram2}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{siteConfig.socialName.linkedin}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{siteConfig.socialName.youtube}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={siteConfig.social.email}
                    className="hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{siteConfig.contact.email}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {siteConfig.features.enableLanguageSwitcher && (
              <LanguageToggle language={language} onChange={setLanguage} />
            )}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className="hover:text-amber-500 "
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 " />
                  ) : (
                    <Moon className="w-5 h-5 " />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t.tooltips.theme}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </footer>
  );
}
