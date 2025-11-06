import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/sections/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const TESTIMONIALS = [
  {
    quote:
      "Mua USDT ở đây cực nhanh, chưa đầy 5 phút có tiền.",
    name: "Thái Anh",
    role: "Trader OTC",
  },
  {
    quote: "Bot Telegram dễ dùng, tỷ giá rõ ràng.",
    name: "Duy Thanh",
    role: "Nhà đầu tư",
  },
  {
    quote: "Support 24/7 thật sự, gửi nhầm network được hỗ trợ ngay.",
    name: "Do Hung",
    role: "POD ",
  },
  {
    quote: "Tỷ giá tốt nhất thị trường, giao dịch minh bạch.",
    name: "Lan Anh",
    role: "Tiktoker",
  },
  {
    quote: "Rút tiền nhanh, không bị treo lệnh như sàn khác.",
    name: "Duc Hieu",
    role: "dropshipping",
  },
  {
    quote: "Hệ thống ổn định, chưa bao giờ gặp lỗi kỹ thuật.",
    name: "Nguyen Nam",
    role: "Tự Do",
  },
];

export const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Update current slide index
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api || isHovered) {
      return;
    }

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api, isHovered]);

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.12),_rgba(7,11,20,0))]" />
      <div className="section-container">
        <SectionHeading
          eyebrow="Cảm nhận người dùng"
          title="Được cộng đồng trader USDT tin tưởng"
          description="Khách hàng đánh giá cao tốc độ, tỷ giá minh bạch và đội support luôn sẵn sàng."
        />

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem
                  key={`${testimonial.name}-${index}`}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/70 p-8 shadow-[0_40px_120px_-70px_rgba(79,70,229,0.45)] backdrop-blur-xl">
                    <blockquote className="text-lg font-medium text-foreground">
                      "{testimonial.quote}"
                    </blockquote>
                    <figcaption className="mt-6 flex flex-col text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {testimonial.name}
                      </span>
                      <span>{testimonial.role}</span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden lg:block">
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
            </div>
          </Carousel>

          {/* Dots indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Đi đến testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};