import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/utils";

const TELEGRAM_BOT_URL = "https://t.me/usdt247shopbot";

const STEPS = [
  {
    title: "📱 Mở Telegram và tìm bot có tên Usdt247shop",
    description: "👉 Nhấn vào nút 'Bắt đầu' để kích hoạt bot.",
    image: "/img/HowItWorksSection/B1.jpg",
  },
  {
    title: "📥 Chỉ với vài click, bạn có thể mua hoặc bán USDT trong vài giây",
    description: "Chọn giao dịch mua hoặc bán USDT một cách nhanh chóng và dễ dàng.",
    image: "/img/HowItWorksSection/B2.jpg",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <SectionHeading
          id="workflow"
          eyebrow="Cách hoạt động"
          title="Hoàn thành giao dịch chỉ với 2 bước đơn giản"
          description="Quy trình tối giản nhưng bảo mật tối đa – tất cả nằm gọn trong Telegram bot tự động của USDT247."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-3xl border border-border bg-background/60 backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/60"
            >
              <span className="absolute -top-20 right-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
              {step.image && (
                <div className="relative w-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full object-contain"
                  />
                </div>
              )}
              <div className="p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                  Bước {index + 1}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-soft-glow transition-transform hover:-translate-y-0.5",
            )}
          >
            👉 Mua/Bán qua Telegram ngay
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
