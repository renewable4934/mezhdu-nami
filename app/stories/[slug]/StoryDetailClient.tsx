"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Quote, Maximize2 } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactFormModal } from "@/components/contact-form";
import { Lightbox } from "@/components/lightbox";
import { STORIES, getStoryBySlug } from "@/data/stories";
import { assetPath } from "@/lib/assets";

export function StoryDetailClient({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const story = getStoryBySlug(resolvedParams.slug);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F4F0EA] text-[#2B2926]">
        <SiteHeader onOpenContactModal={() => setIsModalOpen(true)} />
        <main className="flex-1 flex items-center justify-center p-6 pt-32">
          <div className="text-center space-y-4 max-w-md">
            <h1 className="text-3xl font-serif text-[#2B2926]">
              История не найдена
            </h1>
            <p className="text-sm text-[#766D65]">
              Запрошенная история ещё не добавлена в проект или перемещена.
            </p>
            <Link
              href="/stories"
              className="inline-block px-6 py-3 bg-[#A96855] text-[#F4F0EA] rounded-full text-sm font-medium"
            >
              Ко всем историям
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  // Find previous and next stories
  const currentIndex = STORIES.findIndex((s) => s.slug === story.slug);
  const prevStory = STORIES[(currentIndex - 1 + STORIES.length) % STORIES.length];
  const nextStory = STORIES[(currentIndex + 1) % STORIES.length];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F0EA] text-[#2B2926]">
      {/* Site Header */}
      <SiteHeader onOpenContactModal={() => setIsModalOpen(true)} />

      <main className="flex-1 pt-28 pb-24">
        {/* Top Breadcrumbs / Back button */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#766D65] hover:text-[#A96855] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Все истории</span>
          </Link>
        </div>

        {/* Hero Section of Individual Story */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header titles */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="px-3.5 py-1.5 bg-[#E9E0D5] text-[#A96855] text-xs font-medium rounded-full border border-[#D8CEC3] inline-block">
              {story.category}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#2B2926] leading-tight">
              {story.title}
            </h1>
            {story.petName && (
              <p className="text-sm text-[#766D65] uppercase tracking-widest font-mono">
                {story.petName} {story.ownerName ? `• ${story.ownerName}` : ""}{" "}
                {story.location ? `• ${story.location}` : ""}
              </p>
            )}
          </div>

          {/* Main Hero Photo */}
          <div
            onClick={() => openLightbox(0)}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[#D8CEC3] cursor-pointer group"
          >
            {/* TODO: Replace with real project story main photography */}
            <Image
              src={assetPath(story.heroImage)}
              alt={story.heroAlt}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute bottom-4 right-4 bg-[#292622]/60 text-[#F4F0EA] p-2 rounded-full backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-5 h-5" />
            </div>
          </div>

          {/* Story Narrative Text */}
          <div className="max-w-2xl mx-auto space-y-6 text-base sm:text-lg text-[#2B2926] font-light leading-relaxed">
            <p className="font-serif italic text-xl sm:text-2xl text-[#766D65] border-l-2 border-[#A96855] pl-4">
              {story.excerpt}
            </p>
            <p>{story.body}</p>
          </div>

          {/* Block: "Что было важно сохранить" */}
          {story.importantToKeep && story.importantToKeep.length > 0 && (
            <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-[#E9E0D5]/50 border border-[#D8CEC3] rounded-2xl space-y-4">
              <h3 className="text-xl font-serif text-[#2B2926]">
                Что было важно сохранить
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-[#766D65] font-light">
                {story.importantToKeep.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A96855] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Asymmetrical Photo Gallery */}
          {story.images && story.images.length > 0 && (
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-serif text-[#2B2926] text-center">
                Галерея этой истории
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {story.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D8CEC3] cursor-pointer group bg-[#E9E0D5]"
                  >
                    <Image
                      src={assetPath(img.src)}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#292622]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#F4F0EA]">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quote Block (if provided) */}
          {story.quote && (
            <div className="max-w-2xl mx-auto my-12 p-8 bg-[#F4F0EA] border border-[#D8CEC3] rounded-2xl text-center space-y-4 relative">
              <Quote className="w-8 h-8 text-[#A96855]/30 mx-auto" />
              <p className="font-serif italic text-xl text-[#2B2926]">
                «{story.quote.text}»
              </p>
              <p className="text-xs uppercase tracking-widest text-[#766D65] font-mono">
                — {story.quote.author}
              </p>
            </div>
          )}

          {/* Process note */}
          <div className="max-w-xl mx-auto text-center text-xs text-[#766D65] italic border-t border-[#D8CEC3] pt-8">
            Съёмка проходила в естественной домашней обстановке без искусственных постановок.
          </div>

          {/* Story CTA */}
          <div className="pt-8 text-center space-y-4">
            <h3 className="text-2xl font-serif text-[#2B2926]">
              Хотите создать похожую историю?
            </h3>
            <p className="text-sm text-[#766D65] max-w-md mx-auto">
              Напишите нам о своём питомце, и мы вместе выберем спокойный формат съёмки.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-[#A96855] hover:bg-[#8D5443] text-[#F4F0EA] rounded-full text-base font-medium transition-colors shadow-sm"
            >
              Создать такую историю
            </button>
          </div>

          {/* Prev / Next Story Links Navigation */}
          <div className="pt-16 border-t border-[#D8CEC3] grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/stories/${prevStory.slug}`}
              className="p-6 bg-[#E9E0D5]/30 hover:bg-[#E9E0D5]/60 border border-[#D8CEC3] rounded-xl flex items-center gap-4 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 text-[#A96855] group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-[#766D65]">
                  Предыдущая история
                </span>
                <p className="font-serif text-lg text-[#2B2926]">
                  {prevStory.title}
                </p>
              </div>
            </Link>

            <Link
              href={`/stories/${nextStory.slug}`}
              className="p-6 bg-[#E9E0D5]/30 hover:bg-[#E9E0D5]/60 border border-[#D8CEC3] rounded-xl flex items-center justify-end gap-4 transition-colors text-right group"
            >
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#766D65]">
                  Следующая история
                </span>
                <p className="font-serif text-lg text-[#2B2926]">
                  {nextStory.title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#A96855] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>
      </main>

      {/* Lightbox for story images */}
      <Lightbox
        images={story.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
