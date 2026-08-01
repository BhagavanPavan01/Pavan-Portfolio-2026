import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Code2, Wrench, Camera } from 'lucide-react';

const skillCategories = {
    frontend: {
        id: 'frontend',
        title: 'Frontend',
        icon: <Monitor className="w-5 h-5" />,
        skills: [
            { name: 'HTML & CSS', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'React.js', level: 85 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'Bootstrap', level: 80 },
            { name: 'Material UI', level: 70 }
        ]
    },
    backend: {
        id: 'backend',
        title: 'Backend',
        icon: <Server className="w-5 h-5" />,
        skills: [
            { name: 'Node.js', level: 80 },
            { name: 'Express.js', level: 75 },
            { name: 'MongoDB', level: 80 }
        ]
    },
    languages: {
        id: 'languages',
        title: 'Programming Languages',
        icon: <Code2 className="w-5 h-5" />,
        skills: [
            { name: 'Python', level: 85 },
            { name: 'Java', level: 75 },
            { name: 'JavaScript / ES6+', level: 85 },
            { name: 'C / C++', level: 70 }
        ]
    },
    tools: {
        id: 'tools',
        title: 'Tools',
        icon: <Wrench className="w-5 h-5" />,
        skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'VS Code', level: 95 },
            { name: 'Postman', level: 80 },
            { name: 'Figma / UI/UX Design', level: 80 }
        ]
    },
    photography: {
        id: 'photography',
        title: 'Photography & Editing',
        icon: <Camera className="w-5 h-5" />,
        skills: [
            { name: 'Photography', level: 90 },
            { name: 'Videography', level: 85 },
            { name: 'Photo Editing', level: 90 },
            { name: 'Video Editing', level: 85 },
            { name: 'Graphic Design', level: 80 }
        ]
    }
};

const About = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    return (
        <section id="about" className="py-24 bg-transparent border-t border-gray-900 relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold text-white mb-4">About <span className="text-purple-400">Me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Professional About Me Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28 max-w-6xl mx-auto">
                    {/* Text Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">engineering</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">creativity.</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Hi, I'm <strong className="text-white">Bhagavan Pavan</strong>. I am a dedicated Software Developer who specializes in building high-performance, scalable web applications with intuitive and beautiful user interfaces.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            By blending my profound technical expertise in modern full-stack technologies with my creative background in graphic design and photography, I bring a unique, multidimensional perspective to every project I undertake.
                        </p>

                        <div className="pt-6 flex flex-wrap gap-4">
                            <a href="https://wa.me/9542377685" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all">
                                Let's Collaborate
                            </a>
                            <a href="#projects" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gray-800 text-white font-bold hover:bg-gray-700 transition-all border border-gray-700">
                                View My IT Work
                            </a>
                        </div>
                    </motion.div>

                    {/* Bento Grid Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                    >
                        {/* Card 1 */}
                        <div className="p-6 bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors group">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-2">Clean Code</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Writing maintainable, robust scale-ready architecture.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-colors group lg:mt-10">
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-2">Modern UI/UX</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Designing visually stunning and highly responsive interfaces.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors group lg:-mt-10">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <Camera className="w-6 h-6" />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-2">Creative Arts</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Expertise in graphic design, photography & visual story craft.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="p-6 bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-colors group">
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <Server className="w-6 h-6" />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-2">Robust Backend</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Building secure and high-performance server-side APIs.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Technical Skills Tabbed Interface */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-6xl mx-auto"
                >
                    <h3 className="text-3xl font-extrabold text-center text-white mb-12">Technical <span className="text-indigo-400">Skills</span></h3>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Tabs Section taking up ≈ 35% */}
                        <div className="w-full lg:w-[35%] flex flex-col gap-4">
                            {Object.values(skillCategories).map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`w-full flex items-center gap-4 md:gap-5 px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold transition-all duration-300 relative group text-left ${activeTab === category.id
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] border border-purple-500/50'
                                        : 'bg-gray-800/40 text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-gray-700/50 hover:border-gray-500'
                                        }`}
                                >
                                    {/* Icon container */}
                                    <div className={`p-2.5 rounded-lg transition-colors duration-300 ${activeTab === category.id ? 'bg-white/20' : 'bg-gray-900 group-hover:bg-gray-800 border border-gray-700'
                                        }`}>
                                        {category.icon}
                                    </div>
                                    <span className="text-base md:text-lg tracking-wide">{category.title}</span>

                                    {/* Subtle glowing indicator active tab */}
                                    {activeTab === category.id && (
                                        <motion.div
                                            layoutId="activeTabGlow"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-l-xl shadow-[0_0_10px_white]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Skills Progress Bars Component taking up ≈ 65% */}
                        <div className="w-full lg:w-[65%] bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 p-6 md:p-8 shadow-2xl relative min-h-[450px]">
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

                            <h4 className="text-2xl font-bold text-white mb-8 border-b border-gray-800/80 pb-4">
                                {skillCategories[activeTab].title}
                            </h4>

                            <div className="relative z-10">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-7"
                                    >
                                        {skillCategories[activeTab].skills.map((skill, index) => (
                                            <div key={index} className="group">
                                                <div className="flex justify-between items-end mb-2">
                                                    <span className="text-gray-200 font-semibold text-[15px] tracking-wide">{skill.name}</span>
                                                    <span className="text-indigo-400 font-bold text-sm">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-gray-950 rounded-full h-3 overflow-hidden border border-gray-800 shadow-inner">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1, delay: 0.1 + (index * 0.1), type: "spring", stiffness: 45 }}
                                                        className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-indigo-400 rounded-full relative shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                                                    >
                                                        {/* Shine effect on bar */}
                                                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
