import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Bootstrap", "Tailwind CSS",
    "Python", "Java", "MongoDB", "Express.js", "Git / GitHub", "UI/UX Design", "Graphic Design"
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold text-white mb-4">About <span className="text-purple-400">Me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 space-y-6 text-gray-400 text-lg leading-relaxed"
                    >
                        <p>
                            Hi, I'm <strong className="text-white">Bhagavan Pavan</strong>, a Proficient Software Developer with expertise in full stack development, Graphic Design, and Photography.
                        </p>
                        <p>
                            I specialize in creating high-performance, scalable web applications using modern technologies. My passion lies in solving complex problems through elegant code and intuitive user interfaces.
                        </p>
                        <p>
                            When I'm not coding, I enjoy exploring visual arts through photography and graphic design, bringing a creative edge to all my technical projects.
                        </p>
                        <div className="pt-4">
                            <a href="https://wa.me/9542377685" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600/20 text-purple-400 font-medium hover:bg-purple-600 hover:text-white transition-all">
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex-1 w-full"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.1, backgroundColor: '#8b5cf6', color: '#ffffff' }}
                                    className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 font-medium text-sm border border-gray-700 cursor-default transition-colors duration-300"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
