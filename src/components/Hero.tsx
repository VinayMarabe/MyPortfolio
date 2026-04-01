
import { useEffect, useState } from 'react';
import ThreeScene from './ThreeScene';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'AI/ML Engineer';

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full overflow-hidden flex items-center bg-background"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-60">
        <ThreeScene className="w-full h-full" />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div
        className={`container-padding relative z-10 w-full transform transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
      >
        <div className="max-w-4xl text-left pl-0 lg:pl-12">

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter leading-[1.1]">
            <span className="block text-foreground mt-4">
              Hi, I'm <span className="inline-block hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-default">VINAY MARABE</span>
            </span>
            <span className="text-primary relative inline-block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {typedText}
              <span className="absolute -right-3 sm:-right-4 top-2 sm:top-1 h-[75%] sm:h-[80%] w-[3px] bg-primary animate-pulse"></span>
            </span>
          </h1>

          <p className="font-sans text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Detail-oriented AI/ML developer with hands-on experience in Generative AI, NLP,
            and full-stack AI systems, specializing in building intelligent, user-centric
            applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <a
              href="#projects"
              className="button-primary"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/10 text-foreground bg-card/30 backdrop-blur-sm
                        rounded-full hover:bg-card/80 hover:border-primary/50 transition-all duration-300 font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary/80 hover:text-primary transition-colors animation-delay-700"
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
