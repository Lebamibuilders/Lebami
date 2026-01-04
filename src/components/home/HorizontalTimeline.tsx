import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "@/components/GlassCard";

const timelineEvents = [
    {
        year: "2014",
        title: "Foundation",
        description: "Lebami was established in India, marking the beginning of our journey in construction excellence.",
    },
    {
        year: "2016",
        title: "Commercial Milestone",
        description: "Completed our first major commercial complex, setting a new benchmark for quality.",
    },
    {
        year: "2018",
        title: "Global Expansion",
        description: "Expanded our operations to Qatar, taking our expertise to the international market.",
    },
    {
        year: "2020",
        title: "Century Mark",
        description: "Successfully completed over 100 projects, earning trust through consistent delivery.",
    },
    {
        year: "2022",
        title: "ISO Certification",
        description: "Achieved ISO certification, validating our commitment to quality and safety standards.",
    },
    {
        year: "2024",
        title: "Sustainable Future",
        description: "Launched Green Building initiatives, pioneering eco-friendly construction practices.",
    },
];

export const HorizontalTimeline = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <div className="relative">
            {/* Desktop View (Horizontal Scroll) */}
            <section ref={targetRef} className="hidden md:block relative h-[300vh] bg-black/90">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />

                    <div className="absolute top-20 left-20 z-10">
                        <h2 className="font-orbitron text-4xl font-bold text-white mb-2">Our Journey</h2>
                        <div className="h-1 w-20 bg-primary" />
                    </div>

                    <motion.div style={{ x }} className="flex gap-20 pl-20 items-center h-full">
                        {/* Introductory Spacer to push first item right */}
                        <div className="min-w-[20vw]" />

                        {timelineEvents.map((event, i) => (
                            <div key={i} className="relative group min-w-[500px]">
                                {/* Connector Line */}
                                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary/20 -z-10" />
                                <div className="absolute top-1/2 left-0 w-4 h-4 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_15px_rgba(0,102,255,0.8)] z-10" />

                                <GlassCard className="mt-10 p-8 border-primary/20 hover:border-primary/60 transition-colors">
                                    <span className="font-orbitron text-5xl font-bold text-primary/20 absolute top-4 right-4 group-hover:text-primary/40 transition-colors">
                                        {event.year}
                                    </span>
                                    <h3 className="font-orbitron text-2xl font-bold text-white mb-4 mt-2">{event.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {event.description}
                                    </p>
                                </GlassCard>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mobile View (Vertical List) */}
            <section className="md:hidden py-20 bg-black/90 relative overflow-hidden">
                <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="font-orbitron text-3xl font-bold text-white mb-2">Our Journey</h2>
                        <div className="h-1 w-20 bg-primary" />
                    </div>

                    <div className="space-y-12 relative border-l-2 border-primary/20 ml-4 pl-8">
                        {timelineEvents.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                {/* Node */}
                                <div className="absolute top-6 -left-[41px] w-5 h-5 rounded-full bg-black border-4 border-primary shadow-[0_0_10px_rgba(0,102,255,0.5)]" />

                                <GlassCard className="p-6 border-primary/20">
                                    <span className="font-orbitron text-4xl font-bold text-primary/20 absolute top-4 right-4">
                                        {event.year}
                                    </span>
                                    <h3 className="font-orbitron text-xl font-bold text-white mb-2 mt-2">{event.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {event.description}
                                    </p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
