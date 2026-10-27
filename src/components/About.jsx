import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Monitor,
    Server,
    Code2,
    Wrench,
    Camera,
    Mail,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    Layers,
    Cpu,
    ExternalLink
} from 'lucide-react';

const skillCategories = {
    frontend: {
        id: 'frontend',
        title: 'Frontend Development',
        subtitle: 'Interactive & Responsive Client-Side Engineering',
        icon: Monitor,
        skills: [
            { name: 'HTML5 & CSS3', level: 90 },
            { name: 'JavaScript / ES6+', level: 90 },
            { name: 'React.js & Vite', level: 85 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'Bootstrap', level: 80 }
        ]
    },
    backend: {
        id: 'backend',
        title: 'Backend Development',
        subtitle: 'Scalable APIs, Databases & Cloud Services',
        icon: Server,
        skills: [
            { name: 'Node.js & Express.js', level: 80 },
            { name: 'MongoDB & Mongoose', level: 80 },
            { name: 'REST APIs & JWT', level: 85 },
            { name: 'Socket.io', level: 75 },
            { name: 'Cloud Technologies (AWS)', level: 70 }
        ]
    },
    languages: {
        id: 'languages',
        title: 'Programming Core',
        subtitle: 'Algorithms, Data Structures & Core Logic',
        icon: Code2,
        skills: [
            { name: 'Python', level: 90 },
            { name: 'Java', level: 80 },
            { name: 'Data Structures and Algorithms', level: 85 },
            { name: 'C / C++', level: 75 },
            { name: 'SQL', level: 80 }
        ]
    },
    tools: {
        id: 'tools',
        title: 'Tools & Workflows',
        subtitle: 'Version Control, Testing & Developer Utilities',
        icon: Wrench,
        skills: [
            { name: 'Git & GitHub', level: 90 },
            { name: 'VS Code & Chrome DevTools', level: 90 },
            { name: 'Visual Arts & UI/UX', level: 85 },
            { name: 'Postman', level: 85 }
        ]
    }
};

const bentoHighlights = [
    {
        id: 'clean-code',
        number: '01',
        title: 'Clean Code',
        desc: 'Writing maintainable, robust scale-ready architecture.',
        icon: Code2,
        tag: 'Architecture',
        gradient: 'from-purple-500/20 to-indigo-500/20',
        borderColor: 'hover:border-purple-500/60',
        iconBg: 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]'
    },
    {
        id: 'modern-ui',
        number: '02',
        title: 'Modern UI/UX',
        desc: 'Designing visually stunning and highly responsive interfaces.',
        icon: Monitor,
        tag: 'Interface',
        gradient: 'from-indigo-500/20 to-cyan-500/20',
        borderColor: 'hover:border-indigo-500/60',
        iconBg: 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]'
    },
    {
        id: 'creative-arts',
        number: '03',
        title: 'Creative Arts',
        desc: 'Expertise in graphic design, photography & visual story craft.',
        icon: Camera,
        tag: 'Creative',
        gradient: 'from-fuchsia-500/20 to-pink-500/20',
        borderColor: 'hover:border-pink-500/60',
        iconBg: 'bg-pink-500/10 text-pink-400 group-hover:bg-pink-600 group-hover:text-white',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]'
    },
    {
        id: 'robust-backend',
        number: '04',
        title: 'Robust Backend',
        desc: 'Building secure and high-performance server-side APIs.',
        icon: Server,
        tag: 'Infrastructure',
        gradient: 'from-cyan-500/20 to-blue-500/20',
        borderColor: 'hover:border-cyan-500/60',
        iconBg: 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]'
    }
];

