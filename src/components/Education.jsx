import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    GraduationCap,
    School,
    Building2,
    MapPin,
    Calendar,
    CheckCircle2,
    Sparkles,
    ChevronLeft,
    ChevronRight,
    BookOpen,
    Layers,
    Award
} from 'lucide-react';
import { educationData } from '../data/education';

const Education = () => {
    const [selectedId, setSelectedId] = useState('mca');
    const detailsRef = useRef(null);

    const currentIndex = educationData.findIndex((item) => item.id === selectedId);
    const selectedItem = educationData[currentIndex] || educationData[0];

    const handleSelect = (id) => {
        setSelectedId(id);
        // On mobile devices, smoothly scroll down slightly so the details card is prominently in view
        if (window.innerWidth < 768 && detailsRef.current) {
            setTimeout(() => {
                detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % educationData.length;
        handleSelect(educationData[nextIndex].id);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + educationData.length) % educationData.length;
        handleSelect(educationData[prevIndex].id);
    };

    return (
        <section
            id="education"
            className="py-20 md:py-24 bg-transparent border-t border-gray-900 relative overflow-hidden education-section"
        >
            {/* Ambient background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-tr from-purple-600/10 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 md:p-4 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl mb-6 group">
                        <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-purple-400 group-hover:text-indigo-400 transition-colors" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight uppercase">
                        ACADEMIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">EDUCATION</span>
                    </h2>

                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>

                    <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                        Click on any qualification below to explore comprehensive details about the degree, institution, academic focus, curriculum, and core technical competencies.
                    </p>
                </motion.div>

                {/* Qualification Selector Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-12 max-w-6xl mx-auto">
                    {educationData.map((item, idx) => {
                        const isSelected = item.id === selectedId;
                        return (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                whileHover={{ y: -4 }}
                                onClick={() => handleSelect(item.id)}
                                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer w-full flex flex-col justify-between education-card ${
                                    isSelected
                                        ? 'bg-gradient-to-br from-purple-900/30 via-gray-900 to-gray-900/90 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.3)] ring-2 ring-purple-500/40 education-tab-active'
                                        : 'bg-gray-900/60 border-gray-800 hover:border-gray-700 hover:bg-gray-800/40 education-tab-inactive'
                                }`}
                            >
                                {/* Top Badge & Status */}
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span
                                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg uppercase tracking-wider ${
                                            isSelected
                                                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                                                : 'bg-gray-800/90 text-gray-400 border border-gray-700/60'
                                        }`}
                                    >
                                        {item.level}
                                    </span>

                                    {item.isCurrent ? (
                                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                            Pursuing
                                        </span>
                                    ) : (
                                        <span className="text-[11px] text-gray-400 font-semibold flex items-center gap-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                                            {item.period}
                                        </span>
                                    )}
                                </div>

                                {/* Degree Title */}
                                <div>
                                    <h3
                                        className={`text-lg sm:text-xl font-black mb-1.5 transition-colors leading-tight ${
                                            isSelected
                                                ? 'text-white'
                                                : 'text-gray-200 group-hover:text-purple-300'
                                        }`}
                                    >
                                        {item.shortDegree}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 mb-3 font-medium">
                                        {item.shortInstitution}
                                    </p>
                                </div>

                                {/* Footer Action Indicator */}
                                <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between mt-auto">
                                    <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                                        {item.period}
                                    </span>
                                    <span
                                        className={`text-xs font-bold transition-colors ${
                                            isSelected
                                                ? 'text-purple-400'
                                                : 'text-gray-500 group-hover:text-gray-300'
                                        }`}
                                    >
                                        {isSelected ? 'Active Details ➔' : 'View Details'}
                                    </span>
                                </div>

                                {/* Active Selection Glow Bar at bottom */}
                                {isSelected && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400"></div>
                                )}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Active Qualification Detail Showcase Panel */}
                <div ref={detailsRef} className="max-w-6xl mx-auto scroll-mt-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedItem.id}
                            initial={{ opacity: 0, y: 25, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden education-card"
                        >
                            {/* Subtle Ambient Decorative Gradient Glow in Card */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[90px] pointer-events-none"></div>

                            {/* Top Control Bar with Quick Switcher Buttons */}
                            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gray-800/80 relative z-10">
                                <div className="flex flex-wrap items-center gap-2.5">
                                    <span className="px-3 py-1 bg-purple-500/15 border border-purple-500/30 text-purple-300 font-bold text-xs rounded-full shadow-sm">
                                        {selectedItem.level}
                                    </span>
                                    {selectedItem.isCurrent ? (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 education-badge-active shadow-sm">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                            Currently Pursuing (2024 - 2026)
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-800/80 text-gray-300 border border-gray-700/60 education-badge-completed">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                                            Completed ({selectedItem.period})
                                        </span>
                                    )}
                                </div>

                                {/* Previous / Next Qualification Switcher */}
                                <div className="flex items-center gap-2 ml-auto">
                                    <button
                                        onClick={handlePrev}
                                        aria-label="Previous Qualification"
                                        className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-gray-800/80 hover:bg-gray-700 border border-gray-700 text-gray-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-1 active:scale-95 shadow-sm"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        <span className="hidden sm:inline">Previous</span>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        aria-label="Next Qualification"
                                        className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-1 active:scale-95 shadow-sm"
                                    >
                                        <span className="hidden sm:inline">Next</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Header Section for Active Qualification */}
                            <div className="py-6 border-b border-gray-800/80 relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                                            {selectedItem.degree}
                                        </h3>
                                        <p className="text-purple-400 text-sm sm:text-base font-semibold mb-3">
                                            {selectedItem.tagline}
                                        </p>
                                    </div>

                                    {/* Institution Badge Pill */}
                                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-800/80 border border-gray-700/80 text-gray-200 text-xs sm:text-sm font-semibold shrink-0">
                                        <Award className="w-4 h-4 text-purple-400" />
                                        <span>{selectedItem.stats[2]?.value || selectedItem.shortInstitution}</span>
                                    </div>
                                </div>

                                {/* Institution Meta Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3 text-xs sm:text-sm text-gray-300">
                                    <div className="flex items-start gap-2">
                                        <School className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-gray-400 text-[11px] block uppercase font-bold">Institution</span>
                                            <span className="font-semibold text-gray-200">{selectedItem.institution}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Building2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-gray-400 text-[11px] block uppercase font-bold">University / Board</span>
                                            <span className="font-semibold text-gray-200">{selectedItem.university}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-gray-400 text-[11px] block uppercase font-bold">Location & Duration</span>
                                            <span className="font-semibold text-gray-200">{selectedItem.location} • {selectedItem.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Metrics Bar */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 border-b border-gray-800/80 relative z-10">
                                {selectedItem.stats.map((stat, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="bg-gray-800/50 border border-gray-700/60 rounded-xl p-3 text-center education-card"
                                    >
                                        <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                                            {stat.label}
                                        </span>
                                        <span className="text-xs sm:text-sm md:text-base font-extrabold text-white">
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Detailed Content Columns */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 relative z-10">
                                {/* Left Column: Description & Highlights (7 cols) */}
                                <div className="lg:col-span-7 flex flex-col gap-6">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                                            <BookOpen className="w-4 h-4 text-purple-400" />
                                            Academic Overview
                                        </h4>
                                        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed text-justify md:text-left font-normal">
                                            {selectedItem.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-purple-400" />
                                            Key Focus & Academic Highlights
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {selectedItem.highlights.map((highlight, hIdx) => (
                                                <li
                                                    key={hIdx}
                                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed"
                                                >
                                                    <span className="text-purple-400 font-bold mt-0.5 shrink-0">•</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column: Core Coursework & Skills (5 cols) */}
                                <div className="lg:col-span-5 flex flex-col gap-6">
                                    {/* Core Subjects / Coursework */}
                                    <div className="bg-gray-800/40 border border-gray-800 rounded-2xl p-4 sm:p-5 education-card">
                                        <h4 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-indigo-400" />
                                            Core Subjects & Coursework
                                        </h4>
                                        <div className="flex flex-col gap-2">
                                            {selectedItem.coreCourses.map((course, cIdx) => (
                                                <div
                                                    key={cIdx}
                                                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-gray-900/60 border border-gray-800/80 px-3 py-1.5 rounded-lg"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                                                    <span className="font-medium">{course}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Core Skills & Technologies */}
                                    <div>
                                        <h4 className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <Award className="w-4 h-4 text-purple-400" />
                                            Core Competencies & Tools
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedItem.skills.map((skill, sIdx) => (
                                                <span
                                                    key={sIdx}
                                                    className="px-3 py-1.5 bg-gray-800/80 border border-gray-700/70 text-gray-300 text-xs font-semibold rounded-xl hover:border-purple-500/40 hover:text-purple-300 transition-colors shadow-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Education;
