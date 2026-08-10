"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/data/stories";
import { assetPath } from "@/lib/assets";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-[#292622]/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Закрыть просмотр"
        className="absolute top-6 right-6 z-50 p-3 text-[#F4F0EA]/80 hover:text-[#F4F0EA] bg-[#292622]/50 hover:bg-[#292622] rounded-full transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-50 text-xs text-[#F4F0EA]/70 uppercase tracking-widest font-mono">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev / Next buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            aria-label="Предыдущее фото"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-[#F4F0EA]/80 hover:text-[#F4F0EA] bg-[#292622]/50 hover:bg-[#292622] rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            aria-label="Следующее фото"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-[#F4F0EA]/80 hover:text-[#F4F0EA] bg-[#292622]/50 hover:bg-[#292622] rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Image */}
      <div className="relative max-w-5xl max-h-[85vh] w-full h-full p-4 flex flex-col items-center justify-center">
        <div className="relative w-full h-[75vh]">
          <Image
            src={assetPath(currentImage.src)}
            alt={currentImage.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
        {currentImage.caption && (
          <p className="mt-4 text-sm text-[#F4F0EA]/80 font-serif italic text-center max-w-lg">
            {currentImage.caption}
          </p>
        )}
      </div>
    </div>
  );
}
