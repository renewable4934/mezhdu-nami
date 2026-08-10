"use client";

import React from "react";
import { Story } from "@/data/stories";
import { StoryCard } from "./story-card";

interface StoryGridProps {
  stories: Story[];
}

export function StoryGrid({ stories }: StoryGridProps) {
  if (stories.length === 0) {
    return (
      <div className="py-16 px-6 text-center bg-[#E9E0D5]/40 rounded-2xl border border-[#D8CEC3] max-w-2xl mx-auto">
        <h3 className="text-xl font-serif text-[#2B2926] mb-2">
          История готовится
        </h3>
        <p className="text-sm text-[#766D65] leading-relaxed">
          Мы собираем первые истории проекта. Скоро здесь появятся рассказы о питомцах, их людях и времени, которое они прожили рядом.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stories.map((story, idx) => (
        <StoryCard
          key={story.slug}
          story={story}
          aspectRatio={idx % 3 === 0 ? "portrait" : idx % 3 === 1 ? "landscape" : "square"}
        />
      ))}
    </div>
  );
}
