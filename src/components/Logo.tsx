"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function Logo({
    isScrolled = false,
    className = "",
}: {
    isScrolled?: boolean;
    className?: string;

}) {
    return (
        <motion.div
            className="relative flex flex-col items-center space-y-4 mb-6 -mx-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
            className={cn(
                "relative w-72 rounded-none flex items-center justify-center px-6 transition-all duration-300",
                isScrolled ? "bg-white h-14 -mt-2 -mb-20 z-0" : "bg-white h-32 shadow-lg pt-40 z-10",
                className
            )}
            style={{ transform: isScrolled ? "none" : "skewY(-5deg)" }} // Remove skew if isScrolled
            >
            <motion.img
                src="/images/green.png"
                alt="Green Agriculture Corp Logo"
                className={cn(
                " h-20 w-auto object-contain bottom-0 pb-4 transition-all duration-100",
                isScrolled ? "-mb-1 relative" : "mb-0 absolute"
                )}
                style={{ transform: isScrolled ? "none" : "skewY(5deg)" }} // Remove reverse skew if isScrolled
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            />
            </motion.div>
        </motion.div>
    );
}

function FooterLogo() {
    return (
        <motion.div
            className="relative flex flex-col items-start space-y-4 mb-6 text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <img
                src="/images/green.png"
                alt="Green Agriculture Corp Logo"
                className="h-16 w-auto object-contain"
            />
            <p className="text-gray-800 text-sm font-semibold uppercase tracking-wide">
                Premium Rice Exporters
            </p>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                Since 2016, we have been a leading manufacturer and exporter of premium Indian non-basmati rice. 
                Our ISO-certified facility in Raipur processes over 10,000 MT annually, serving 50+ countries with 
                consistent quality and reliable supply chain solutions.
            </p>
        </motion.div>
    );
}
export { FooterLogo };