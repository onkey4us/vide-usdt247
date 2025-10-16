import { useEffect, useState } from "react";
import { Activity, Timer, Wallet } from "lucide-react";

const RATE_ITEMS = [
  {
    label: "Tỷ giá hôm nay",
    value: "1 USDT ≈ 23,500 VND",
    note: "(cập nhật mỗi phút)",
    icon: Wallet,
  },
  {
    label: "Phí giao dịch",
    value: "từ 0.5%",
    note: "Tùy khối lượng & đối tác ngân hàng",
    icon: Activity,
  },
  {
    label: "Thời gian xử lý trung bình",
    value: "3 phút",
    note: "Thực tế 1–5 phút tùy ngân hàng",
    icon: Timer,
  },
];

export const RatesSection = () => {
  const [lastUpdated, setLastUpdated] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(lastUpdated);

  return (
    <section className="relative py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Cập nhật {formattedTime}
          </span>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Hôm nay USDT ở mức giá tối ưu cho giao dịch nhanh tại Việt Nam.
            </h2>
            <p className="text-base text-muted-foreground">
              Tất cả giao dịch đều có thông báo realtime trong bot và bảng tỷ giá được làm mới liên tục.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {RATE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/60 p-8 backdrop-blur-xl transition hover:border-primary/40"
              >
                <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </div>
                <p className="mt-6 text-2xl font-semibold text-foreground">
                  {item.value}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
