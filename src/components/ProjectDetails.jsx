import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Code, Briefcase, Zap, Info, Settings, Layers, Target, Rocket } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const IconMap = {
    Info: Info,
    Zap: Zap,
    Code: Code,
    Briefcase: Briefcase,
    Settings: Settings,
    Layers: Layers,
    Target: Target,
    Rocket: Rocket
};

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Scroll to top when loading the details page
        window.scrollTo(0, 0);
        const p = projectsData.find(proj => proj.id === id);
        if (p) setProject(p);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Project not found</h2>
                    <button onClick={() => navigate(`/#project-card-${project.id}`)} className="text-purple-400 hover:text-purple-300">
                        Go back home
                    </button>
                </div>
            </div>
        );
    }

    const rightColumnSection = project.sections?.[0];
    const bottomSections = project.sections?.slice(1) || [];

    return (
        <section className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 md:px-12 relative" style={{ zIndex: 10 }}>
                {/* Back Button */}
                <button
                    onClick={() => navigate(`/#project-card-${project.id}`)}
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 active:text-purple-600 mb-8 transition-colors cursor-pointer font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Projects
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
                    {/* Left Column: Image and Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_40px_rgba(168,85,247,0.15)] group bg-gray-900/40">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto max-h-[300px] md:max-h-[500px] object-contain md:object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Core Technologies & Skills */}
                        <div className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Code className="w-4 h-4 text-purple-400" /> Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="px-3 py-1.5 bg-gray-800 border border-gray-700 hover:border-purple-500/50 hover:text-purple-300 transition-colors rounded-lg text-sm text-gray-300 shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap w-full gap-3 sm:gap-4 mt-6">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-purple-600 text-white text-[13px] sm:text-base font-bold hover:bg-purple-500 active:bg-purple-700 transition-colors duration-200 shadow-md"
                            >
                                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                Live Demo
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gray-800 text-white text-[13px] sm:text-base font-bold border border-gray-700 hover:bg-gray-700 active:bg-gray-600 transition-colors duration-200 shadow-sm"
                            >
                                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                                GitHub
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Project Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{project.title}</h1>
                            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6"></div>
                            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-justify w-full">
                                {project.desc}
                            </p>
                        </div>

                        {rightColumnSection && (
                            <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-5 md:p-8 border border-gray-800">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
                                    {(() => {
                                        const Ic = IconMap[rightColumnSection.icon] || Zap;
                                        return <Ic className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />;
                                    })()}
                                    {rightColumnSection.heading}
                                </h3>
                                <ul className="space-y-3 md:space-y-4 text-justify">
                                    {rightColumnSection.items.map((point, index) => (
                                        <li key={index} className="flex gap-3 md:gap-4 items-start">
                                            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-purple-400 shrink-0 mt-0.5" />
                                            <span className="text-sm md:text-base text-gray-300 leading-relaxed flex-1">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Full Width Dynamic Sections */}
                {bottomSections.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 md:mt-12 lg:mt-16 bg-gray-900/50 backdrop-blur-md rounded-2xl p-5 md:p-8 lg:p-12 border border-gray-800 max-w-7xl mx-auto"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                            {bottomSections.map((sec, idx) => {
                                const IconComp = IconMap[sec.icon] || Code;
                                return (
                                    <div key={idx}>
                                        <h4 className="text-lg md:text-xl font-semibold text-purple-300 mb-4 md:mb-6 font-mono flex items-center gap-3">
                                            <IconComp className="w-4 h-4 md:w-5 md:h-5" /> {sec.heading}
                                        </h4>
                                        <ul className="space-y-3 md:space-y-4 border-l-2 border-purple-500/30 pl-4 md:pl-5 text-justify">
                                            {sec.items.map((item, index) => (
                                                <li key={index} className="text-sm md:text-base text-gray-300 leading-relaxed flex gap-3 md:gap-4 items-start">
                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-400 mt-2 shrink-0 shadow-[0_0_10px_#c084fc]"></div>
                                                    <span className="flex-1">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ProjectDetails;
