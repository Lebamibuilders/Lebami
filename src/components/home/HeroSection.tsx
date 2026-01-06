import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroImage from "@/assets/project-highrise.png";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);

  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Mouse parallax
  const xSpring = useSpring(0, { stiffness: 50, damping: 20 });
  const ySpring = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      xSpring.set(x);
      ySpring.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [xSpring, ySpring]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212] selection:bg-bmw-gold/30 disable-scrollbars">
      {/* 1. Base Layer: Technical Grid */}
      <div className="absolute inset-0 z-0 opacity-30 bg-blueprint-grid bg-[size:40px_40px] pointer-events-none" />

      {/* 2. Layer: Background Imagery & Blueprint Effect */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-x-0 top-0 h-[120vh] z-0 overflow-hidden"
      >
        <div className="relative w-full h-full">
          {/* Blueprint / Wireframe Version (CSS Filtered) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="absolute inset-0 z-10"
          >
            <img
              src={heroImage}
              alt="Blueprint Structure"
              className="w-full h-full object-cover grayscale contrast-125 brightness-75 sepia hue-rotate-[190deg] saturate-[2] opacity-40 mix-blend-screen"
            />
            {/* Overlay Drawing Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              {/* Simulated vertical construction lines */}
              {[20, 40, 60, 80].map((pos, i) => (
                <motion.line
                  key={`v-${i}`}
                  x1={`${pos}%`}
                  y1="100%"
                  x2={`${pos}%`}
                  y2="0%"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  strokeDasharray="10 20"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Reality Version (Revealed slowly) */}
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-20"
          >
            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dimming */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/60 to-black z-20" /> {/* Vignette */}
            <motion.img
              style={{ x: xSpring, y: ySpring }}
              src={heroImage}
              alt="Completed Architecture"
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Atmospheric Particles */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {/* Dust */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px]"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              y: [null, Math.random() * -100],
              x: [null, Math.random() * 50 - 25],
              opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-30 h-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }} // Appears fast
          className="text-center max-w-5xl mx-auto backdrop-blur-sm bg-black/5 p-8 rounded-3xl border border-white/5"
        >
          {/* Headline */}
          <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="flex flex-col items-center font-montserrat font-bold text-white leading-tight drop-shadow-2xl">
              <motion.span
                initial={{ opacity: 0, letterSpacing: "1em" }}
                animate={{ opacity: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 1, delay: 1.0 }}
                className="text-sm md:text-2xl text-bmw-gold font-medium uppercase mb-4"
              >
                Vision to Reality
              </motion.span>
              <motion.span
                initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                className="text-3xl md:text-7xl lg:text-9xl block relative"
              >
                ARCHITECTING
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-3xl md:text-7xl lg:text-9xl block text-white/90"
              >
                THE FUTURE
              </motion.span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-white/70 text-base md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed px-4"
          >
            From faint grid lines to towering skylines. We engineer the world's most critical infrastructure with precision, power, and permanence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-montserrat font-bold tracking-widest text-xs uppercase overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-bmw-gold via-bmw-bright to-bmw-gold opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-10 py-5 border border-white/30 text-white font-montserrat font-medium tracking-widest text-xs uppercase hover:bg-white/5 transition-all hover:border-white/60 hover:text-white"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
      >
        <span className="text-white/30 text-[10px] tracking-[0.4em] uppercase">Construct</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"
          animate={{ height: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
