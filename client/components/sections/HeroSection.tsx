import { ArrowUpRight, Headset, Lock, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExchangeRatesResponse } from "@shared/api";

const TELEGRAM_BOT_URL = "https://t.me/usdt247shopbot";
const TELEGRAM_COMMUNITY_URL = "https://t.me/USDT247community";
const EXCHANGE_RATES_API = "https://iakzvzwriyxyshfggbwu.supabase.co/functions/v1/get_exchange_rates";

export const HeroSection = () => {
  const [rates, setRates] = useState<ExchangeRatesResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(EXCHANGE_RATES_API);
        const data: ExchangeRatesResponse = await response.json();
        setRates(data);
      } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);
  return (
    <section className="relative overflow-hidden pt-8 pb-20">
      <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-80 blur-3xl" />
      <div className="relative section-container lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Bot Telegram 24/7
          </span>
          <div className="space-y-6">
            <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Mua bán USDT nhanh nhất — An toàn & Giá tốt 24/7
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Giao dịch USDT mọi lúc mọi nơi qua Telegram Bot. Nhận tiền trong vài phút – Hỗ trợ ngân hàng Việt & nhiều mạng lưới (TRC20, BEP20, ERC20).
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-soft-glow transition-transform hover:-translate-y-0.5",
              )}
            >
              🟢 Mua/Bán qua Telegram
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={TELEGRAM_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-muted px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted/80"
            >
              🔵 Tham gia cộng đồng USDT247
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2 font-medium text-foreground">
              <Headset className="h-4 w-4 text-primary" />
              ✅ Hỗ trợ 24/7
            </div>
            <div className="inline-flex items-center gap-2 font-medium text-foreground">
              <Zap className="h-4 w-4 text-primary" />
              ⚡ Giao dịch chỉ 3-30s
            </div>
            <div className="inline-flex items-center gap-2 font-medium text-foreground">
              <Lock className="h-4 w-4 text-primary" />
              🔒 Bảo mật & minh bạch
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative rounded-3xl border border-border bg-card/80 p-8 shadow-soft-glow backdrop-blur-xl">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Trạng thái bot</p>
                  <p className="text-lg font-semibold text-primary">Hoạt động 24/7</p>
                </div>
                <span className="rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
                  Tự động
                </span>
              </div>
              <div className="grid gap-4 rounded-2xl border border-border/50 bg-background/60 p-5">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Ngân hàng Việt hỗ trợ</span>
                  <span className="text-base font-semibold text-foreground">30+</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Mạng lưới blockchain</span>
                  <span className="text-base font-semibold text-foreground">TRC20 · BEP20 · ERC20</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Thời gian xử lý trung bình</span>
                  <span className="text-base font-semibold text-foreground">3-30s</span>
                </div>
                <div className="border-t border-border/50 pt-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Giá USDT hiện tại</p>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Giá mua</p>
                      <p className="text-lg font-bold text-green-400">
                        {loading ? "..." : rates?.buy.toLocaleString("vi-VN") || "N/A"} ₫
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Giá bán</p>
                      <p className="text-lg font-bold text-red-400">
                        {loading ? "..." : rates?.sell.toLocaleString("vi-VN") || "N/A"} ₫
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-primary/50 bg-security-bg p-5 text-sm text-primary-foreground">
                <p className="font-semibold text-primary-foreground">Bảo mật Zero-Knowledge</p>
                <p className="mt-2 text-primary-foreground/80">
                  Xác thực đa lớp với zk-SNARK + SSL, dữ liệu mã hóa đầu-cuối.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -left-12 top-1/3 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
