import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import { TextScramble } from "@/components/ui/TextScramble";
import { GoldButton } from "@/components/ui/GoldButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.gallery, path: "/gallery" },
    { name: t.nav.blog, path: "/blog" },
    { name: t.nav.projects, path: "/projects" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.contact, path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-border bg-black/80 md:bg-background py-4 ",
        isScrolled
          ? "bg-background md:bg-background py-3 border-neutral-200 dark:border-neutral-800"
          : "bg-background md:bg-transparent py-3 border-none dark:border-none ",
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter flex items-center gap-2"
        >
          <span className="uppercase text-black dark:text-white">
            <TextScramble className="font-bold tracking-normal font-script1 capitalize">
              {location.pathname.startsWith("/projects")
                ? "Belial"
                : t.hero.name}
            </TextScramble>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.path === "/contact") {
                return (
                  <Link key={link.path} to={link.path}>
                    <GoldButton
                      className={cn(
                        "px-6 py-2 mx-2 relative hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background transition-all duration-300 ease-out",
                        isActive &&
                          "ring-2 ring-primary ring-offset-2 ring-offset-background",
                      )}
                    >
                      {link.name}
                    </GoldButton>
                  </Link>
                );
              }

              return (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant="link"
                    className={cn(
                      "text-sm rounded-full font-medium hover:text-neutral-900 dark:hover:text-neutral-200 group relative transition-all duration-300 ease-out",
                      isScrolled
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-800 dark:text-neutral-300",
                      isActive
                        ? "text-primary hover:text-amber-400 no-underline hover:no-underline"
                        : "",
                    )}
                  >
                    <span
                      className={cn(
                        `absolute top-0 left-0 w-2 h-2 border-t border-l dark:border-amber-500 border-amber-400 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 -translate-x-1 -translate-y-1"
                        } group-hover:opacity-100 transition-all duration-300 ease-out  group-hover:translate-x-0 group-hover:translate-y-0`,
                      )}
                    />
                    <span
                      className={cn(
                        `absolute top-0 right-0 w-2 h-2 border-t border-r dark:border-amber-500 border-amber-400 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 translate-x-1 -translate-y-1"
                        } group-hover:opacity-100 transition-all duration-300 ease-out  group-hover:translate-x-0 group-hover:translate-y-0`,
                      )}
                    />
                    <span
                      className={cn(
                        `absolute bottom-0 right-0 w-2 h-2 border-b border-r dark:border-amber-500 border-amber-400 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 translate-x-1 translate-y-1"
                        }  group-hover:opacity-100 transition-all duration-300 ease-out  group-hover:translate-x-0 group-hover:translate-y-0`,
                      )}
                    />
                    <span
                      className={cn(
                        `absolute bottom-0 left-0 w-2 h-2 border-b border-l dark:border-amber-500 border-amber-400 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 -translate-x-1 translate-y-1"
                        } group-hover:opacity-100 transition-all duration-300 ease-out  group-hover:translate-x-0 group-hover:translate-y-0`,
                      )}
                    />
                    {link.name}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            // Special styling for Contact link (CTA)
            if (link.path === "/contact") {
              // If we're already on Contact, show it as a normal active link for consistency in the list
              if (isActive) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium transition-colors text-amber-500 min-h-12 flex items-center px-4"
                  >
                    {link.name}
                  </Link>
                );
              }

              // Otherwise show the GoldButton CTA
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <GoldButton className="px-6 py-4 mx-2 relative w-full text-xl">
                    {link.name}
                  </GoldButton>
                </Link>
              );
            }

            // Normal links for others
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-amber-500 min-h-12 flex items-center px-4",
                  isActive ? "text-amber-500" : "text-muted-foreground",
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
