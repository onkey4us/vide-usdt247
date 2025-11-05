import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/sections/SectionHeading";

const FAQ_ITEMS = [
  {
    question: "USDT247 có an toàn không?",
    answer:
      "Có. Giao dịch qua bot Telegram tự động, kết nối ví xác minh và lưu trữ lạnh. Hệ thống sử dụng bảo mật đa lớp với mã hóa và xác thực liên tục.",
  },
  {
    question: "Thời gian giao dịch bao lâu?",
    answer:
      "Trung bình 2-3 phút, tùy ngân hàng và mạng lưới blockchain. Bot sẽ thông báo ngay khi giao dịch hoàn tất.",
  },
  {
    question: "Có giới hạn giao dịch không?",
    answer:
      "Không giới hạn cơ bản. Với số lớn >100 triệu VND, nên liên hệ trực tiếp support để được ưu tiên xử lý.",
  },
  {
    question: "Bot hoạt động 24/7 thật không?",
    answer:
      "Đúng, hệ thống tự động 24/7 và luôn có đội ngũ hỗ trợ trực để xử lý ngay khi có yêu cầu.",
  },
];

export const FaqSection = () => {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <SectionHeading
          id="faq"
          eyebrow="FAQ"
          title="Câu hỏi thường gặp"
          description="Nếu còn thắc mắc khác, hãy nhắn trực tiếp trong bot hoặc liên hệ đội ngũ support để được giải đáp ngay."
        />
        <Accordion
          type="single"
          collapsible
          className="overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-xl"
        >
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="border-border/50"
            >
              <AccordionTrigger className="px-6 text-left text-base text-foreground sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 text-sm text-muted-foreground sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
