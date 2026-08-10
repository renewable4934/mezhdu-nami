"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/assets";

interface SiteHeaderProps {
  onOpenContactModal: (defaultFormat?: string) => void;
}

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="relative isolate block">
      <span
        aria-hidden="true"
        className="absolute -left-28 -right-24 -top-14 -bottom-14 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,240,234,0.72)_0%,rgba(244,240,234,0.46)_42%,rgba(244,240,234,0.18)_64%,rgba(244,240,234,0)_88%)] blur-3xl"
      />
      <Image
        src={assetPath("/images/logo-mezhdu-nami-cutout-v2.png")}
        alt="Между нами"
        width={901}
        height={636}
        priority
        className={`w-auto object-contain transition-opacity duration-200 group-hover:opacity-80 ${
          compact ? "h-[68px]" : "h-20 sm:h-24"
        }`}
      />
    </span>
  );
}

export function SiteHeader({ onOpenContactModal }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Подход", href: "/#approach" },
    { label: "Истории", href: "/#stories" },
    { label: "Фотобиография", href: "/#biography" },
    { label: "Форматы", href: "/#formats" },
    { label: "Путь", href: "/#process" },
  ];

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsMobileMenuOpen(false);

    if (!href.startsWith("/#") || window.location.pathname !== "/") {
      return;
    }

    const target = document.getElementById(href.slice(2));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F4F0EA]/90 backdrop-blur-md border-b border-[#D8CEC3] py-3 shadow-xs"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center focus-visible:outline-none"
            aria-label="Между нами — на главную"
          >
            <BrandLogo compact={isScrolled} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-12 text-sm font-medium text-[#766D65]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="hover:text-[#2B2926] transition-colors py-1 focus-visible:outline-none focus-visible:text-[#A96855]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => onOpenContactModal()}
              className="px-5 py-2.5 bg-[#A96855] hover:bg-[#8D5443] text-[#F4F0EA] rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#A96855]"
            >
              Рассказать о своей истории
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => onOpenContactModal()}
              className="px-3.5 py-1.5 bg-[#A96855] text-[#F4F0EA] rounded-full text-xs font-medium"
            >
              Заявка
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Открыть меню"
              className="p-2 text-[#2B2926] hover:bg-[#E9E0D5] rounded-full transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F4F0EA] flex flex-col animate-in fade-in duration-200">
          {/* Header inside drawer */}
          <div className="p-6 flex items-center justify-between border-b border-[#D8CEC3]">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group focus-visible:outline-none"
              aria-label="Между нами — на главную"
            >
              <BrandLogo compact />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Закрыть меню"
              className="p-2 text-[#766D65] hover:text-[#2B2926] rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto">
            <nav className="flex flex-col space-y-6 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="font-serif text-3xl text-[#2B2926] hover:text-[#A96855] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#766D65]" />
                </Link>
              ))}
            </nav>

            <div className="pt-8 border-t border-[#D8CEC3] space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full py-4 bg-[#A96855] text-[#F4F0EA] rounded-full text-base font-medium text-center shadow-sm"
              >
                Рассказать о своей истории
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
