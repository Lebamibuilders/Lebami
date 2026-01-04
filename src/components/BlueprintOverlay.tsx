import { motion } from "framer-motion";

export const BlueprintOverlay = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 z-0 pointer-events-none"
        >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Measuring Lines */}
            <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute top-4 left-4 h-[1px] bg-primary/40"
            >
                <div className="absolute -top-1 left-0 h-2 w-[1px] bg-primary/40" />
                <div className="absolute -top-1 right-0 h-2 w-[1px] bg-primary/40" />
                <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary/60">
                    WIDTH: 100%
                </div>
            </motion.div>

            <motion.div
                initial={{ height: 0 }}
                whileHover={{ height: "100%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute top-4 left-4 w-[1px] bg-primary/40"
            >
                <div className="absolute top-0 -left-1 w-2 h-[1px] bg-primary/40" />
                <div className="absolute bottom-0 -left-1 w-2 h-[1px] bg-primary/40" />
            </motion.div>

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 p-2">
                <div className="w-4 h-4 border-t-2 border-r-2 border-primary/40" />
            </div>
            <div className="absolute bottom-0 left-0 p-2">
                <div className="w-4 h-4 border-b-2 border-l-2 border-primary/40" />
            </div>

            {/* Crosshairs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-primary/20" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-primary/20" />
            </div>
        </motion.div>
    );
};
