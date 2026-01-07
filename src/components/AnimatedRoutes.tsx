import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import NotFound from "@/pages/NotFound";

import { useLayoutEffect } from "react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Index /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};
