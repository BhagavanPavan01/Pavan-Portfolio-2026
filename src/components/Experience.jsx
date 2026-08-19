import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Building2, Calendar, ChevronRight, Award } from 'lucide-react';
import { experienceData } from '../data/experience';

const ExperienceCard = ({ exp, index, navigate }) => {
    const isEven = index % 2 === 0;
    const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' && window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const animationInitial = { opacity: 0, y: 40 };
    const animationAnimate = { opacity: 1, y: 0 };

    return (
        <div id={`experience-card-${exp.id}`} className={`scroll-mt-24 relative flex flex-col md:flex-row items-center justify-between w-full mb-12 md:mb-24 group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* Center Timeline Node */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-[3px] border-gray-900 bg-gray-100 items-center justify-center z-20 transition-all duration-500 group-hover:bg-purple-500 group-hover:border-purple-200 shadow-xl">
                <Briefcase className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
            </div>

            {/* Content Container (Card) */}
            <div className={`w-full md:w-[45%] flex relative z-30`}>
                <motion.div
                    initial={animationInitial}
                    whileInView={animationAnimate}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 90, damping: 20, delay: 0.1 }}
                    whileHover={{ y: -8 }}
                    onClick={() => {
                        window.history.replaceState(null, '', `/#experience-[${exp.id}]`);
                        navigate(`/experience/${exp.id}`);
                    }}
                    className="w-full bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8 cursor-pointer shadow-lg hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group/card"
                >
                    {/* Subtle Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    {/* Image Header wrapper for a beautiful visual */}
                    <div className="h-32 xs:h-40 md:h-48 w-full rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 relative">
                        <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply z-10 group-hover/card:opacity-0 transition-opacity duration-300"></div>
                        <img
                            src={exp.image}
                            alt={`Bhagavan Pavan at ${exp.company}`}
                            loading="lazy"
                            className="w-full h-full object-cover transform scale-105 group-hover/card:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-gray-900/80 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-gray-700/50 flex items-center gap-1.5 md:gap-2 shadow-sm">
                            <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400" />
                            <span className="text-[10px] md:text-xs font-bold text-gray-200 tracking-wide">{exp.duration}</span>
                        </div>
                    </div>

                    {/* Role & Company Header */}
                    <div className="mb-3 md:mb-4 relative z-10">
                        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-1.5 md:mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-purple-400 group-hover/card:to-indigo-500 transition-all duration-300 leading-tight">
                            {exp.role}
                        </h3>
                        <div className="flex items-center gap-1.5 md:gap-2 text-gray-300">
                            <Building2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 shrink-0" />
                            <h4 className="text-xs sm:text-sm md:text-base font-semibold">{exp.company}</h4>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6 relative z-10 font-medium text-justify md:text-left w-full">
                        {exp.desc}
                    </p>

                    {/* Tags & Action Container */}
                    <div className="flex flex-col gap-5 mt-auto relative z-10">
                        <div className="flex flex-wrap gap-2">
                            {exp.tags?.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-gray-800/80 border border-gray-700 text-gray-300 text-xs font-semibold rounded-lg group-hover/card:border-purple-500/30 group-hover/card:text-purple-300 transition-colors duration-300 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-center text-purple-400 font-bold text-sm bg-gray-800/50 w-full md:w-fit px-4 py-3 rounded-xl group-hover/card:bg-purple-500 group-hover/card:text-white transition-all duration-300 pointer-events-none">
                            View Full Impact
                            <ChevronRight className="w-4 h-4 ml-1 group-hover/card:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Empty space for alternating layout on desktop */}
            <div className="hidden md:block md:w-[45%]"></div>
        </div>
    );
};

const Experience = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="py-24 bg-transparent relative overflow-hidden experience-section" ref={containerRef}>
            {/* Ambient Background Glow for Modern Elegance */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center justify-center p-3 md:p-4 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl mb-6 group">
                        <Award className="w-8 h-8 md:w-10 md:h-10 text-purple-400 group-hover:text-indigo-400 transition-colors" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
                        PROFESSIONAL <br className="sm:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">EXPERIENCE</span>
                    </h2>

                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>

                    <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                        A detailed timeline of my professional journey, highlighting key roles, high-impact projects, and my continuous evolution in the software engineering landscape.
                    </p>
                </motion.div>

                {/* Timeline Layout */}
                <div className="relative max-w-5xl mx-auto mt-12">

                    {/* The sleek central line (hidden on mobile) */}
                    <div className="hidden md:block absolute top-0 bottom-0 w-1 bg-gray-800/80 rounded-full left-1/2 -translate-x-1/2 z-0">
                        {/* Animated fill line */}
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute top-0 w-full bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full h-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                        />
                    </div>

                    {/* Experiences Array mapped */}
                    <div className="w-full">
                        {experienceData.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} navigate={navigate} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
