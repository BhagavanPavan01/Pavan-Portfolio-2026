import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
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
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gray-950">
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

                        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-gray-400 mb-6">
                            Proficient Software Developer
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                            Passionate about crafting interactive and dynamic web experiences. Specializing in full-stack development, bringing creative ideas to life on the internet.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                            <a href="#projects" className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 group">
                                View My Work
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

                        <motion.div
                            whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10 }}
                            className="relative w-72 h-72 md:w-[400px] md:h-[400px] z-10"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Premium Glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 blur-2xl opacity-40 animate-pulse"></div>

                            {/* The Photo Container */}
                            <div className="relative w-full h-full p-2 rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                                <div className="w-full h-full rounded-full bg-gray-900 border-4 border-gray-950 overflow-hidden relative flex items-center justify-center">
                                    {/* Using a sleek placeholder that fits the space theme, since we don't have the exact user photo. */}
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
                                    <span className="text-8xl relative z-10 drop-shadow-2xl translate-y-3">🚀</span>
                                </div>
                            </div>

                            {/* Floating Tech Badges */}
                            <motion.div
                                animate={{ y: [0, -15, 0], rotateZ: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                className="absolute top-10 -right-4 p-4 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-purple-500/30 transform translate-z-10"
                            >
                                <div className="text-cyan-400 font-bold font-mono">React</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0], rotateZ: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                                className="absolute bottom-10 -left-4 p-4 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-indigo-500/30 transform translate-z-10"
                            >
                                <div className="text-yellow-400 font-bold font-mono">JS</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