const About = () => {
    const [activeTab, setActiveTab] = useState('frontend');
    const [bentoOrder, setBentoOrder] = useState([0, 1, 2, 3]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            // Rotates clockwise in 2x2 grid: TL->TR, TR->BR, BR->BL, BL->TL
            setBentoOrder(prev => [prev[2], prev[0], prev[3], prev[1]]);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const getProficiencyLabel = (level) => {
        if (level >= 90) return 'Expert';
        if (level >= 85) return 'Advanced';
        if (level >= 80) return 'Skilled';
        return 'Proficient';
    };

    return (
        <section id="about" className="py-20 md:py-28 bg-transparent border-t border-gray-900 relative overflow-hidden">
            {/* Ambient Background Glow Orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        <span>Discover My Story</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                        ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">ME</span>
                    </h2>

                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 mx-auto rounded-full mt-4"></div>
                </motion.div>

                {/* Top Section: Bio Card (Left) & Bento Highlights (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-20 md:mb-28 max-w-6xl mx-auto">
                    {/* Left: Glassmorphic Bio Card (7 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-800 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300"
                    >
                        {/* Decorative subtle corner glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-600/15 via-indigo-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            {/* Status Indicator & Role Badge */}
                            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-gray-800/80">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span>Available for Opportunities</span>
                                </div>
                                <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">
                                    Full Stack & AI Engineer
                                </span>
                            </div>

                            {/* Headline */}
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
                                Bridging the Gap Between{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-300">
                                    Engineering
                                </span>{' '}
                                and{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
                                    Innovation.
                                </span>
                            </h3>

                            {/* Bio Paragraphs */}
                            <div className="space-y-4 text-gray-300 text-sm sm:text-base md:text-[16.5px] leading-relaxed">
                                <p>
                                    Hello! I'm <strong className="text-white font-bold">Bhagavan Pavan</strong>, a Full Stack Developer and MCA graduate passionate about building modern, scalable, and user-friendly web applications.
                                </p>

                                <p>
                                    I specialize in{' '}
                                    <span className="text-indigo-300 font-semibold bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                                        React.js, JavaScript, Node.js, Express.js, and MongoDB
                                    </span>
                                    , with experience in REST APIs, secure authentication, and full-stack development. I'm also interested in{' '}
                                    <span className="text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                                        AI, Machine Learning, Deep Learning, and Data Structures & Algorithms
                                    </span>
                                    .
                                </p>

                                <p>
                                    I've developed{' '}
                                    <strong className="text-white font-bold underline decoration-purple-500/60 decoration-2 underline-offset-4">
                                        DivTinder
                                    </strong>
                                    , a full-stack developer networking platform using the MERN stack, and worked on{' '}
                                    <strong className="text-white font-bold underline decoration-indigo-500/60 decoration-2 underline-offset-4">
                                        EDA-GNN
                                    </strong>
                                    , a separate research project focused on software defect prediction using Graph Neural Networks and adaptive feature selection.
                                </p>
                            </div>

                            {/* Key Highlights Pill Row */}
                            <div className="pt-2 flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-800/80 border border-gray-700/60 text-xs font-medium text-gray-300">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> MCA Graduate
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-800/80 border border-gray-700/60 text-xs font-medium text-gray-300">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> MERN Stack Specialist
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-800/80 border border-gray-700/60 text-xs font-medium text-gray-300">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> AI & GNN Research
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 relative z-10">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=bhagavanpavan999@gmail.com&su=Let's%20Collaborate!&body=Hi%20Bhagavan,%0A%0AI%20am%20interested%20in%20collaborating%20with%20you%20on%20a%20new%20project.%20Here%20are%20the%20details..."
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Let's Collaborate</span>
                            </a>

                            <a
                                href="#projects"
                                className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gray-800/90 hover:bg-gray-800 text-white text-sm sm:text-base font-bold border border-gray-700 hover:border-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
                            >
                                <span>View My IT Work</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Rotating 2x2 Bento Highlights Grid (5 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
                    >
                        {bentoOrder.map((contentIdx, slotIdx) => {
                            const card = bentoHighlights[contentIdx];
                            const IconComponent = card.icon;
                            // Stagger the right column downwards (Slots 1 & 3)
                            const slotClasses = ["", "lg:translate-y-6", "", "lg:translate-y-6"][slotIdx];

                            return (
                                <motion.div
                                    layout
                                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                    key={card.id}
                                    className={`p-5 sm:p-6 bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-800 transition-colors duration-300 flex flex-col justify-between group relative overflow-hidden ${card.borderColor} ${card.glowColor} ${slotClasses}`}
                                >
                                    {/* Ambient card background glow on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-inner ${card.iconBg}`}>
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-extrabold text-gray-500 tracking-wider group-hover:text-gray-300 transition-colors">
                                                {card.number}
                                            </span>
                                        </div>

                                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                                            {card.title}
                                        </h4>

                                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>

                                    <div className="relative z-10 pt-4 mt-4 border-t border-gray-800/60 flex items-center justify-between">
                                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                                            {card.tag}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Bottom Section: Technical Skills Hub */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Skills Sub-header */}
                    <div className="text-center mb-10 md:mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
                            <Layers className="w-3.5 h-3.5 text-indigo-400" />
                            <span>Stack & Proficiency</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                            Technical{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                                Skills
                            </span>
                        </h3>
                    </div>

                    {/* Responsive Category Selector Tabs */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                        {Object.values(skillCategories).map((category) => {
                            const TabIcon = category.icon;
                            const isActive = activeTab === category.id;

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`relative p-3.5 sm:p-4 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 text-left group overflow-hidden ${
                                        isActive
                                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(124,58,237,0.35)] border border-purple-400/50 scale-[1.02]'
                                            : 'bg-gray-900/50 hover:bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
                                    }`}
                                >
                                    <div
                                        className={`p-2.5 rounded-xl transition-all duration-300 flex-shrink-0 ${
                                            isActive
                                                ? 'bg-white/20 text-white shadow-sm'
                                                : 'bg-gray-800 text-purple-400 group-hover:bg-purple-600 group-hover:text-white'
                                        }`}
                                    >
                                        <TabIcon className="w-5 h-5" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="text-xs sm:text-sm font-bold truncate tracking-tight">
                                            {category.title}
                                        </div>
                                        <div
                                            className={`text-[11px] font-medium transition-colors ${
                                                isActive ? 'text-purple-100' : 'text-gray-500'
                                            }`}
                                        >
                                            {category.skills.length} Skills
                                        </div>
                                    </div>

                                    {/* Active animated indicator pill */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-1 bg-white/70"
                                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Skills Display Console */}
                    <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-800 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden min-h-[420px]">
                        {/* Background radial soft lights */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

                        {/* Category Heading & Subtitle */}
                        <div className="relative z-10 pb-6 mb-8 border-b border-gray-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3.5">
                                <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-400">
                                    {React.createElement(skillCategories[activeTab].icon, { className: 'w-6 h-6' })}
                                </div>
                                <div>
                                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                        {skillCategories[activeTab].title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-400">
                                        {skillCategories[activeTab].subtitle}
                                    </p>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-full bg-gray-800/80 border border-gray-700/60 text-xs font-semibold text-gray-300">
                                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                                <span>{skillCategories[activeTab].skills.length} Core Technologies</span>
                            </div>
                        </div>

                        {/* Animated Skills Grid */}
                        <div className="relative z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
                                >
                                    {skillCategories[activeTab].skills.map((skill, index) => {
                                        const label = getProficiencyLabel(skill.level);
                                        return (
                                            <div
                                                key={skill.name}
                                                className="p-4 sm:p-5 rounded-2xl bg-gray-950/40 border border-gray-800/80 hover:border-purple-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/5"
                                            >
                                                {/* Skill Header */}
                                                <div className="flex items-center justify-between gap-2 mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-purple-400 group-hover:scale-125 transition-transform" />
                                                        <span className="text-gray-100 font-bold text-sm sm:text-base tracking-wide group-hover:text-white transition-colors">
                                                            {skill.name}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-2 py-0.5 rounded bg-gray-900 border border-gray-800">
                                                            {label}
                                                        </span>
                                                        <span className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Skill Progress Bar */}
                                                <div className="w-full bg-gray-900 rounded-full h-3 overflow-hidden p-0.5 border border-gray-800 shadow-inner">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{
                                                            duration: 0.9,
                                                            delay: 0.05 * index,
                                                            ease: [0.16, 1, 0.3, 1]
                                                        }}
                                                        className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full relative shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                                                    >
                                                        {/* Glossy top shine */}
                                                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
