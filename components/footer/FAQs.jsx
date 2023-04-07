import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const questions = [
    {
      question: "What is LabelMe?",
      answer:
        "Next.js is a framework for building server-side rendered React applications.",
    },
    {
      question: "How does server-side rendering work in Next.js?",
      answer:
        "When a user requests a page, Next.js generates the HTML on the server and sends it to the client, which improves performance and allows search engines to crawl your pages more easily.",
    },
    {
      question: "Can I use Tailwind CSS with Next.js?",
      answer:
        "Yes, you can use Tailwind CSS with Next.js by installing the `tailwindcss` and `postcss` packages and configuring your `postcss.config.js` file.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-labelme-wine py-10 mt-10 md:mt-0">
      <div className="container mx-auto px-4 py-8">
        <p className="text-white text-xl md:text-2xl">Got Questions?</p>
        <p className="text-labelme-pink mb-10 mt-3 md:text-2xl">
          Frequently Asked Questions
        </p>
        {questions.map((q, index) => (
          <div key={index}>
            <button
              className="flex justify-between items-center w-full pb-4 mb-2 border-b border-labelme-pink-lighter"
              onClick={() => handleClick(index)}
            >
              <span className="text-lg font-medium text-white text-left">
                {q.question}
              </span>

              <AiOutlinePlus
                className={`${
                  activeIndex === index ? "rotate-180" : ""
                } w-5 h-5 text-white`}
              />
            </button>
            {activeIndex === index && (
              <p className="bg-labelme-wine p-4 rounded-md border-b border-labelme-pink-lighter mb-5 text-labelme-pink">
                {q.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
