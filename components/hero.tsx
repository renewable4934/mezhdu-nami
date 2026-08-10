"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { assetPath } from "@/lib/assets";

interface HeroProps {
  onOpenContactModal: () => void;
}

export function Hero({ onOpenContactModal }: HeroProps) {
  return (
    <section className="relative min-h-[650px] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#F4F0EA]">
      {/* Background Editorial Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Replace with real project hero photography when available */}
        <Image
          src={assetPath("/images/hero_cover.jpg")}
          alt="Документальная фотография человека и золотистого ретривера в тёплом свете дома"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85 scale-102 transition-transform duration-1000"
        />
        {/* Gradient overlays to guarantee text legibility & warm mood */}
        <div className="absolute inset-0 bg-linear-to-r from-[#F4F0EA] from-0% via-[#F4F0EA]/78 via-46% to-transparent to-100%" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F0EA] via-transparent to-[#F4F0EA]/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#2B2926] leading-[1.15] tracking-tight">
            Помогаем создать и сохранить историю жизни питомца рядом с нами
          </h1>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenContactModal}
              className="px-8 py-4 bg-[#A96855] hover:bg-[#8D5443] text-[#F4F0EA] rounded-full text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#A96855]"
            >
              Рассказать о своей истории
            </button>

            <Link
              href="#stories"
              className="px-8 py-4 bg-[#E9E0D5]/70 hover:bg-[#E9E0D5] text-[#2B2926] border border-[#D8CEC3] rounded-full text-base font-medium text-center transition-all duration-200 backdrop-blur-xs"
            >
              Смотреть истории
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Bottom Footer Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between border-t border-[#D8CEC3]/60 text-sm sm:text-base text-[#766D65]">
        <p className="font-sans tracking-wide">
          Фотобиография питомца и авторские съёмки о жизни вместе
        </p>

        <Link
          href="#approach"
          aria-label="Прокрутить вниз к концепции"
          className="hidden sm:flex items-center gap-2 hover:text-[#2B2926] transition-colors"
        >
          <span>Узнать больше</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
