import { SectionHeading } from "@/components/sections/SectionHeading";

export const BrandSection = () => {
  return (
    <section className="relative py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Giới thiệu thương hiệu"
          title="USDT247 – Giao dịch USDT tự động cho người dùng Việt"
          description="Không cần quy trình phức tạp, không phải chờ đợi. Chỉ cần Telegram là bạn có thể mua/bán USDT mọi lúc, mọi nơi."
          align="left"
        />
        <div className="space-y-6 text-base text-muted-foreground sm:text-lg">
          <p>
            USDT247 là nền tảng giao dịch USDT tự động, phục vụ người dùng Việt Nam 24/7.
            Chúng tôi giúp bạn mua/bán nhanh – an toàn – tỷ giá tốt, hoàn toàn qua Telegram Bot.
          </p>
          <p>
            Mọi giao dịch đều được bảo vệ bằng công nghệ mã hóa tiên tiến, xác thực Zero-Knowledge và lưu trữ lạnh an toàn. Hệ thống được thiết kế để xử lý khối lượng lớn mà vẫn đảm bảo trải nghiệm mượt mà.
          </p>
          <p>
            Không cần đăng ký phức tạp, chỉ cần Telegram là có thể bắt đầu. Giao dịch minh bạch với TXID rõ ràng và đội ngũ hỗ trợ luôn trực để đồng hành cùng bạn.
          </p>
        </div>
      </div>
    </section>
  );
};
