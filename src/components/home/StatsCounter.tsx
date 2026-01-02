import { motion } from "framer-motion";

const stats = [
    { value: "500+", label: "PROJECTS COMPLETED" },
    { value: "98%", label: "SAFETY RATING" },
    { value: "25+", label: "YEARS EXPERIENCE" },
    { value: "100%", label: "ON-TIME DELIVERY" },
];

export const StatsCounter = () => {
    return (
        <section className="py-12 relative border-t border-b border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center justify-center p-4 text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-2 text-glow">
                                {stat.value}
                            </h3>
                            <p className="font-mono text-xs md:text-sm text-primary/80 tracking-widest uppercase">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
