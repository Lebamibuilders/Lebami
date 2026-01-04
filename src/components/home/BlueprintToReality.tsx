import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-building.jpg";

export const BlueprintToReality = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const opacityBlueprint = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const opacityReality = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden perspective-1000">
                <div className="absolute inset-0 bg-blueprint-grid opacity-20" />

                <motion.div
                    style={{ rotateY, scale }}
                    className="relative w-[300px] md:w-[500px] aspect-square transform-style-3d"
                >
                    {/* Blueprint Face */}
                    <motion.div
                        style={{ opacity: opacityBlueprint }}
                        className="absolute inset-0 backface-hidden border-2 border-primary/50 bg-primary/5 p-8 flex flex-col justify-center items-center shadow-[0_0_50px_rgba(0,102,255,0.2)]"
                    >
                        <div className="w-full h-full border border-dashed border-primary/30 p-4 relative">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

                            <div className="h-full flex flex-col items-center justify-center text-primary font-mono text-xs md:text-sm tracking-widest gap-4">
                                <div className="w-16 h-16 border rounded-full flex items-center justify-center animate-spin-slow">
                                    <span className="text-[10px]">PLAN</span>
                                </div>
                                <div className="space-y-2 text-center">
                                    <p>[ANALYZING STRUCTURE]</p>
                                    <p>LOAD: 85%</p>
                                    <p>INTEGRITY: 100%</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 text-primary font-orbitron tracking-[0.5em] text-xl">BLUEPRINT</div>
                    </motion.div>

                    {/* Reality Face (Back of the card effectively, but we rotate 180 to see it) */}
                    <motion.div
                        style={{
                            opacity: opacityReality,
                            rotateY: 180 // Pre-rotated so it faces correct way when container rotates 180
                        }}
                        className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-[0_0_100px_rgba(0,163,255,0.5)]"
                    >
                        <img
                            src={heroImage}
                            alt="Completed Project"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-10 left-0 right-0 text-center">
                            <h3 className="text-white font-orbitron text-2xl md:text-4xl font-bold tracking-wider">REALITY</h3>
                            <p className="text-primary-foreground/80 mt-2 font-mono text-sm">PROJECT COMPLETED</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-primary/50 text-xs tracking-[0.3em]">SCROLL TO CONSTRUCT</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};
