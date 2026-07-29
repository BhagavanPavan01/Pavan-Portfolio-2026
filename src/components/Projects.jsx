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

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {displayedProjects.map((proj, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                                key={proj.title}
                                onClick={() => window.open(proj.link, '_blank')}
                                className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all group flex flex-col h-full"
                            >
                                <div className="h-48 bg-gray-900 border-b border-gray-700 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 relative z-10 bg-gray-800">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{proj.title}</h3>
                                    <p className="text-gray-400 mb-6 flex-1 line-clamp-3">{proj.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {proj.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-gray-900 rounded-full text-xs font-medium text-gray-300 border border-gray-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex items-center gap-3">
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-purple-600 transition-colors border border-gray-700 hover:border-purple-500"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center justify-center p-3 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors border border-gray-700 hover:border-indigo-500"
                                            title="View GitHub Repository"
                                        >
                                            <FaGithub className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {projects.length > 3 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-purple-600 text-purple-400 font-bold hover:bg-purple-600 hover:text-white transition-all cursor-pointer"
                        >
                            {showAll ? 'Show Less' : 'View All Projects'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
