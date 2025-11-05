import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImg from "/logo/logo.png";

const TELEGRAM_BOT_URL = "https://t.me/usdt247shopbot";
const TELEGRAM_SUPPORT_URL = "https://t.me/usdt247shopsupport";

export const SiteFooter = () => {
  return (
    <footer className="mt-24 border-t border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-4">
          <div className="flex items-center gap-3 text-lg font-semibold text-foreground">
            <img src={logoImg} alt="USDT247 Logo" className="h-14 w-14 rounded-xl" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl tracking-tight">USDT247</span>
              <span className="text-sm text-muted-foreground">
                Mua bán USDT nhanh – an toàn – giá tốt.
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            USDT247 là nền tảng giao dịch USDT tự động dành cho người dùng Việt Nam.
            Giao dịch qua Telegram bot bất cứ lúc nào với tỷ giá minh bạch và hỗ trợ
            trực 24/7.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a
              href="mailto:support@usdt247.shop"
              className="transition-colors hover:text-foreground"
            >
              📩 support@usdt247.shop
            </a>
            <a
              href={TELEGRAM_SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              💬 @usdt247shopsupport
            </a>
            <a
              href="https://www.usdt247.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              🌐 www.usdt247.shop
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 text-sm text-muted-foreground md:items-end">
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft-glow transition-transform hover:-translate-y-0.5",
            )}
          >
            🟢 Mua/Bán qua Telegram
          </a>
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} USDT247. Giữ vững bảo mật & minh bạch cho mọi giao dịch.
          </p>
        </div>
      </div>
    </footer>
  );
};
