import { useRef, useEffect } from "react";

export const GlobalBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Particle System
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            fadeSpeed: number;
            color: string;

            constructor() {
                this.x = Math.random() * (canvas?.width || 0);
                this.y = Math.random() * (canvas?.height || 0);
                // "Visible dust" - increased size
                this.size = Math.random() * 2.0 + 1.0;

                // "Drifting gently"
                this.speedX = Math.random() * 0.2 + 0.1;
                this.speedY = Math.random() * 0.1 + 0.05;

                // "Visible opacity" - increased significantly
                this.opacity = Math.random() * 0.5 + 0.2;
                this.fadeSpeed = Math.random() * 0.002 + 0.001;

                // "Gold Dust" - increased saturation and lightness for visibility
                // HSL: Gold Hue (45-50), Higher Saturation (40-60%), Higher Lightness (60-80%)
                const h = 48 + Math.random() * 5;
                const s = 50 + Math.random() * 20;
                const l = 70 + Math.random() * 20;
                this.color = `hsl(${h}, ${s}%, ${l}%)`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around smoothly
                if (this.x > (canvas?.width || 0) + 10) this.x = -10;
                if (this.y > (canvas?.height || 0) + 10) this.y = -10;

                // Pulsing
                this.opacity += this.fadeSpeed;
                if (this.opacity >= 0.6 || this.opacity <= 0.1) {
                    this.fadeSpeed = -this.fadeSpeed;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                // Remove blur for visibility, use soft circle
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const init = () => {
            resizeCanvas();
            // "Low density" - reduced count significantly
            // Mobile check: further reduced on small screens
            const isMobile = window.innerWidth < 768;
            const density = isMobile ? 0.015 : 0.025;
            const particleCount = Math.min(window.innerWidth * density, 60);

            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                resizeCanvas();
                init();
            }, 200);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#080808]">
            {/* 
        Layer 1: Deep Atmospheric Base 
        Changed to darker charcoal/black base for "dark room" feel
      */}
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    background: "radial-gradient(circle at 50% 50%, #121212 0%, #050505 100%)",
                }}
            />

            {/* 
        Layer 2: Subtle Slow Moving Gradient 
        Very abstract, slow moving clouds of slightly lighter charcoal/gold
      */}
            <div
                className="absolute inset-0 opacity-20 animate-pulse-slow"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(60, 55, 40, 0.4), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(50, 50, 60, 0.4), transparent 40%)
          `,
                    filter: "blur(80px)",
                }}
            />

            {/* Layer 3: Particles (Canvas) */}
            {/* "Softly blurred" - adding blur filter to canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            {/* Layer 4: Fine Film Grain */}
            {/* "3-5% opacity", "reduce flat digital feel" */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Layer 5: Stronger Vignette for "Cinematic" feel */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
                }}
            />
        </div>
    );
};
