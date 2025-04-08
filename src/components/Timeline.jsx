"use client"; // Only for Next.js App Router
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


const timelineData = [
    { year: "2020", event: "I had intrest in smartphones, tech and hacking" },
    { year: "2021", event: "Started learning Web Development, Termux. Did many tech pranks" },
    { year: "2022", event: "Completed High School and Started Bachelor's in Computer Application" },
    { year: "2023", event: "Discovered my intrest in backend development, After C++ i choosed Java as my favourite language" },
    { year: "2024", event: "Developed my technical skills and started working on projects" },
    { year: "2025", event: "Landed my first job as a Software Developer" }
];

export default function Timeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "145%"]);

    return (
        <>
        <h1 className="font-[Playfair_Display] text-5xl font-bold text-gray-800 mt-20 text-center">The Timeline</h1>
        <div ref={containerRef} className="relative w-full flex justify-center py-20">
            {/* Timeline Items */}
            <div className="flex flex-col space-y-8 pl-10 relative">
                {/* Vertical Line */}
                <motion.div 
                    className="absolute left-[5px] top-10 w-[10px] bg-blue-500 origin-top rounded-lg"
                    style={{ height }}
                />
                
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative flex items-center gap-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: false }}
                    >
                        {/* Timeline Box */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md w-64">
                            <h3 className="text-lg font-bold text-blue-600">{item.year}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{item.event}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        </>
    );
}
