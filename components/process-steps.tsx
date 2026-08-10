"use client";

import React from "react";

interface ProcessStepsProps {
  onOpenContactModal: (defaultFormat?: string) => void;
}

export function ProcessSteps({ onOpenContactModal }: ProcessStepsProps) {
  const steps = [
    {
      number: "01",
      title: "Познакомиться",
      description:
        "Мы разговариваем о питомце, его характере, привычках и том, что хочется сохранить.",
    },
    {
      number: "02",
      title: "Выбрать историю",
      description:
        "Вместе решаем, что будет в центре: жизнь дома, прогулки, отношения, важный этап или полноценная фотобиография.",
    },
    {
      number: "03",
      title: "Прожить этот день",
      description:
        "Съёмка проходит спокойно и естественно — дома, на прогулке или в знакомых питомцу местах.",
    },
    {
      number: "04",
      title: "Оставить рядом",
      description:
        "Мы получаем не просто файлы, а собранную историю: фотографии, альбом, печатные работы или другой способ сохранить её надолго.",
    },
  ];

  return (
    <section id="process" className="scroll-mt-28 py-24 bg-[#E9E0D5]/50 border-y border-[#D8CEC3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#A96855] font-medium">
            Путь
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2B2926]">
            Сначала — познакомиться. Потом — сохранить.
          </h2>
          <p className="text-[#766D65] font-light text-base sm:text-lg">
            Подход устроен так, чтобы съёмка не превращалась в стресс или длинную постановку.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 sm:p-8 bg-[#F4F0EA] rounded-xl border border-[#D8CEC3] flex flex-col justify-between space-y-6 hover:border-[#A96855]/40 transition-colors"
            >
              <div className="space-y-4">
                <span className="text-3xl sm:text-4xl font-serif font-light text-[#A96855]">
                  {step.number}
                </span>
                <h3 className="text-xl font-serif text-[#2B2926]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#766D65] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="w-8 h-[1px] bg-[#A96855]/40" />
            </div>
          ))}
        </div>

        {/* Action CTA */}
        <div className="pt-4 text-center">
          <button
            onClick={() => onOpenContactModal()}
            className="px-8 py-4 bg-[#292622] hover:bg-[#A96855] text-[#F4F0EA] rounded-full text-base font-medium transition-all duration-300 shadow-sm"
          >
            Обсудить нашу историю
          </button>
        </div>
      </div>
    </section>
  );
}
