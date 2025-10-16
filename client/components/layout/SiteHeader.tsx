import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImg from "/logo/logo.png";
import { useTheme } from "@/hooks/use-theme";

const NAV_LINKS = [
  { label: "Vì sao USDT247?", href: "#features" },
  { label: "Quy trình", href: "#workflow" },
  { label: "Tỷ giá", href: "#rates" },
  { label: "FAQ", href: "#faq" },
];

const TELEGRAM_BOT_URL = "https://t.me/USDT247bot";
const TELEGRAM_SUPPORT_URL = "https://t.me/USDT247support";

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => setIsMenuOpen((prev) => !prev);
  const handleClose = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-1 sm:px-6">
        <a
          href="/"
          className="group inline-flex items-center gap-3 text-lg font-semibold text-foreground"
        >
          <img src={logoImg} alt="USDT247 Logo" className="h-20 w-20 rounded-xl" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl tracking-tight">USDT247</span>
            <span className="text-sm text-muted-foreground">Giao dịch USDT 24/7</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition-colors hover:text-foreground"
            >
              <span className="absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={TELEGRAM_SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Liên hệ hỗ trợ
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft-glow transition-transform hover:-translate-y-0.5",
            )}
          >
            🟢 Mua/Bán
          </a>
        </div>

        <button
          type="button"
          onClick={handleToggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4 text-sm font-medium text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClose}
                className="rounded-xl px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={TELEGRAM_SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
            >
              Liên hệ hỗ trợ
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 rounded-xl px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-4 w-4" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary py-3 font-semibold text-primary-foreground shadow-soft-glow"
            >
              🟢 Mua/Bán qua Telegram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
