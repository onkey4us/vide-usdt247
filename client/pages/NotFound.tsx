import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        404
      </span>
      <h1 className="mt-6 text-4xl font-semibold text-foreground sm:text-5xl">
        Ôi! Trang bạn tìm không tồn tại.
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Có thể đường dẫn đã bị thay đổi hoặc nội dung chưa được khởi tạo. Quay lại
        trang chủ để tiếp tục giao dịch với USDT247.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          to="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-soft-glow",
          )}
        >
          Về trang chủ
        </Link>
        <a
          href="https://t.me/usdt247shopsupport"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-foreground transition hover:bg-white/10"
        >
          Liên hệ hỗ trợ
        </a>
      </div>
    </section>
  );
};

export default NotFound;
