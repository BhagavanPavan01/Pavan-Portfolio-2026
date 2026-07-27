import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Code2, Palette, Camera } from 'lucide-react';
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

                        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-gray-400 mb-6">
                            Proficient Software Developer
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                            Passionate about crafting interactive and dynamic web experiences. Specializing in full-stack development, bringing creative ideas to life on the internet.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                            <a href="#projects" className="px-8 py-4 rounded-full bg-transparent border-2 border-purple-500 text-purple-400 font-bold hover:bg-purple-500/10 hover:text-white transition-colors flex items-center gap-2 group">
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

                        <div className="relative w-72 h-72 md:w-[350px] md:h-[350px] z-10 flex items-center justify-center">

                            {/* Space Theme Animation: Swirling Energy / Portal Rings */}
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-10px] rounded-full border-t-[4px] border-purple-500 border-r-[4px] border-transparent shadow-[0_0_40px_rgba(168,85,247,0.6)] mix-blend-screen"
                            />
                            <motion.div
                                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-25px] rounded-full border-b-[4px] border-cyan-400 border-l-[4px] border-transparent shadow-[0_0_30px_rgba(34,211,238,0.4)] mix-blend-screen"
                            />

                            {/* The Photo Container specifically set up for your image URL */}
                            <div className="w-full h-full rounded-full bg-gray-900 border-4 border-indigo-900 overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_0_30px_rgba(79,70,229,0.5)]">

                                {/* 👇 PASTE YOUR PHOTO URL IN THE src BELOW 👇 */}
                                <img
                                    src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Bhagavan Pavan"
                                    className="w-full h-full object-cover relative z-10"
                                />

                                {/* Instructions showing if the image link is broken or empty */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-gray-400 text-sm text-center p-4">
                                    <span>Paste your URL</span>
                                    <span>in Hero.jsx</span>
                                </div>
                            </div>

                            {/* Animated Role Badges */}
                            <motion.div
                                animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, delay: 0, ease: "easeInOut" }}
                                className="absolute -top-8 -right-8 p-3 md:p-4 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-blue-500/50 flex items-center gap-3 z-20"
                            >
                                <Code2 className="text-blue-400 w-5 h-5" />
                                <span className="text-blue-200 font-bold text-sm tracking-wide">Developer</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 25, 0], x: [0, -15, 0], rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
                                className="absolute bottom-12 -left-16 p-3 md:p-4 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.3)] border border-pink-500/50 flex items-center gap-3 z-20"
                            >
                                <Palette className="text-pink-400 w-5 h-5" />
                                <span className="text-pink-200 font-bold text-sm tracking-wide">Designer</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0], x: [0, -20, 0], scale: [1, 1.05, 1] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 2.5, ease: "easeInOut" }}
                                className="absolute -bottom-10 right-4 p-3 md:p-4 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/50 flex items-center gap-3 z-20"
                            >
                                <Camera className="text-green-400 w-5 h-5" />
                                <span className="text-green-200 font-bold text-sm tracking-wide">Photographer</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
