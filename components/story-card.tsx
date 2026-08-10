"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Story } from "@/data/stories";
import { assetPath } from "@/lib/assets";

interface StoryCardProps {
  story: Story;
  aspectRatio?: "portrait" | "landscape" | "square";
}

export function StoryCard({ story, aspectRatio = "landscape" }: StoryCardProps) {
  const aspectClasses = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    square: "aspect-square",
  };

  return (
    <article className="group flex flex-col h-full bg-[#E9E0D5]/30 rounded-xl overflow-hidden border border-[#D8CEC3]/60 transition-all duration-300 hover:border-[#A96855]/40 hover:shadow-md">
      {/* Card Image Container */}
      <Link
        href={`/stories/${story.slug}`}
        className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden block bg-[#E9E0D5]`}
      >
        {/* TODO: Replace with real project story image when available */}
        <Image
          src={assetPath(story.heroImage)}
          alt={story.heroAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-[#F4F0EA]/90 backdrop-blur-xs text-[#766D65] text-xs font-medium rounded-full border border-[#D8CEC3]">
            {story.category}
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-serif text-[#2B2926] group-hover:text-[#A96855] transition-colors leading-snug">
            <Link href={`/stories/${story.slug}`}>{story.title}</Link>
          </h3>
          <p className="text-sm text-[#766D65] leading-relaxed line-clamp-3 font-light">
            {story.excerpt}
          </p>
        </div>

        {/* Footer Link */}
        <div className="pt-2 border-t border-[#D8CEC3]/50 flex items-center justify-between">
          <span className="text-xs text-[#766D65] font-medium">
            {story.petName ? `История ${story.petName}` : "Авторский сюжет"}
          </span>
          <Link
            href={`/stories/${story.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-[#A96855] group-hover:translate-x-0.5 transition-transform"
          >
            <span>Читать историю</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
