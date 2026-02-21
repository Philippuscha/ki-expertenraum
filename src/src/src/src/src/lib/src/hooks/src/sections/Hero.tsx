import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Music, Disc, Calendar } from 'lucide-react';
import { heroConfig } from '../config';

const ICON_MAP = {
  disc: Disc,
  play: Play,
  calendar: Calendar,
  music: Music,
};

const Hero = () => {
  // Null check: if config is empty, do not render
  if (!heroConfig.decodeText && !heroConfig.brandName && heroConfig.navItems.length === 0) {
    return null;
  }

  const heroRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const eyesRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  
  const TARGET_TEXT = heroConfig.decodeText;
  const CHARS = heroConfig.decodeChars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  const [displayText, setDisplayText] = useState(' '.repeat(TARGET_TEXT.length));
  const [isDecoding, setIsDecoding] = useState(true);

  // Decode text effect
  useEffect(() => {
    let iteration = 0;
    const maxIterations = TARGET_TEXT.length * 8;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return TARGET_TEXT.split('')
          .map((_, index) => {
            if (index < iteration / 8) {
              return TARGET_TEXT[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
      });

      iteration += 1;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(TARGET_TEXT);
        setIsDecoding(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // GSAP animations for entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Nav slide in
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );

      // Subtitle fade in
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.5 }
      );

      // Robot entrance
      gsap.fromTo(
        robotRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Autonomous robot animations
  useEffect(() => {
    if (!robotRef.current) return;

    const ctx = gsap.context(() => {
      // Main robot breathing/movement timeline
      const robotTl = gsap.timeline({ repeat: -1 });
      
      // Slow breathing - chest expansion feel
      robotTl.to(robotRef.current, {
        scale: 1.03,
        duration: 3,
        ease: 'sine.inOut',
      });
      robotTl.to(robotRef.current, {
        scale: 1,
        duration: 3,
        ease: 'sine.inOut',
      });

      // Subtle head/upper body tilt
      gsap.to(robotRef.current, {
        rotateY: 3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Slight vertical floating
      gsap.to(robotRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Eye glow pulsing
      if (eyesRef.current) {
        gsap.to(eyesRef.current, {
          opacity: 0.6,
          duration: 0.1,
          repeat: -1,
          yoyo: true,
          ease: 'steps(2)',
          repeatDelay: 0.05,
        });
      }

      // Background glow breathing
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.2,
          opacity: 0.7,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-void-black"
    >
      {/* Robot Background - Autonomous Movement */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        {/* Ambient glow behind robot */}
        <div
          ref={glowRef}
          className="absolute w-[50vw] h-[50vw] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,0,0,0.25) 0%, rgba(255,0,0,0.08) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Secondary cyan ambient */}
        <div
          className="absolute w-[35vw] h-[35vw] rounded-full pointer-events-none opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Robot container with 3D perspective */}
        <div
          ref={robotRef}
          className="relative w-full h-full"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Robot image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroConfig.backgroundImage})`,
              transform: 'scale(1.15)',
            }}
          />

          {/* Eye glow overlay - autonomous flicker */}
          <div
            ref={eyesRef}
            className="absolute top-[32%] left-[50%] -translate-x-1/2 pointer-events-none"
          >
            {/* Left eye */}
            <div
              className="absolute -left-[3.5vw] w-[3vw] h-[2vw] rounded-full"
              style={{
                background: 'radial-gradient(ellipse, rgba(255,0,0,0.95) 0%, rgba(255,0,0,0.5) 50%, transparent 80%)',
                filter: 'blur(6px)',
                boxShadow: '0 0 50px 20px rgba(255,0,0,0.7), 0 0 100px 40px rgba(255,0,0,0.3)',
              }}
            />
            {/* Right eye */}
            <div
              className="absolute left-[0.5vw] w-[3vw] h-[2vw] rounded-full"
              style={{
                background: 'radial-gradient(ellipse, rgba(255,0,0,0.95) 0%, rgba(255,0,0,0.5) 50%, transparent 80%)',
                filter: 'blur(6px)',
                boxShadow: '0 0 50px 20px rgba(255,0,0,0.7), 0 0 100px 40px rgba(255,0,0,0.3)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Clean dark overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-void-black/50 via-transparent to-void-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-void-black/30 via-transparent to-void-black/30" />
      </div>

      {/* Navigation pill */}
      <nav
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 nav-pill rounded-full px-2 py-2"
      >
        <div className="flex items-center gap-1">
          {heroConfig.navItems.map((item) => {
            const IconComponent = ICON_MAP[item.icon];
            return (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono-custom uppercase tracking-wider text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 px-4">
        {/* Logo / Brand */}
        <div className="absolute top-8 left-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center">
              <Disc className="w-4 h-4 text-neon-cyan" />
            </div>
            <span className="font-display text-lg text-white">{heroConfig.brandName}</span>
          </div>
        </div>

        {/* Main title with decode effect */}
        <h1
          ref={titleRef}
          className="decode-text text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold text-white leading-none tracking-tighter mb-4"
        >
          <span className={`${isDecoding ? 'text-glow-cyan' : ''} transition-all duration-300`}>
            {displayText}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-mono-custom text-sm md:text-base text-neon-soft/70 uppercase tracking-[0.3em] mb-8 text-center max-w-2xl"
        >
          {heroConfig.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => scrollToSection(heroConfig.ctaPrimaryTarget)}
            className="group relative px-8 py-3 bg-white text-void-black font-display text-sm uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">{heroConfig.ctaPrimary}</span>
            <div className="absolute inset-0 bg-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <button
            onClick={() => scrollToSection(heroConfig.ctaSecondaryTarget)}
            className="px-8 py-3 border border-white/30 text-white font-display text-sm uppercase tracking-wider rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 hover:scale-105"
          >
            {heroConfig.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent z-10" />

      {/* Corner accents */}
      <div className="absolute top-8 right-8 text-right z-10">
        <p className="font-mono-custom text-xs text-white/40 uppercase tracking-wider">{heroConfig.cornerLabel}</p>
        <p className="font-mono-custom text-xs text-neon-soft/60">{heroConfig.cornerDetail}</p>
      </div>
    </section>
  );
};

export default Hero;
