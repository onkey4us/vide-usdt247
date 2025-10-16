import { SectionHeading } from "@/components/sections/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Mua USDT ở đây cực nhanh, chưa đầy 5 phút có tiền.",
    name: "Minh N.",
    role: "Trader OTC",
  },
  {
    quote: "Bot Telegram dễ dùng, tỷ giá rõ ràng.",
    name: "Huyền T.",
    role: "Nhà đầu tư",
  },
  {
    quote: "Support 24/7 thật sự, gửi nhầm network được hỗ trợ ngay.",
    name: "Hoàng K.",
    role: "Khách hàng thân thiết",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.12),_rgba(7,11,20,0))]" />
      <div className="section-container">
        <SectionHeading
          eyebrow="Cảm nhận người dùng"
          title="Được cộng đồng trader USDT tin tưởng"
          description="Khách hàng đánh giá cao tốc độ, tỷ giá minh bạch và đội support luôn sẵn sàng."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-card/70 p-8 shadow-[0_40px_120px_-70px_rgba(79,70,229,0.45)] backdrop-blur-xl"
            >
              <blockquote className="text-lg font-medium text-foreground">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex flex-col text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{testimonial.name}</span>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
