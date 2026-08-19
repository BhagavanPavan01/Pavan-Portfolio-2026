import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Code, Briefcase, Zap, Award } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { experienceData } from '../data/experience';

const ExperienceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [experience, setExperience] = useState(null);

    useEffect(() => {
        // Scroll to top when loading the details page
        window.scrollTo(0, 0);
        const e = experienceData.find(exp => exp.id === id);
        if (e) setExperience(e);
    }, [id]);

    if (!experience) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Experience not found</h2>
                    <button onClick={() => navigate(`/#experience-card-${id}`)} className="text-purple-400 hover:text-purple-300">
                        Go back home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 md:px-12 relative" style={{ zIndex: 10 }}>
                {/* Back Button */}
                <button
                    onClick={() => navigate(`/#experience-card-${experience.id}`)}
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 active:text-purple-600 mb-8 transition-colors cursor-pointer font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Experience
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
                    {/* Left Column: Image and Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_40px_rgba(168,85,247,0.15)] group">
                            <img
                                src={experience.image}
                                alt={experience.role}
                                className="w-full h-auto max-h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Core Technologies & Skills */}
                        <div className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Code className="w-4 h-4 text-purple-400" /> Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {experience.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="px-3 py-1.5 bg-gray-800 border border-gray-700 hover:border-purple-500/50 hover:text-purple-300 transition-colors rounded-lg text-sm text-gray-300 shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap w-full gap-3 sm:gap-4">
                            {experience.links?.live && experience.links.live !== "#" && !experience.links.live.includes("REPLACE_") && (
                                <a
                                    href={experience.links.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-purple-600 text-white text-[13px] sm:text-base font-bold hover:bg-purple-500 active:bg-purple-700 transition-colors duration-200 shadow-md"
                                >
                                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Live Platform
                                </a>
                            )}

                            {experience.links?.github && experience.links.github !== "#" && !experience.links.github.includes("REPLACE_") && (
                                <a
                                    href={experience.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gray-800 text-white text-[13px] sm:text-base font-bold border border-gray-700 hover:bg-gray-700 active:bg-gray-600 transition-colors duration-200 shadow-sm"
                                >
                                    <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                                    GitHub
                                </a>
                            )}

                            {experience.links?.certificate && experience.links.certificate !== "#" && !experience.links.certificate.includes("REPLACE_") && (
                                <a
                                    href={experience.links.certificate}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gray-800 text-white text-[13px] sm:text-base font-bold border border-gray-700 hover:bg-gray-700 active:bg-gray-600 transition-colors duration-200 shadow-sm"
                                >
                                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Certificate
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <span className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 font-bold text-sm border border-purple-500/30">
                                    {experience.duration}
                                </span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight">{experience.role}</h1>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-400 mb-4 md:mb-6">{experience.company}</h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-justify md:text-left w-full">
                                {experience.desc}
                            </p>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-800">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
                                <Zap className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
                                Key Contributions
                            </h3>
                            <ul className="space-y-3 md:space-y-4">
                                {experience.descriptionPoints.map((point, index) => (
                                    <li key={index} className="flex gap-3 md:gap-4 items-start">
                                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-purple-400 shrink-0 mt-0.5" />
                                        <span className="text-[13px] sm:text-sm md:text-base text-gray-300 leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </motion.div>
                </div>

                {/* Full Width Professional Impact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 lg:mt-16 bg-gray-900/50 backdrop-blur-md rounded-2xl p-5 md:p-8 lg:p-12 border border-gray-800 max-w-7xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3 justify-center text-center px-2">
                        <Briefcase className="text-blue-400 w-8 h-8 shrink-0" />
                        <span>Professional Impact Overview</span>
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-7xl mx-auto">
                        <div className="bg-gray-900/40 p-5 md:p-6 rounded-xl border border-gray-800">
                            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-purple-300 mb-3 md:mb-4 font-mono flex items-center gap-2 md:gap-3">
                                <Code className="w-4 h-4 md:w-5 md:h-5" /> Operational Workflow
                            </h4>
                            <p className="text-gray-300 leading-relaxed text-[13px] sm:text-base md:text-lg border-l-4 border-purple-500/50 pl-4 md:pl-5 text-justify md:text-left w-full">{experience.workflow}</p>
                        </div>
                        <div className="bg-gray-900/40 p-5 md:p-6 rounded-xl border border-gray-800">
                            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-purple-300 mb-3 md:mb-4 font-mono flex items-center gap-2 md:gap-3">
                                <Code className="w-4 h-4 md:w-5 md:h-5" /> Core Philosophy
                            </h4>
                            <p className="text-gray-300 leading-relaxed text-[13px] sm:text-base md:text-lg border-l-4 border-purple-500/50 pl-4 md:pl-5 text-justify md:text-left w-full">{experience.process}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Extended Tasks Section */}
                {experience.internshipTasks && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mt-12 lg:mt-16 max-w-7xl mx-auto"
                    >
                        <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-6 md:mb-10 text-center flex items-center justify-center gap-2 md:gap-3">
                            <Award className="text-purple-400 w-8 h-8 md:w-10 md:h-10" />
                            Internship Tasks Overview
                        </h3>
                        <div className="space-y-6 md:space-y-8">
                            {experience.internshipTasks.map((task, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className={`p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border ${task.isHighlight ? 'bg-gray-900 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)] relative overflow-hidden' : 'bg-gray-900/40 border-gray-800'}`}
                                >
                                    {task.isHighlight && (
                                        <div className="mb-3 md:mb-4 inline-block relative z-10">
                                            <span className="px-2 py-1 md:px-3 md:py-1 bg-purple-600 text-white text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">🌟 Final Project</span>
                                        </div>
                                    )}
                                    <h4 className={`text-lg md:text-2xl font-bold mb-2 md:mb-4 relative z-10 ${task.isHighlight ? 'text-purple-300' : 'text-white'}`}>
                                        {task.name}
                                    </h4>
                                    <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-[13px] sm:text-sm md:text-base relative z-10 text-justify md:text-left w-full">
                                        {task.overview}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
                                        {task.skillsUsed && (
                                            <div>
                                                <h5 className="text-[11px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1 md:mb-2">Skills Used</h5>
                                                <p className="text-purple-400 text-sm md:text-base">{task.skillsUsed}</p>
                                            </div>
                                        )}
                                        {task.outcome && (
                                            <div>
                                                <h5 className="text-[11px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1 md:mb-2">Outcome</h5>
                                                <p className="text-gray-400 font-medium text-sm md:text-base text-justify md:text-left w-full">{task.outcome}</p>
                                            </div>
                                        )}
                                    </div>

                                    {(task.features || task.workflowSteps) && (
                                        <div className="mt-5 md:mt-8 pt-5 md:pt-8 border-t border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 relative z-10">
                                            {task.features && (
                                                <div>
                                                    <h5 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                                                        <Zap className="w-4 h-4 md:w-5 md:h-5 text-purple-400" /> New Features (v2.0)
                                                    </h5>
                                                    <ul className="space-y-2 md:space-y-3">
                                                        {task.features.map((feature, fIdx) => (
                                                            <li key={fIdx} className="flex gap-2 md:gap-3 text-gray-300 text-xs sm:text-sm md:text-base items-start leading-relaxed">
                                                                <span className="text-purple-400 mt-0.5 md:mt-1 shrink-0">✦</span>
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {task.workflowSteps && (
                                                <div>
                                                    <h5 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                                                        <Code className="w-4 h-4 md:w-5 md:h-5 text-purple-400" /> Workflow & How to Run
                                                    </h5>
                                                    <ul className="space-y-2 mb-2 md:space-y-3">
                                                        {task.workflowSteps.map((step, sIdx) => (
                                                            <li key={sIdx} className="flex gap-2 md:gap-3 text-gray-300 text-[11px] sm:text-xs md:text-sm font-mono bg-gray-800/50 p-2.5 md:p-3 items-center rounded-lg border border-gray-700 leading-relaxed overflow-x-auto">
                                                                <span className="text-purple-400 shrink-0">❯</span>
                                                                <span className="whitespace-pre-wrap">{step}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ExperienceDetails;
