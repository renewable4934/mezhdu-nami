"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { StoryGrid } from "@/components/story-grid";
import { SiteFooter } from "@/components/site-footer";
import { ContactFormModal } from "@/components/contact-form";

import { CATEGORIES, getStoriesByCategory } from "@/data/stories";

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStories = getStoriesByCategory(activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F0EA] text-[#2B2926]">
      {/* Site Header */}
      <SiteHeader onOpenContactModal={() => setIsModalOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header section */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#A96855] font-medium">
              Архив историй
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#2B2926]">
              Истории о том, что между нами
            </h1>
            <p className="text-lg text-[#766D65] font-light leading-relaxed">
              Дома, на прогулке, в первые месяцы и в долгие годы рядом — у каждой связи свой ритм.
            </p>
          </div>

          {/* Client-side Filter buttons */}
          <div className="flex flex-wrap gap-2 pt-2 border-b border-[#D8CEC3] pb-6">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#A96855] text-[#F4F0EA] shadow-xs"
                      : "bg-[#E9E0D5]/50 text-[#766D65] hover:bg-[#E9E0D5] hover:text-[#2B2926]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Filtered Stories Grid */}
          <StoryGrid stories={filteredStories} />

          {/* CTA Box */}
          <div className="mt-16 p-8 sm:p-12 bg-[#E9E0D5]/40 rounded-2xl border border-[#D8CEC3] text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2B2926]">
              Хотите сохранить вашу историю?
            </h2>
            <p className="text-sm sm:text-base text-[#766D65] max-w-lg mx-auto font-light">
              Расскажите немного о своём питомце и ваших общих днях. Мы предложим подходящий формат съёмки.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 bg-[#A96855] hover:bg-[#8D5443] text-[#F4F0EA] rounded-full text-sm font-medium transition-colors"
            >
              Рассказать о своей истории
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
