import { useState } from "react";

const faqs = [
  {
    question: "What is ToyTopia?",
    answer:
      "ToyTopia is an online store offering a wide variety of toys for children of all ages, focusing on quality, safety, and fun.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping usually takes 3-5 business days. Expedited options are available at checkout.",
  },
  {
    question: "Can I return or exchange a toy?",
    answer:
      "Yes! We offer a 30-day return and exchange policy. Please see our Returns page for details.",
  },
  {
    question: "Are your toys safe for young children?",
    answer:
      "Absolutely. All our toys meet or exceed international safety standards and are carefully selected for age-appropriateness.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you’ll receive a tracking number by email. You can also track your order in your ToyTopia account.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Yes, gift wrapping is available for a small additional fee. You can select this option during checkout.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);
  return (
    <section className="max-w-2xl mx-auto py-16 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-primary/20 rounded-lg bg-white shadow"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-left text-primary focus:outline-none  rounded-lg"
              onClick={() => toggle(i)}
              aria-expanded={open === i}
              aria-controls={`faq-panel-${i}`}
            >
              {faq.question}
              <span
                className={`ml-4 transition-transform ${
                  open === i ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            {open === i && (
              <div
                id={`faq-panel-${i}`}
                className="px-6 pb-4 text-gray-500 animate-fade-in"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
