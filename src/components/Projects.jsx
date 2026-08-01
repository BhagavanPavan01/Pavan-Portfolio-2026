import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: "Portfolio Website",
        desc: "A responsive personal portfolio website showcasing my skills and work.",
        link: "https://bhagavanpavan-portfolio.netlify.app/",
        github: "https://github.com/BhagavanPavan01",
        image: "https://images.unsplash.com/photo-1507238692062-5a042e971924?q=80&w=800&auto=format&fit=crop",
        tags: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "College Attendance System",
        desc: "Modern attendance system for JNTUGV – precise, paperless, powerful.",
        link: "https://college-attendance-system.netlify.app/",
        github: "https://github.com/BhagavanPavan01",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
        tags: ["MERN Stack", "React", "Node.js"]
    },
    {
        title: "Restaurant Website",
        desc: "Developed a modern, interactive, and visually appealing website for a Chinese restaurant.",
        link: "https://famous-chinese-restaurant.netlify.app/",
        github: "https://github.com/BhagavanPavan01",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        tags: ["HTML", "CSS", "JS", "Bootstrap"]
    },
    {
        title: "TODO List Application",
        desc: "A simple and interactive to-do list app to add, edit, and manage daily tasks efficiently.",
        link: "https://bpcreative-todolist.netlify.app/",
        github: "https://github.com/BhagavanPavan01",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
        tags: ["React", "LocalStorage"]
    },
    {
        title: "Amazon Clone",
        desc: "Amazon clone with products, authentication, cart, checkout, and payments.",
        link: "https://bp-creative-amazon.netlify.app/",
        github: "https://github.com/BhagavanPavan01",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=800&auto=format&fit=crop",
        tags: ["React", "Firebase", "Stripe"]
    },
    {
        title: "Resume Builder",
        desc: "Resume Builder with user customizable templates, real-time preview, PDF export.",
        link: "https://bpcreative-resumebuilder.netlify.app/",
        github: "https://github.com/BhagavanPavan01",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
        tags: ["React", "JSPDF"]
    },
];

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="py-24 bg-transparent border-t border-gray-900 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative" style={{ zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold text-white mb-4">My <span className="text-purple-400">Projects</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work, showcasing my skills in full-stack development, UI/UX design, and complex problem-solving.
                    </p>
                </motion.div>

                {/* Removed motion.div and layout here to explicitly prevent the hanging/freezing cursor */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {displayedProjects.map((proj) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -5, scale: 1.015 }}
                                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                                key={proj.title}
                                onClick={() => window.open(proj.link, '_blank')}
                                className="cursor-pointer bg-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/60 shadow-lg hover:shadow-[0_10px_40px_rgba(168,85,247,0.25)] flex flex-col h-full group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 20 }}></div>

                                <div className="h-40 relative overflow-hidden bg-gray-950">
                                    <motion.img
                                        src={proj.image}
                                        alt={proj.title}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none"></div>
                                </div>
                                <div className="p-5 flex flex-col flex-1 relative bg-gray-900/80" style={{ zIndex: 10 }}>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{proj.title}</h3>
                                    <p className="text-sm text-gray-400 mb-5 flex-1 line-clamp-3 leading-relaxed">{proj.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {proj.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-gray-800/80 rounded-full text-xs font-semibold text-purple-300/80 border border-purple-500/20 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-colors duration-300 shadow-[0_0_10px_rgba(168,85,247,0.05)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-800">
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-800/80 text-gray-200 font-semibold hover:text-white hover:bg-purple-600 transition-colors border border-gray-700 hover:border-purple-500 shadow-sm"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center justify-center p-2.5 rounded-lg bg-gray-800/80 text-gray-400 hover:text-white hover:bg-purple-600 transition-colors border border-gray-700 hover:border-purple-500 shadow-sm"
                                            title="View GitHub Repository"
                                        >
                                            <FaGithub className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {projects.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mt-12 relative" style={{ zIndex: 10 }}
                    >
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gray-900/50 backdrop-blur-md border-2 border-purple-500/50 text-purple-300 font-bold hover:bg-purple-600 hover:text-white hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer"
                        >
                            {showAll ? 'Show Less' : 'View All Projects'}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
