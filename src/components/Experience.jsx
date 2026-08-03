import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Award, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Experience = () => {
    const cardVariants = {
        hidden: { opacity: 0, rotateX: 30, y: 100, scale: 0.8, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            rotateX: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration: 1,
            }
        }
    };

    const listContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
            }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -30, color: "#6b7280" },
        visible: {
            opacity: 1,
            x: 0,
            color: "#9ca3af",
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section id="experience" className="py-16 bg-transparent border-t border-gray-900 border-opacity-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative">
                {/* Futuristic background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 relative"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight flex items-center justify-center gap-3">
                        <Cpu className="w-10 h-10 text-indigo-400 animate-pulse" />
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Experience</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_15px_rgba(124,58,237,0.7)]"></div>
                </motion.div>

                <div className="max-w-5xl mx-auto relative border-l-0 md:border-l-2 border-indigo-900/50 pl-0 md:pl-10 mt-8">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative perspective-1000"
                    >
                        {/* Timeline dot with glowing effect */}
                        <div className="hidden md:flex absolute -left-[51px] top-4 w-6 h-6 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,1)] border-4 border-gray-950 items-center justify-center z-20">
                            <Briefcase className="w-3 h-3 text-white absolute" />
                        </div>
                        {/* Futuristic animated line connection */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="hidden md:block absolute -left-[41px] top-6 w-[2px] bg-gradient-to-b from-indigo-500 to-transparent -z-10"
                        />

                        <div className="bg-gray-950/60 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] hover:border-indigo-500/40 transition-all duration-500 group overflow-hidden relative">

                            {/* Scanning line animation inside the card */}
                            <motion.div
                                animate={{ top: ["-10%", "110%"] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                className="absolute left-0 right-0 h-[1px] bg-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.8)] z-50 pointer-events-none"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                                {/* Thumbnail Image with Hologram effect */}
                                <div className="md:col-span-5 w-full h-56 md:h-72 rounded-2xl overflow-hidden relative border border-gray-700/50 group-hover:border-indigo-500/50 transition-colors">
                                    <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                                    <motion.img
                                        whileHover={{ scale: 1.1, rotateZ: 2 }}
                                        transition={{ duration: 0.5 }}
                                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Cyberpunk Internship Thumbnail"
                                        className="w-full h-full object-cover text-gray-500 flex items-center justify-center text-sm"
                                    />
                                </div>

                                {/* Content Details */}
                                <div className="md:col-span-7 flex flex-col justify-center">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <motion.span
                                            whileHover={{ scale: 1.05 }}
                                            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs md:text-sm font-black tracking-wider border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]"
                                        >
                                            OCT 2024 – NOV 2024
                                        </motion.span>
                                        <h4 className="text-lg md:text-xl text-gray-300 font-bold bg-gray-900/80 px-4 py-1.5 rounded-full border border-gray-700">Saiket Systems</h4>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">Web Development Intern</h3>

                                    <motion.ul
                                        variants={listContainerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="space-y-4 text-gray-400 list-none mb-8"
                                    >
                                        <motion.li variants={listItemVariants} className="flex items-start gap-3 group/item">
                                            <span className="text-indigo-500 mt-1.5 transform group-hover/item:scale-125 transition-transform group-hover/item:text-purple-400">▹</span>
                                            <span className="leading-relaxed">Developed responsive user interfaces using HTML, CSS, and JavaScript.</span>
                                        </motion.li>
                                        <motion.li variants={listItemVariants} className="flex items-start gap-3 group/item">
                                            <span className="text-indigo-500 mt-1.5 transform group-hover/item:scale-125 transition-transform group-hover/item:text-purple-400">▹</span>
                                            <span className="leading-relaxed">Gained hands-on experience in building user-friendly and interactive web applications.</span>
                                        </motion.li>
                                        <motion.li variants={listItemVariants} className="flex items-start gap-3 group/item">
                                            <span className="text-indigo-500 mt-1.5 transform group-hover/item:scale-125 transition-transform group-hover/item:text-purple-400">▹</span>
                                            <span className="leading-relaxed">Competently executed real-world layout structures and highly responsive grid designs.</span>
                                        </motion.li>
                                    </motion.ul>

                                    {/* Action Links */}
                                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mt-2">
                                        <a href="#" className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all relative overflow-hidden group/btn">
                                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                                            <ExternalLink className="w-5 h-5 relative z-10" /> <span className="relative z-10">Live Demo</span>
                                        </a>
                                        <a href="#" className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 text-sm font-semibold transition-all border border-gray-700 hover:border-gray-500 shadow-lg">
                                            <FaGithub className="w-5 h-5" /> Source Code
                                        </a>
                                        <a href="#" className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white text-sm font-semibold transition-all border border-indigo-500/30 hover:border-indigo-400 shadow-lg group/cert">
                                            <Award className="w-5 h-5 group-hover/cert:animate-bounce" /> View Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
