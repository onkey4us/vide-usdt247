import { ArrowUpRight, MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TELEGRAM_BOT_URL = "https://t.me/USDT247bot";
const TELEGRAM_SUPPORT_URL = "https://t.me/USDT247support";

export const FinalCtaSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
      <div className="section-container">
        <div
          id="contact"
          className="relative overflow-hidden rounded-3xl border border-border bg-hero-gradient p-10 text-center shadow-soft-glow backdrop-blur-2xl sm:p-16"
        >
          <div className="absolute -left-32 -top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-28 bottom-0 h-52 w-52 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Sẵn sàng giao dịch USDT an toàn và nhanh nhất?
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Tham gia bot USDT247 để trải nghiệm giao dịch tự động chỉ trong vài phút.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-soft-glow transition-transform hover:-translate-y-0.5",
                )}
              >
                🟢 Mở bot USDT247 trên Telegram
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={TELEGRAM_SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-muted px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted/80"
              >
                💬 Liên hệ hỗ trợ 24/7
                <MessageCircle className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
