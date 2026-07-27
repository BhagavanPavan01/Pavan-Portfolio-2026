import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
    {
        title: "Portfolio Website",
        desc: "A responsive personal portfolio website showcasing my skills and work.",
        link: "https://bhagavanpavan-portfolio.netlify.app/",
        tags: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "College Attendance System",
        desc: "Modern attendance system for JNTUGV – precise, paperless, powerful.",
        link: "https://college-attendance-system.netlify.app/",
        tags: ["MERN Stack", "React", "Node.js"]
    },
    {
        title: "Restaurant Website",
        desc: "Developed a modern, interactive, and visually appealing website for a Chinese restaurant.",
        link: "https://famous-chinese-restaurant.netlify.app/",
        tags: ["HTML", "CSS", "JS", "Bootstrap"]
    },
    {
        title: "TODO List Application",
        desc: "A simple and interactive to-do list app to add, edit, and manage daily tasks efficiently.",
        link: "https://bpcreative-todolist.netlify.app/",
        tags: ["React", "LocalStorage"]
    },
    {
        title: "Amazon Clone",
        desc: "Amazon clone with products, authentication, cart, checkout, and payments.",
        link: "https://bp-creative-amazon.netlify.app/",
        tags: ["React", "Firebase", "Stripe"]
    },
    {
        title: "Resume Builder",
        desc: "Resume Builder with user customizable templates, real-time preview, PDF export.",
        link: "https://bpcreative-resumebuilder.netlify.app/",
        tags: ["React", "JSPDF"]
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-transparent border-t border-gray-800">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold text-white mb-4">My <span className="text-purple-400">Projects</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work, showcasing my skills in full-stack development, UI/UX design, and complex problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all group flex flex-col h-full"
                        >
                            <div className="h-48 bg-gray-900 border-b border-gray-700 flex items-center justify-center relative overflow-hidden">
                                <Code2 className="w-20 h-20 text-gray-700 group-hover:scale-110 group-hover:text-purple-500/50 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{proj.title}</h3>
                                <p className="text-gray-400 mb-6 flex-1 line-clamp-3">{proj.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {proj.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-gray-900 rounded-full text-xs font-medium text-gray-300 border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={proj.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-purple-600 transition-colors border border-gray-700 hover:border-purple-500"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://bhagavanpavan-portfolio.netlify.app/#Projects" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-purple-600 text-purple-400 font-bold hover:bg-purple-600 hover:text-white transition-all">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
