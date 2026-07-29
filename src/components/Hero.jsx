import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';

const Hero = () => {
    const roles = ["Software Developer", "Full Stack Developer", "Graphic Designer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const currentRole = roles[currentRoleIndex];

        if (isDeleting) {
            timer = setTimeout(() => {
                setCurrentText(prev => prev.slice(0, -1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }, 50); // Deleting speed
        } else {
            if (currentText.length === currentRole.length) {
                timer = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
            } else {
                timer = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length + 1));
                }, 100); // Typing speed
            }
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIndex]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <motion.div
                        className="flex-1 text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium mb-6">
                            👋 Hello, It's Me
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
                            Bhagavan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Pavan</span>
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-gray-400 mb-6 h-10">
                            Proficient <span className="text-purple-400 border-r-2 border-purple-400 pr-1 animate-pulse">{currentText}</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                            Passionate about crafting interactive and dynamic web experiences. Specializing in full-stack development, bringing creative ideas to life on the internet.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                            <a href="https://drive.google.com/file/d/1DhMEhOwYy3LEk6C9jR_niJCpS98mX_ah/view?usp=sharing" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-transparent border-2 border-purple-500 text-purple-400 font-bold hover:bg-purple-500/10 hover:text-white transition-colors flex items-center gap-2 group">
                                Download CV
                                <ArrowRight className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </a>
                            <a href="https://wa.me/9542377685" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full border border-gray-700 hover:border-purple-500 text-white font-medium hover:bg-purple-500/10 transition-colors">
                                Hire Me
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-6 mt-12">
                            <span className="text-gray-500 font-medium">Connect:</span>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-purple-600 transition-all hover:-translate-y-1">
                                    <FaGithub className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-indigo-600 transition-all hover:-translate-y-1">
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:bhagavanpavan01@gmail.com" className="p-3 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-purple-600 transition-all hover:-translate-y-1">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Upgraded Hero Photo Area */}
                    <motion.div
                        className="flex-1 w-full flex justify-center relative perspective-1000"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    >
                        {/* Orbiting rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute z-0 w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border border-purple-500/20 border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            className="absolute z-0 w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-full border border-indigo-500/20"
                        />

                        <div className="relative w-72 h-72 md:w-[350px] md:h-[350px] z-10 flex items-center justify-center">

                            {/* Space Theme Animation: Core Energy Rings for Developer Theme */}
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-15px] rounded-full border-t-[4px] border-blue-500 border-r-[4px] border-transparent shadow-[0_0_40px_rgba(59,130,246,0.6)] mix-blend-screen"
                            />
                            <motion.div
                                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-30px] rounded-full border-b-[4px] border-purple-500 border-l-[4px] border-transparent shadow-[0_0_30px_rgba(168,85,247,0.4)] mix-blend-screen"
                            />
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-45px] rounded-full border-[1px] border-cyan-400/30 border-dashed"
                            />

                            {/* Center Avatar with Tech Glow */}
                            <div className="w-full h-full rounded-full bg-gray-900 border-4 border-blue-900/50 overflow-hidden relative shadow-[inset_0_0_30px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.4)] z-10 group">
                                <img
                                    src="https://res.cloudinary.com/qxw39tud/image/upload/v1785342244/1767115738588png_qasauv.png"
                                    alt="Bhagavan Pavan Animation and Design"
                                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-20"></div>
                            </div>

                            {/* Floating Tech Stack Icons tailored for Software Developer */}
                            <motion.div
                                animate={{ y: [0, -15, 0], x: [0, -10, 0], rotate: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 p-4 bg-gray-900/90 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(97,218,251,0.4)] border border-cyan-500/30 z-30 flex items-center justify-center"
                            >
                                <FaReact className="text-[#61DAFB] w-7 h-7" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                                className="absolute bottom-4 -left-10 p-4 bg-gray-900/90 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(104,160,99,0.4)] border border-green-500/30 z-30 flex items-center justify-center"
                            >
                                <FaNodeJs className="text-[#68A063] w-7 h-7" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -10, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 4.5, repeat: Infinity, delay: 2, ease: "easeInOut" }}
                                className="absolute -bottom-8 right-8 p-4 bg-gray-900/90 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(247,223,30,0.4)] border border-yellow-500/30 z-30 flex items-center justify-center"
                            >
                                <FaPython className="text-[#3776AB] w-7 h-7" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0], x: [0, 15, 0], rotate: [0, 180, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute top-10 -left-8 p-3 bg-gray-900/90 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(227,79,38,0.4)] border border-orange-500/30 z-30 flex items-center justify-center"
                            >
                                <FaGitAlt className="text-[#F05032] w-6 h-6" />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
