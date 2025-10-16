import { SectionHeading } from "@/components/sections/SectionHeading";

export const BankSection = () => {
  return (
    <section className="relative overflow-hidden bg-card/50 py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="section-container">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <SectionHeading
            id="banks"
            eyebrow="Phương thức thanh toán"
            title="Liên kết hơn 50+ ngân hàng, 7+ ví điện tử"
            description="Hỗ trợ đa dạng phương thức thanh toán, giúp bạn giao dịch USDT một cách linh hoạt và tiện lợi."
          />
          <div className="mt-8 flex flex-col items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_35px_120px_-60px_rgba(16,185,129,0.45)]">
              <img
                src="/img/bank/bank-img-DrEv4rsG.webp"
                alt="Liên kết ngân hàng và ví điện tử"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm text-primary">
              Phương thức thanh toán
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Liên kết hơn 50+ ngân hàng, 7+ ví điện tử
            </h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              Hỗ trợ đa dạng phương thức thanh toán, giúp bạn giao dịch USDT một cách linh hoạt và tiện lợi.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_35px_120px_-60px_rgba(16,185,129,0.45)]">
            <img
              src="/img/bank/bank-img-DrEv4rsG.webp"
              alt="Liên kết ngân hàng và ví điện tử"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

