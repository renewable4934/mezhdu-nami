"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Heart, Sun, Home, Clock, Compass } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { StoryGrid } from "@/components/story-grid";
import { ProcessSteps } from "@/components/process-steps";
import { SiteFooter } from "@/components/site-footer";
import { ContactFormModal } from "@/components/contact-form";

import { STORIES } from "@/data/stories";
import { assetPath } from "@/lib/assets";

const shootingFormats = [
  {
    label: "Формат 01",
    title: "Один день рядом",
    description:
      "Небольшая естественная съёмка в привычной среде. Подходит, если хочется сохранить конкретный период, день или событие.",
  },
  {
    label: "Формат 02",
    title: "История питомца",
    description:
      "Расширенная съёмка дома, на прогулке и вместе с человеком. Основной формат проекта.",
    featured: true,
  },
  {
    label: "Формат 03",
    title: "Фотобиография",
    description:
      "Продолжительная история, собранная из нескольких съёмок в течение времени. Подходит для щенка, котёнка, пожилого питомца или важного жизненного этапа.",
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<string>("Пока не знаем");

  const openContactModal = (format?: string) => {
    if (format) setSelectedFormat(format);
    setIsModalOpen(true);
  };

  const whatWeSaveItems = [
    {
      title: "Его характер",
      desc: "Упрямый, сонный, ласковый или смешной",
      icon: Heart,
      image: "/images/approach-character.png",
      alt: "Выразительный кот в домашнем интерьере",
    },
    {
      title: "Наши ритуалы",
      desc: "Утренний чай, вкладывание головы в ладони",
      icon: Sun,
      image: "/images/approach-rituals.png",
      alt: "Утренний домашний ритуал человека и собаки",
    },
    {
      title: "Любимые места",
      desc: "Определённый угол дивана, подоконник, тропа в парке",
      icon: Home,
      image: "/images/approach-places.png",
      alt: "Собака на знакомой прогулочной тропе рядом с человеком",
    },
    {
      title: "Жизнь дома",
      desc: "Уютный домашний хаос и личное пространство",
      icon: Home,
      image: "/images/approach-home-life.png",
      alt: "Собака отдыхает на привычном месте дома",
    },
    {
      title: "Важные этапы",
      desc: "Первый год, взросление, переезд, зрелые годы",
      icon: Clock,
      image: "/images/approach-milestones.png",
      alt: "Фотографии питомца, ошейник и альбом с важными этапами",
    },
    {
      title: "Время рядом",
      desc: "Молчаливое присутствие и совместное спокойствие",
      icon: Compass,
      image: "/images/approach-time-together.png",
      alt: "Тихое время рядом с собакой у окна",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F0EA] text-[#2B2926]">
      {/* Site Navigation */}
      <SiteHeader onOpenContactModal={openContactModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Block 1: Hero */}
        <Hero onOpenContactModal={() => openContactModal()} />

        {/* Block 2: What We Save / Approach */}
        <section id="approach" className="scroll-mt-28 py-24 bg-[#E9E0D5]/40 border-y border-[#D8CEC3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#A96855] font-medium">
                Подход
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2B2926]">
                Важны не только первые дни и большие события
              </h2>
              <p className="text-[#766D65] font-light text-base sm:text-lg leading-relaxed">
                Иногда история питомца — это не один праздник и не идеальный портрет. Это то, как он встречает нас у двери. Как спит на нашем месте. Как смотрит, когда мы собираемся на прогулку. Как меняется со временем. Мы сохраняем эти детали, потому что именно из них складывается наша жизнь вместе.
              </p>
            </div>

            {/* 6 Visual Detail Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatWeSaveItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-[#F4F0EA] rounded-xl overflow-hidden border border-[#D8CEC3] transition-all duration-300 hover:border-[#A96855]/40 hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-[#E9E0D5]">
                      {/* TODO: Replace with real project images */}
                      <Image
                        src={assetPath(item.image)}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-104 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#292622]/40 to-transparent" />
                    </div>
                    <div className="p-6 space-y-2">
                      <div className="flex items-center gap-2 text-[#A96855]">
                        <IconComponent className="w-4 h-4" />
                        <h3 className="text-lg font-serif text-[#2B2926]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#766D65] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Block 4: Stories Showcase */}
        <section id="stories" className="scroll-mt-28 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#A96855] font-medium">
                Сюжеты
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2B2926]">
                Истории, к которым хочется возвращаться
              </h2>
              <p className="text-[#766D65] font-light text-base sm:text-lg">
                Каждая съёмка начинается с того, что уже существует между нами. Мы не создаём идеальную версию питомца — мы вместе замечаем его настоящего.
              </p>
            </div>

            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A96855] hover:text-[#8D5443] transition-colors self-start md:self-auto"
            >
              <span>Смотреть все истории</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StoryGrid stories={STORIES.slice(0, 6)} />
        </section>

        {/* Block 5: Photobiography */}
        <section id="biography" className="scroll-mt-28 py-24 bg-[#E9E0D5]/50 border-y border-[#D8CEC3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#A96855] font-medium">
                Главный формат
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2B2926]">
                Фотобиография питомца
              </h2>
              <p className="text-lg text-[#A96855] font-serif italic">
                Не одна фотосессия, а визуальная история жизни рядом с нами.
              </p>
              <p className="text-[#766D65] font-light leading-relaxed">
                Обычная фотосессия сохраняет отдельный день. Фотобиография помогает увидеть целую жизнь — её характер, привычки, отношения и изменения со временем.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-[#2B2926] font-light">
                {[
                  "знакомство и разговор о питомце",
                  "съёмку дома",
                  "прогулку и любимые места",
                  "портреты питомца",
                  "фотографии вместе",
                  "важные события и этапы",
                  "подбор и обработку снимков",
                  "фотокнигу или печатный альбом",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A96855] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <button
                  onClick={() => openContactModal("Фотобиография")}
                  className="px-8 py-4 bg-[#A96855] hover:bg-[#8D5443] text-[#F4F0EA] rounded-full text-base font-medium transition-all duration-200 shadow-sm"
                >
                  Обсудить фотобиографию
                </button>
              </div>
            </div>

            {/* Right Large Photobiography Book Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#D8CEC3]">
                {/* TODO: Replace with real project photobiography book image */}
                <Image
                  src={assetPath("/images/photobiography_book.jpg")}
                  alt="Печатная фотокнига с историями питомцев"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Block 6: Formats */}
        <section id="formats" className="scroll-mt-28 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-sm text-[#A96855] font-medium">
              Форматы съёмки
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#2B2926] leading-tight">
              Можно начать с одного дня
            </h2>
            <p className="text-[#766D65] font-light text-base sm:text-lg">
              Мы предлагаем 3 формата работы в зависимости от глубины истории.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {shootingFormats.map((format) => (
              <article
                key={format.title}
                className={`relative min-h-[380px] p-8 sm:p-10 rounded-2xl flex flex-col justify-between space-y-10 transition-all duration-300 ${
                  format.featured
                    ? "bg-[#F4F0EA] border-2 border-[#A96855] shadow-lg shadow-[#292622]/10"
                    : "bg-[#E9E0D5]/25 border border-[#D8CEC3] hover:border-[#A96855]/40"
                }`}
              >
                {format.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#A96855] text-[#F4F0EA] text-xs rounded-full font-medium whitespace-nowrap">
                    Основной формат
                  </div>
                )}

                <div className="space-y-5">
                  <span className="text-sm text-[#A96855] font-medium">
                    {format.label}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif font-normal text-[#2B2926] leading-tight">
                    {format.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#766D65] font-light leading-relaxed">
                    {format.description}
                  </p>
                </div>

                <button
                  onClick={() => openContactModal(format.title)}
                  className={`w-full py-4 rounded-xl text-sm font-medium transition-colors ${
                    format.featured
                      ? "bg-[#A96855] hover:bg-[#8D5443] text-[#F4F0EA]"
                      : "bg-[#F4F0EA] hover:bg-[#E9E0D5] text-[#2B2926] border border-[#D8CEC3]"
                  }`}
                >
                  Выбрать этот формат
                </button>
              </article>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-[#766D65] italic font-serif">
            Формат определяется не количеством часов, а тем, какую историю мы хотим сохранить.
          </p>
        </section>

        {/* Block 7: Process Steps */}
        <ProcessSteps onOpenContactModal={openContactModal} />

        {/* Block 8: Daria and Approach */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Daria Portrait */}
            <div className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[#D8CEC3]">
              {/* TODO: Replace with real Daria portrait image when available */}
              <Image
                src={assetPath("/images/daria_portrait.jpg")}
                alt="Портрет фотографа Дарьи во время взаимодействия с питомцем"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#A96855] font-medium">
                Дарья и наш подход
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2B2926] leading-tight">
                Мы стараемся увидеть не просто питомца, а того, кем он является рядом с нами
              </h2>
              <p className="text-[#766D65] font-light text-base sm:text-lg leading-relaxed">
                У каждого животного есть свой ритм, характер и способ быть рядом. Кто-то встречает нас у двери, кто-то молча ложится рядом, кто-то каждый день придумывает собственные правила. Нам важно не заставить питомца позировать, а заметить его настоящего — и сохранить то, что делает именно нашу связь особенной.
              </p>
              <div className="p-4 bg-[#E9E0D5]/50 border-l-2 border-[#A96855] rounded-r-lg">
                <p className="text-sm font-serif italic text-[#2B2926]">
                  Дарья помогает внимательно посмотреть на уже существующую историю и собрать её в форму, к которой можно возвращаться.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Block 9: Future Direction - Pet Concierge */}
        <section className="py-20 bg-[#E9E0D5]/60 border-y border-[#D8CEC3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F0EA] rounded-full border border-[#D8CEC3] text-xs text-[#A96855] font-medium uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Скоро — сервис заботы и сопровождения
            </div>
            <span className="block text-xs uppercase tracking-widest text-[#766D65]">
              Дальше — больше, чем фотографии
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2B2926]">
              Жизнь питомца — это не только то, что хочется сохранить
            </h2>
            <p className="text-[#766D65] font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Иногда ей нужна помощь в том, чтобы состояться. Со временем «Между нами» будет развиваться в сторону персонального сопровождения владельцев: поиска специалистов, организации заботы, важных событий и повседневных задач, связанных с питомцем.
            </p>
            <div className="pt-4 text-sm font-serif italic text-[#2B2926]">
              Сначала мы сохраняем историю. В дальнейшем — помогаем создавать её дальше.
            </div>
          </div>
        </section>

        {/* Block 10: Final Emotional CTA */}
        <section id="contact" className="py-28 bg-[#292622] text-[#F4F0EA] relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
            <h2 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#F4F0EA]">
              Между нами уже есть история.
            </h2>
            <p className="text-lg sm:text-xl text-[#F4F0EA]/70 font-light leading-relaxed max-w-xl mx-auto">
              Расскажите немного о ней — и мы вместе подумаем, как её сохранить.
            </p>
          </div>
        </section>
      </main>

      {/* Site Footer */}
      <SiteFooter />

      {/* Global Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultFormat={selectedFormat}
      />
    </div>
  );
}
