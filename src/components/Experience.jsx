import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, ExternalLink, Award, Cpu, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const experiences = [
    {
        id: 1,
        company: "Saiket Systems",
        role: "Web Development Intern",
        duration: "OCT 2024 – NOV 2024",
        desc: [
            "Developed responsive user interfaces using HTML, CSS, and JavaScript.",
            "Gained hands-on experience in building user-friendly and interactive web applications.",
            "Competently executed real-world layout structures and highly responsive grid designs."
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: {
            live: "#",
            github: "#",
            certificate: "#"
        },
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
];

// Generates a perfect repeating S-curve path for the snake to travel along natively.
// We generate a massive length (100 segments = 5000px) which is sliced by the SVG viewBox automatically.
const generateCurvySnakePath = () => {
    let d = "M 20 0 ";
    for (let i = 0; i < 100; i++) {
        d += `Q ${i % 2 === 0 ? 40 : 0} ${i * 50 + 25} 20 ${(i + 1) * 50} `;
    }
    return d;
};
const curvySnakeRoute = generateCurvySnakePath();

const Experience = () => {
    const containerRef = useRef(null);

    // Dynamic scroll tracking for the timeline line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    });
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Parent container variant for staggering
    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section id="experience" className="py-24 bg-transparent border-t border-gray-900 border-opacity-50 overflow-hidden relative">
            {/* Holographic background elements matching theme */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24 relative"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight flex items-center justify-center gap-4">
                        <Cpu className="w-10 h-10 md:w-12 md:h-12 text-purple-400 animate-pulse" />
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Experience</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">My professional journey so far. This timeline will continue to grow as I evolve and take on new challenges.</p>
                </motion.div>

                {/* Timeline Container */}
                <div className="max-w-5xl mx-auto relative">

                    {/* Native Curved SVG Snake Tracking System (Scroll Only) */}
                    <div className="absolute left-[0px] md:left-[10px] top-0 bottom-0 w-[40px] pointer-events-none z-0 overflow-hidden">
                        <svg
                            width="40"
                            height="100%"
                            viewBox="0 0 40 5000"
                            preserveAspectRatio="xMidYMin slice"
                            className="absolute top-0 left-0"
                            style={{ filter: "drop-shadow(0px 0px 10px rgba(34,197,94,0.4))" }}
                        >
                            <defs>
                                <pattern id="snakeScales" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                    <circle cx="4" cy="4" r="3.5" fill="#14532d" />
                                </pattern>
                                <linearGradient id="scrollGlow" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#22c55e" />
                                    <stop offset="100%" stopColor="#4ade80" />
                                </linearGradient>
                            </defs>

                            {/* Base Empty Track (dim curved trace) */}
                            <path d={curvySnakeRoute} stroke="#052e16" strokeWidth="6" fill="none" strokeLinecap="round" />

                            {/* The Real Animated Snake Body (Grows exactly upon scrolling) */}
                            <motion.path
                                d={curvySnakeRoute}
                                stroke="url(#scrollGlow)"
                                strokeWidth="8"
                                fill="none"
                                style={{ pathLength: scaleY }}
                                strokeLinecap="round"
                            />

                            {/* Snake Scale Texture overlay mapped perfectly to the scroll */}
                            <motion.path
                                d={curvySnakeRoute}
                                stroke="url(#snakeScales)"
                                strokeWidth="8"
                                fill="none"
                                style={{ pathLength: scaleY }}
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <motion.div
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        className="space-y-16 md:space-y-24 pb-16"
                    >
                        {experiences.map((exp, index) => (
                            <TimelineCard key={exp.id} exp={exp} index={index} />
                        ))}

                        {/* Future Growth Placeholder Node */}
                        <FutureNode />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Reusable animated Timeline Card component
const TimelineCard = ({ exp, index }) => {
    // Variants for consistent smooth animations
    const cardVariant = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const nodeVariant = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
    };

    return (
        <div className="relative pl-12 md:pl-20 group">
            {/* Pulsing Timeline Node */}
            <motion.div
                variants={nodeVariant}
                className="absolute left-[6px] md:left-[13px] top-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-950 border-4 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] flex items-center justify-center z-20 group-hover:bg-purple-500 transition-colors duration-500"
            >
                <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-white group-hover:scale-110 transition-transform" />
            </motion.div>

            {/* Main Holographic Glassmorphic Card (Matches Projects.jsx) */}
            <motion.div
                variants={cardVariant}
                whileHover={{ y: -5, scale: 1.01 }}
                className="cursor-default bg-gray-900/60 backdrop-blur-md p-6 md:p-8 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/60 shadow-lg hover:shadow-[0_10px_40px_rgba(168,85,247,0.25)] flex flex-col relative transition-all duration-300"
            >
                {/* Holographic sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"></div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center bg-transparent z-10">

                    {/* Left: Project/Experience Image */}
                    <div className="xl:col-span-5 w-full h-48 xl:h-full min-h-[250px] rounded-xl overflow-hidden relative bg-gray-950 border border-gray-800">
                        <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            src={exp.image}
                            alt={exp.role}
                            className="w-full h-full object-cover object-center absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent pointer-events-none z-10"></div>
                    </div>

                    {/* Right: Content details */}
                    <div className="xl:col-span-7 flex flex-col justify-center">

                        {/* Company & Date badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs md:text-sm font-bold tracking-wider border border-purple-500/30">
                                {exp.duration}
                            </span>
                            <span className="text-lg md:text-xl text-gray-300 font-bold px-3">{exp.company}</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 drop-shadow-md group-hover:text-purple-400 transition-colors duration-300">
                            {exp.role}
                        </h3>

                        {/* Description points */}
                        <ul className="space-y-3 text-gray-400 list-none mb-6 flex-1">
                            {exp.desc.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group/item">
                                    <span className="text-purple-500 mt-1 transform group-hover/item:scale-125 transition-transform">▹</span>
                                    <span className="leading-relaxed text-sm md:text-base group-hover/item:text-gray-300 transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {exp.skills?.map((tag, tIdx) => (
                                <span key={tIdx} className="px-3 py-1 bg-gray-800/80 rounded-full text-xs font-semibold text-purple-300/80 border border-purple-500/20 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-colors duration-300 shadow-[0_0_10px_rgba(168,85,247,0.05)]">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Professional Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-gray-800">
                            <a href={exp.links.live} className="flex-1 min-w-[140px] flex justify-center items-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-all">
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                            <a href={exp.links.github} className="flex justify-center items-center p-2.5 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors" title="Source Code">
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a href={exp.links.certificate} className="flex-1 min-w-[140px] flex justify-center items-center gap-2 py-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 text-sm font-bold transition-all sm:ml-auto">
                                <Award className="w-4 h-4" /> View Certificate
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// Extracted Future Placeholder node for neatness
const FutureNode = () => {
    const nodeVariant = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
    };

    const cardVariant = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="relative pl-12 md:pl-20 pt-6">
            <motion.div
                variants={nodeVariant}
                className="absolute left-[6px] md:left-[13px] top-8 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-950 border-4 border-dashed border-gray-700 flex items-center justify-center z-20"
            >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
            </motion.div>

            <motion.div
                variants={cardVariant}
                className="bg-gray-900/30 border border-dashed border-gray-700 hover:border-purple-500/50 rounded-2xl p-6 md:p-8 flex items-center justify-center transition-colors duration-300"
            >
                <div className="text-center">
                    <h4 className="text-gray-300 font-bold mb-2 flex items-center justify-center gap-2 text-lg">
                        Open fields of Opportunity <Sparkles className="w-4 h-4 text-purple-400" />
                    </h4>
                    <p className="text-gray-500 text-sm">More experiences branching out soon.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Experience;
