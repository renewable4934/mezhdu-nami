"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultFormat?: string;
}

export function ContactFormModal({
  isOpen,
  onClose,
  defaultFormat = "Пока не знаем",
}: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    petName: "",
    petType: "собака",
    petAge: "",
    city: "",
    format: defaultFormat,
    specialMemories: "",
    contactInfo: "",
    contactMethod: "Telegram",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const isDemo = true;

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Пожалуйста, напишите, как к нам обращаться.";
    }
    if (!formData.petName.trim()) {
      newErrors.petName = "Добавьте имя питомца.";
    }
    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = "Оставьте телефон или Telegram.";
    }
    if (!formData.contactMethod) {
      newErrors.contactMethod = "Выберите удобный способ связи.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // TODO: Replace this demo timeout with your actual submission API endpoint / Telegram bot webhook
    setTimeout(() => {
      // Simulate form submission
      setStatus("success");
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-[#292622]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-2xl h-full md:h-[94vh] md:my-auto md:mr-4 md:rounded-2xl bg-[#F4F0EA] text-[#2B2926] shadow-2xl overflow-y-auto flex flex-col z-10 border border-[#D8CEC3]">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#F4F0EA]/95 backdrop-blur-md px-6 py-5 border-b border-[#D8CEC3] flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A96855] font-medium">
              Знакомство
            </span>
            <h2 id="modal-title" className="text-2xl font-serif font-normal text-[#2B2926]">
              Расскажите немного о нас
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Закрыть форму"
            className="p-2 rounded-full text-[#766D65] hover:text-[#2B2926] hover:bg-[#E9E0D5] transition-colors focus-visible:ring-2 focus-visible:ring-[#A96855]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 flex-1">
          <p className="text-[#766D65] text-sm md:text-base leading-relaxed mb-6">
            Нам важно сначала познакомиться с нашей историей. Можно написать коротко или подробно — как удобно.
          </p>

          {/* Demo status alert */}
          {isDemo && status !== "success" && (
            <div className="mb-6 p-3 px-4 bg-[#E9E0D5] border border-[#D8CEC3] rounded-lg text-xs text-[#766D65] flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A96855]" />
                Демо-режим: форма готова к подключению канала заявок.
              </span>
              {/* TODO: Connect webhooks / backend service here */}
            </div>
          )}

          {status === "success" ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-[#A96855]/10 text-[#A96855] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif text-[#2B2926]">
                Спасибо!
              </h3>
              <p className="text-[#766D65] max-w-md mx-auto leading-relaxed">
                Мы получили нашу историю и скоро свяжемся, чтобы продолжить разговор.
              </p>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#292622] text-[#F4F0EA] rounded-full text-sm font-medium hover:bg-[#A96855] transition-colors"
                >
                  Вернуться к сайту
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Pet Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#2B2926] uppercase tracking-wider mb-2">
                    Ваше имя <span className="text-[#A96855]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Как к вам обращаться"
                    className={`w-full px-4 py-3 bg-[#E9E0D5]/50 border ${
                      errors.name ? "border-red-500" : "border-[#D8CEC3]"
                    } rounded-xl text-[#2B2926] placeholder-[#766D65]/60 focus:outline-none focus:border-[#A96855] focus:bg-[#F4F0EA] transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="petName" className="block text-xs font-medium text-[#2B2926] uppercase tracking-wider mb-2">
                    Имя питомца <span className="text-[#A96855]">*</span>
                  </label>
                  <input
                    type="text"
                    id="petName"
                    value={formData.petName}
                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    placeholder="Как зовут питомца"
                    className={`w-full px-4 py-3 bg-[#E9E0D5]/50 border ${
                      errors.petName ? "border-red-500" : "border-[#D8CEC3]"
                    } rounded-xl text-[#2B2926] placeholder-[#766D65]/60 focus:outline-none focus:border-[#A96855] focus:bg-[#F4F0EA] transition-all`}
                  />
                  {errors.petName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.petName}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Pet Type, Age, City */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="petType" className="block text-xs font-medium text-[#2B2926] uppercase tracking-wider mb-2">
                    Кто с нами живёт
                  </label>
                  <select
                    id="petType"
                    value={formData.petType}
                    onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#E9E0D5]/50 border border-[#D8CEC3] rounded-xl text-[#2B2926] focus:outline-none focus:border-[#A96855] focus:bg-[#F4F0EA] transition-all"
                  >
                    <option value="собака">Собака</option>
                    <option value="кошка">Кошка</option>
                    <option value="другое">Другой питомец</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="petAge" className="block text-xs font-medium text-[#2B2926] uppercase tracking-wider mb-2">
                    Возраст питомца
                  </label>
                  <input
                    type="text"
                    id="petAge"
                    value={formData.petAge}
                    onChange={(e) => setFormData({ ...formData, petAge: e.target.value })}
                    placeholder="Например, 3 года / 8 месяцев"
                    className="w-full px-4 py-3 bg-[#E9E0D5]/50 border border-[#D8CEC3] rounded-xl text-[#2B2926] placeholder-[#766D65]/60 focus:outline-none focus:border-[#A96855] focus:bg-[#F4F0EA] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-xs font-medium text-[#2B2926] uppercase tracking-wider mb-2">
                    Город
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Москва / Санкт-Петербург..."
                    className="w-full px-4 py-3 bg-[#E9E0D5]/50 border border-[#D8CEC3] rounded-xl text-[#2B2926] placeholder-[#766D65]/60 focus:outline-none focus:border-[#A96855] focus:bg-[#F4F0EA] transition-all"
                  />
                </div>
              </div>

              {/* Format selection */}
              <div>
                <label className="block text-xs font-medium text-[#2B2926] uppercase tracking-wider mb-2">
                  Какой формат интересует
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Один день рядом",
                    "История питомца",
                    "Фотобиография",
                    "Пока не знаем",
                  ].map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setFormData({ ...formData, format: fmt })}
                      className={`p-3 text-left rounded-xl text-xs md:text-sm border transition-all ${
                        formData.format === fmt
                          ? "bg-[#A96855] text-[#F4F0EA] border-[#A96855] font-medium"
                          : "bg-[#E9E0D5]/40 text-[#2B2926] border-[#D8CEC3] hover:border-[#A96855]/50"
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Question */}
              <div className="p-4 bg-[#E9E0D5]/60 border border-[#D8CEC3] rounded-xl">
                <label
                  htmlFor="specialMemories"
                  className="block text-base md:text-lg font-serif text-[#2B2926] mb-2 font-normal"
                >
                  Что мы больше всего любим в нашем питомце?
                </label>
                <textarea
                  id="specialMemories"
                  rows={3}
                  value={formData.specialMemories}
                  onChange={(e) => setFormData({ ...formData, specialMemories: e.target.value })}
                  placeholder="Расскажите о характере, ритуалах, особенных привычках или местах..."
                  className="w-full p-3 bg-[#F4F0EA] border border-[#D8CEC3] rounded-lg text-sm text-[#2B2926] placeholder-[#766D65]/60 focus:outline-none focus:border-[#A96855] transition-all"
                />
              </div>

              {/* Contact info & preferred method */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactInfo" className="block text-xs font-medium text-[#2B2926] uppercase tracking-wider mb-2">
                    Телефон или Telegram <span className="text-[#A96855]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactInfo"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder="+7 (999) 000-00-00 или @username"
                    className={`w-full px-4 py-3 bg-[#E9E0D5]/50 border ${
                      errors.contactInfo ? "border-red-500" : "border-[#D8CEC3]"
                    } rounded-xl text-[#2B2926] placeholder-[#766D65]/60 focus:outline-none focus:border-[#A96855] focus:bg-[#F4F0EA] transition-all`}
                  />
                  {errors.contactInfo && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.contactInfo}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2B2926] uppercase tracking-wider mb-2">
                    Способ связи
                  </label>
                  <div className="flex gap-2">
                    {["Telegram", "WhatsApp", "Телефон"].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: method })}
                        className={`flex-1 py-3 px-2 text-center rounded-xl text-xs border transition-all ${
                          formData.contactMethod === method
                            ? "bg-[#292622] text-[#F4F0EA] border-[#292622]"
                            : "bg-[#E9E0D5]/40 text-[#2B2926] border-[#D8CEC3] hover:border-[#292622]/40"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div className="pt-4 border-t border-[#D8CEC3] flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-6 bg-[#A96855] text-[#F4F0EA] hover:bg-[#8D5443] disabled:opacity-50 rounded-xl font-medium text-base transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    "Рассказать о своей истории"
                  )}
                </button>

                <p className="text-[11px] text-[#766D65] text-center leading-normal">
                  Отправляя форму, вы соглашаетесь на обработку персональных данных.  
                  {/* TODO: Add real privacy policy link when legal page is created */}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
