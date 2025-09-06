"use client";

import React, { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  index?: number;
  question: string;
  answer: string;
}

interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  faqs: FAQItem[];
  title?: string;
  searchable?: boolean;
  colorScheme?: "blue" | "purple" | "green";
  titleColor?: string
}

// --- SVG ICONS ---
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
  </svg>
);


const FAQ = forwardRef<HTMLDivElement, FAQProps>(
  (
    {
      faqs,
      title = "FAQs",
      searchable = false,
      colorScheme = "blue",
      titleColor = "text-black",
      className,
      ...props
    },
    ref
  ) => {
    const [openItems, setOpenItems] = useState(new Set<number>());
    const [searchTerm, setSearchTerm] = useState("");

    const toggleItem = (index: number) => {
      const newOpenItems = new Set(openItems);
      if (newOpenItems.has(index)) newOpenItems.delete(index);
      else newOpenItems.add(index);
      setOpenItems(newOpenItems);
    };

    const filteredFaqs = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const colorSchemes = {
      blue: {
        gradient: "from-blue-600 via-purple-600 to-indigo-600",
        accent: "text-primary-3",
        border: "border-primary-1",
        hover: "hover:border-primary-1",
        bg: "bg-primary-1",
        searchBg: "bg-primary-1",
      },
      purple: {
        gradient: "from-purple-600 via-pink-600 to-rose-600",
        accent: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:border-purple-300",
        bg: "bg-purple-50",
        searchBg: "bg-purple-100",
      },
      green: {
        gradient: "from-green-600 via-teal-600 to-cyan-600",
        accent: "text-green-600",
        border: "border-green-200",
        hover: "hover:border-green-300",
        bg: "bg-green-50",
        searchBg: "bg-green-100",
      },
    };

    const colors = colorSchemes[colorScheme];

    return (
      <div
        ref={ref}
        className={cn("w-full max-w-4xl mx-auto p-6 space-y-8", className)}
        {...props}
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <h2
              className={cn(
                "text-4xl md:text-5xl font-bold bg-gradient-to-r",
                titleColor,
              )}
            >
              {title}
            </h2>
          </div>
        </div>

        {/* Search Bar */}
        {searchable && (
          <div className="relative max-w-md mx-auto">
            <div className="text-primary-3 absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Tìm câu hỏi của bạn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={cn(
                "text-primary-3 w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-opacity-20 transition-all duration-300 transform",
                colors.border,
                colors.searchBg,
                "focus:ring-primary-2"
              )}
              aria-label="Search FAQs"
            />
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            const displayIndex = faq.index ?? index + 1;

            return (
              <div
                key={index}
                className={cn(
                  "text-primary-3 group border-2 rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm",
                  colors.border,
                  colors.hover,
                  colors.bg
                )}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="text-primary-3 w-full px-6 py-5 text-left transition-all duration-300"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-primary-3 font-bold text-sm transition-transform duration-300",
                          colors.gradient,
                          isOpen ? "rotate-12" : ""
                        )}
                      >
                        {displayIndex}
                      </div>
                      <h3 className="text-sm md:text-base font-semibold text-primary-3  group-hover:text-primary-3  transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={cn(
                        "flex items-center space-x-2 transition-transform duration-500",
                        isOpen ? "rotate-180" : ""
                      )}
                    >
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </div>
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-12">
                      <div className="w-full h-px bg-primary-6 mb-4"></div>
                      <p className="text-primary-3  leading-relaxed text-sm md:text-base animate-fadeIn">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Hiện chưa có thông tin cho câu hỏi này. Vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
          </div>
        )}
      </div>
    );
  }
);

FAQ.displayName = "FAQ";

export { FAQ };