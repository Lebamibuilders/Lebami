import { motion } from "framer-motion";

export const GlobalMap = () => {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
            {/* Abstract World Map Dots */}
            <div className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(212, 175, 55, 0.2) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
                }}
            />

            {/* Connection Arch (Approximate locations for India -> Qatar) */}
            <svg className="absolute inset-0 w-full h-full">
                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                        <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Animated Connection Line */}
                <motion.path
                    d="M 65% 55% Q 55% 25% 45% 45%" // Simplified curve from Right (India) to Left (Qatar)
                    fill="none"
                    stroke="url(#gradient-line)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                />

                {/* India Beacon */}
                <motion.circle
                    cx="65%"
                    cy="55%"
                    r="4"
                    fill="#D4AF37"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Qatar Beacon */}
                <motion.circle
                    cx="45%"
                    cy="45%"
                    r="4"
                    fill="#FFD700"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity }}
                />
            </svg>
        </div>
    );
};
