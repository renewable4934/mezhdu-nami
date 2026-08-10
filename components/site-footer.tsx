import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assets";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#292622] text-[#F4F0EA] pt-16 pb-12 border-t border-[#766D65]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src={assetPath("/images/logo-mezhdu-nami-cutout-v2.png")}
                alt="Между нами"
                width={901}
                height={636}
                className="h-20 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-sm text-[#766D65] max-w-sm leading-relaxed font-light">
              Помогаем сохранить жизнь питомца целиком — такой, какой она была рядом с нами.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#A96855] font-medium">
              Навигация
            </h4>
            <ul className="space-y-2 text-sm text-[#F4F0EA]/80 font-light">
              <li>
                <Link href="/#approach" className="hover:text-[#A96855] transition-colors">
                  Подход
                </Link>
              </li>
              <li>
                <Link href="/#stories" className="hover:text-[#A96855] transition-colors">
                  Истории
                </Link>
              </li>
              <li>
                <Link href="/#biography" className="hover:text-[#A96855] transition-colors">
                  Фотобиография
                </Link>
              </li>
              <li>
                <Link href="/#formats" className="hover:text-[#A96855] transition-colors">
                  Форматы
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-[#A96855] transition-colors">
                  Путь
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & TODO info */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#A96855] font-medium">
              Связь
            </h4>
            <div className="space-y-2 text-sm text-[#F4F0EA]/80 font-light">
              {/* TODO: Add real Telegram / Phone / Email contacts when passed */}
              <p className="text-xs text-[#766D65]">
                Telegram: @mezhdu_nami_project
              </p>
              <p className="text-xs text-[#766D65]">
                {/* TODO: replace with real phone number */}
                Тел: +7 (999) 000-00-00 (TODO)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#766D65]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#766D65] gap-4">
          <p>© {currentYear} «Между нами». Все права защищены.</p>
          <div className="flex items-center space-x-6">
            {/* TODO: Create privacy policy page when legal copy is ready */}
            <span className="hover:text-[#F4F0EA] transition-colors cursor-pointer">
              Политика конфиденциальности (TODO)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
