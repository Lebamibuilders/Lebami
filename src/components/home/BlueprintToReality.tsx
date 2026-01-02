import { motion } from "framer-motion";
import heroImage from "@/assets/hero-building.jpg";
import { GlassCard } from "@/components/GlassCard";

export const BlueprintToReality = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-8 tracking-wider">
                        BLUEPRINT TO REALITY
                    </h2>

                    <GlassCard className="p-0 overflow-hidden group">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative min-h-[400px]">

                            {/* Blueprint Section (Left) */}
                            <div className="lg:col-span-7 bg-[#0a192f] relative overflow-hidden p-8 flex flex-col justify-center">
                                {/* Blueprint Grid Background */}
                                <div className="absolute inset-0 opacity-20 bg-blueprint" />

                                {/* Blueprint Wireframe (SVG Simulation) */}
                                <div className="relative z-10 border border-primary/30 p-6 rounded-lg opacity-80 mb-8 max-w-md">
                                    <svg viewBox="0 0 200 150" className="w-full h-full stroke-primary/80 stroke-1 fill-none">
                                        <rect x="10" y="10" width="180" height="130" />
                                        <line x1="10" y1="50" x2="190" y2="50" />
                                        <line x1="70" y1="10" x2="70" y2="140" />
                                        <rect x="20" y="20" width="40" height="20" />
                                        <rect x="80" y="60" width="100" height="70" />
                                        <circle cx="150" cy="100" r="10" className="stroke-dashed" />
                                    </svg>
                                    <div className="absolute -right-2 -bottom-2 text-[10px] font-mono text-primary">PLAN_LVL_01</div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b border-primary/20 pb-2">
                                        <p className="text-primary/80 text-sm font-mono">Project: Skyline Tower</p>
                                        <p className="text-green-400 text-xs font-bold animate-pulse">ACTIVE</p>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-primary/20 pb-2">
                                        <p className="text-primary/80 text-sm font-mono">Phase: Framing</p>
                                        <p className="text-white text-xs">85%</p>
                                    </div>
                                    <div className="w-full">
                                        <div className="h-2 bg-primary/10 rounded-full overflow-hidden border border-primary/30">
                                            <motion.div
                                                initial={{ width: "0%" }}
                                                whileInView={{ width: "65%" }}
                                                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                                className="h-full bg-primary/80"
                                            />
                                        </div>
                                        {/* Slider Knob */}
                                        <motion.div
                                            initial={{ left: "0%" }}
                                            whileInView={{ left: "65%" }}
                                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                            className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-white" />
                                        </motion.div>
                                    </div>

                                    <p className="text-primary/80 text-sm font-mono">Completion: Q4 2024</p>
                                </div>
                            </div>

                            {/* Reality Section (Right) */}
                            <div className="lg:col-span-5 relative h-full min-h-[300px]">
                                <img
                                    src={heroImage}
                                    alt="Skyline Tower Reality"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Gradient Overlay for blending */}
                                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a192f] to-transparent lg:block hidden" />
                                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a192f] to-transparent lg:hidden block" />

                                {/* "Reality" Label */}
                                <div className="absolute bottom-6 right-6">
                                    <span className="glass-panel px-4 py-2 text-xs font-orbitron tracking-widest text-white border-white/20">
                                        REALITY
                                    </span>
                                </div>
                            </div>

                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
};
