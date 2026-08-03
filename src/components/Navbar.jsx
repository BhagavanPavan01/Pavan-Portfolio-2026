import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Theme state
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme toggle effect
    useEffect(() => {
        if (!isDarkMode) {
            document.documentElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900 border-b border-gray-800 shadow-lg ${isScrolled
                ? 'py-3'
                : 'py-4'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:border-purple-400 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300 overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/qxw39tud/image/upload/v1785598604/Gemini_Generated_Image_wcb1alwcb1alwcb1_lff0we.png"
                            alt="Bhagavan Pavan Logo"
                            className="w-full h-full object-cover rounded-full group-hover:opacity-90 transition-opacity"
                        />
                    </div>
                    <span className="text-2xl font-black font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 tracking-tight">
                        Bhagavan Pavan
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className="text-gray-300 hover:text-white font-medium transition-colors hover:scale-105 transform inline-block"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Theme Toggle Button (Desktop) */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 ml-2 rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-purple-400 transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    >
                        {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-400" />}
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-gray-300 hover:text-white p-1"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-900 border-b border-gray-800"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-purple-400 font-medium transition-colors border-b border-gray-800 pb-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                            {/* Theme Toggle Button inside Mobile Menu */}
                            <button
                                onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}
                                className="flex items-center justify-between w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:text-white transition-all mt-2"
                            >
                                <span className="font-medium">{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-400" />}
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header >
    );
};

export default Navbar;
