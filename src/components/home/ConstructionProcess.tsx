import { motion } from "framer-motion";
import { ClipboardCheck, PencilRuler, Hammer, Key } from "lucide-react";

const steps = [
    {
        icon: ClipboardCheck,
        title: "Site Analysis",
        desc: "Surveying & Soil Testing",
    },
    {
        icon: PencilRuler,
        title: "Structural Design",
        desc: "Blueprint & Engineering",
    },
    {
        icon: Hammer,
        title: "Construction",
        desc: "Foundation to Finish",
    },
    {
        icon: Key,
        title: "Final Handover",
        desc: "Quality Check & Key Handover",
    },
];

export const ConstructionProcess = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="font-orbitron text-primary tracking-[0.3em] text-sm">THE LIFECYCLE</span>
                    <h2 className="section-title mt-2 text-white">How We Build</h2>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Number Badge */}
                                <div className="absolute -top-12 opacity-20 font-orbitron text-4xl font-bold text-white">
                                    0{i + 1}
                                </div>

                                {/* Icon Circle */}
                                <div className="w-32 h-32 rounded-full glass-panel flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 border border-primary/30 group-hover:border-primary/80">
                                    <step.icon className="w-10 h-10 text-white group-hover:text-primary transition-colors" />

                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-glow" />
                                </div>

                                <h3 className="font-orbitron text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-primary/80">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
