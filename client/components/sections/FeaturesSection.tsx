import { BadgeCheck, Lock, Zap, Timer } from "lucide-react";

import { SectionHeading } from "@/components/sections/SectionHeading";

const FEATURES = [
  {
    title: "⚡ Nhanh chóng",
    description:
      "Giao dịch tự động, xử lý trong vài phút qua Telegram bot.",
    icon: Zap,
  },
  {
    title: "💰 Giá cạnh tranh",
    description:
      "Tỷ giá cập nhật liên tục, minh bạch, không phí ẩn.",
    icon: BadgeCheck,
  },
  {
    title: "🔒 An toàn tuyệt đối",
    description:
      "Giao dịch xác thực bằng công nghệ Zero-Knowledge (zk), đảm bảo ẩn danh tuyệt đối nhưng vẫn minh bạch. TXID công khai, dữ liệu được mã hóa bằng chuẩn zk-SNARK + SSL.",
    icon: Lock,
  },
  {
    title: "🕐 Hỗ trợ 24/7",
    description:
      "Đội ngũ trực Telegram liên tục, sẵn sàng giải đáp & xử lý ngay.",
    icon: Timer,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6">
        <SectionHeading
          id="features"
          eyebrow="Vì sao chọn USDT247?"
          title="Các lý do khiến trader tin chọn USDT247"
          description="Hệ thống tự động, an toàn và tối ưu tỷ giá – được thiết kế đặc biệt cho nhu cầu giao dịch của người dùng Việt Nam."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/70 p-8 shadow-[0_35px_120px_-60px_rgba(16,185,129,0.45)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="absolute -right-16 top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-80" />
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
