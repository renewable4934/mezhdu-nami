import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mezhdu-nami.ru"),
  title: "Между нами — авторские истории о питомцах и их людях",
  description:
    "Фотобиография питомца и авторские съёмки о характере, близости и жизни рядом.",
  openGraph: {
    title: "Между нами — авторские истории о питомцах и их людях",
    description:
      "Фотобиография питомца и авторские съёмки о характере, близости и жизни рядом.",
    url: "https://mezhdu-nami.ru",
    siteName: "Между нами",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/hero_cover.jpg",
        width: 1200,
        height: 630,
        alt: "Между нами — авторские истории о питомцах и их людях",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F0EA] text-[#2B2926] font-sans selection:bg-[#A96855]/20 selection:text-[#2B2926]">
        {children}
      </body>
    </html>
  );
}

