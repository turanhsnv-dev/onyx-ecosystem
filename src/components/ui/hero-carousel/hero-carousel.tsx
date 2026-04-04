"use client";

import { useState, useEffect } from "react";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";

// KARUSEL ÜÇÜN DATA
const SLIDES = [
  {
    id: 1,
    subtitle: "ENTER THE FUTURE",
    title: "Cyber Nexus\n2077",
    description: "Experience the ultimate open-world cyberpunk adventure. Shape your destiny in a world of corporate espionage and neon-lit streets.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
    primaryBtn: "Play Now",
  },
  {
    id: 2,
    subtitle: "DARK FANTASY RPG",
    title: "Shadow\nRealm",
    description: "A punishing action-RPG where every mistake is fatal. Master the art of combat and explore a beautifully decaying world.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071",
    primaryBtn: "Play Now",
  },
  {
    id: 3,
    subtitle: "SPACE EXPLORATION",
    title: "Stellar\nOdyssey",
    description: "Journey through procedurally generated galaxies. Build your ship, trade with alien factions, and discover the secrets of the universe.",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000",
    primaryBtn: "Install",
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Avtomatik sürüşmə (Hər 5 saniyədən bir)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden group">

      {/* SLAYDLAR (Şəkillər və Məzmun) */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
        >
          {/* Arxa plan şəkli (Qradient ilə birlikdə) */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-105"
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: index === currentSlide ? "scale(1)" : "scale(1.05)"
            }}
          />
          {/* Sol tərəf qradienti */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

          {/* Məzmun (Yazılar və Düymələr) */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 max-w-2xl">
            <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
              {slide.subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 whitespace-pre-line animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {slide.title}
            </h1>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {slide.description}
            </p>

            <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-primary/20">
                <Play size={18} fill="currentColor" /> {slide.primaryBtn}
              </button>
              <button className="text-white hover:text-primary font-bold py-3 px-2 flex items-center gap-2 transition-colors">
                <Info size={18} /> Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* İNDİKATORLAR (Mərkəzdəki nöqtələr) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? "w-6 h-1.5 bg-primary"
                : "w-1.5 h-1.5 bg-text-muted/50 hover:bg-text-muted"
              }`}
          />
        ))}
      </div>

      {/* İDARƏ OX LARI (Sağ alt künc) */}
      <div className="absolute bottom-6 right-8 flex items-center gap-3 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-white hover:border-primary/50 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-white hover:border-primary/50 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </div>
  );
};