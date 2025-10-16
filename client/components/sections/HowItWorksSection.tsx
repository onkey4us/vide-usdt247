import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/utils";

const TELEGRAM_BOT_URL = "https://t.me/USDT247bot";

const STEPS = [
  {
    title: "1️⃣ Mở Telegram bot USDT247",
    description: "Bấm nút “Bắt đầu giao dịch”.",
  },
  {
    title: "2️⃣ Chọn Mua hoặc Bán",
    description: "Nhập số lượng USDT hoặc VND bạn muốn giao dịch.",
  },
  {
    title: "3️⃣ Làm theo hướng dẫn trong bot",
    description: "Bot sẽ gửi chi tiết chuyển khoản / ví nhận.",
  },
  {
    title: "4️⃣ Nhận tiền hoặc USDT chỉ sau vài phút",
    description: "Hoàn tất siêu nhanh, có TXID đối soát rõ ràng.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <SectionHeading
          id="workflow"
          eyebrow="Cách hoạt động"
          title="Hoàn thành giao dịch chỉ với 4 bước đơn giản"
          description="Quy trình tối giản nhưng bảo mật tối đa – tất cả nằm gọn trong Telegram bot tự động của USDT247."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-background/60 p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/60"
            >
              <span className="absolute -top-20 right-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                Bước {index + 1}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
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
