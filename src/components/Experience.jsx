import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-transparent border-t border-gray-900 border-opacity-50">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold text-white mb-4">My <span className="text-indigo-400">Experience</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto relative border-l-2 border-gray-800 pl-8 ml-4 md:ml-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-950 flex items-center justify-center">
                            <Briefcase className="w-3 h-3 text-white absolute" />
                        </div>

                        <div className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800 shadow-xl hover:border-indigo-500/50 transition-colors">
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold mb-4">
                                Oct 2024 – Nov 2024
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-2">Web Development Intern</h3>
                            <h4 className="text-lg text-gray-400 mb-4">Saiket Systems</h4>

                            <ul className="space-y-3 text-gray-400 list-disc list-inside">
                                <li>Developed responsive user interfaces using HTML, CSS, and JavaScript.</li>
                                <li>Gained hands-on experience in building user-friendly web applications.</li>
                                <li>Improved communication, teamwork skills, and project management capabilities.</li>
                                <li>Completed assigned tasks with sincerity, professionalism, and strict attention to detail.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
