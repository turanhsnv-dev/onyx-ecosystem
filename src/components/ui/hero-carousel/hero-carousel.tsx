"use client";

import { useState, useEffect } from "react";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden group border-b border-border">

      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-105"
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: index === currentSlide ? "scale(1)" : "scale(1.05)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

          {/* DİQQƏT: Bu qutu yazıları aşağıdakı komponentlərlə eyni xəttə salır */}
          <div className="absolute inset-0 flex flex-col justify-center w-full max-w-[1200px] mx-auto px-6 pointer-events-none">
            <div className="max-w-2xl pointer-events-auto">
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 block animate-fade-in-up">
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
                <button className="bg-surface/50 hover:bg-surface border border-border text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors">
                  <Info size={18} /> Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* İNDİKATORLAR VƏ OX LAR (Mərkəzi 1200px limitinə uyğunlaşdırıldı) */}
      <div className="absolute bottom-6 inset-x-0 w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center z-20 pointer-events-none">

        {/* Balans qorumaq üçün boşluq */}
        <div className="w-[104px]" />

        {/* Nöqtələr mərkəzdə */}
        <div className="flex items-center gap-2 pointer-events-auto">
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

        {/* Oxlar sağda */}
        <div className="flex items-center gap-3 pointer-events-auto">
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

    </div>
  );
};