import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Info } from 'lucide-react';
import { projectsData } from '../data/projects';

const Projects = () => {
    const [showAll, setShowAll] = useState(() => {
        // Look at the URL hash. If the user is returning to a project card that is outside the top 3, expand the list automatically.
        if (typeof window !== 'undefined' && window.location.hash.includes('project-card-')) {
            const requestedId = window.location.hash.replace('#project-card-', '');
            const index = projectsData.findIndex(p => p.id === requestedId);
            if (index >= 3) return true;
        }
        return false;
    });
    const navigate = useNavigate();
    const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);


    return (
        <section id="projects" className="py-16 bg-transparent border-t border-gray-900 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative" style={{ zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">My <span className="text-purple-400">Projects</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work, showcasing my skills in full-stack development.
                    </p>
                </motion.div>

                {/* Added max-w-5xl to reduce card widths globally and increased gap to gap-10 */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    <AnimatePresence>
                        {displayedProjects.map((proj) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -5, scale: 1.015 }}
                                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                                key={proj.title}
                                id={`project-card-${proj.id}`}
                                onClick={() => window.open(proj.link, '_blank')}
                                className="scroll-mt-24 cursor-pointer bg-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/60 shadow-lg hover:shadow-[0_10px_40px_rgba(168,85,247,0.25)] flex flex-col h-full group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 20 }}></div>

                                <div className="h-56 relative overflow-hidden border-b border-gray-800/50">
                                    <motion.img
                                        src={proj.image}
                                        alt={proj.title}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-5 flex flex-col flex-1 relative bg-gray-900/80" style={{ zIndex: 10 }}>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{proj.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-400 mb-5 flex-1 line-clamp-3 leading-relaxed">{proj.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {proj.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-gray-800/80 rounded-full text-xs font-semibold text-purple-300/80 border border-purple-500/20 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-colors duration-300 shadow-[0_0_10px_rgba(168,85,247,0.05)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex items-center pt-4 border-t border-gray-800">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.history.replaceState(null, '', `/#project-card-${proj.id}`);
                                                navigate(`/project/${proj.id}`);
                                            }}
                                            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-purple-600/90 text-white font-bold hover:bg-purple-500 active:bg-purple-700 transition-colors duration-200 cursor-pointer"
                                        >
                                            {/* <Info className="w-5 h-5" /> */}
                                            More Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {projectsData.length > 3 && (
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
