import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900 border-b border-gray-800 shadow-lg ${isScrolled
                ? 'py-5'
                : 'py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2 group">
                    <Code2 className="w-8 h-8 text-purple-500 group-hover:text-purple-400 transition-colors" />
                    <span className="text-xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                        Bhagavan Pavan
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className="text-gray-300 hover:text-white font-medium transition-colors hover:scale-105 transform inline-block"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1DhMEhOwYy3LEk6C9jR_niJCpS98mX_ah/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Download CV
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
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
                                    className="text-gray-300 hover:text-purple-400 font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://drive.google.com/file/d/1DhMEhOwYy3LEk6C9jR_niJCpS98mX_ah/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-2.5 mt-2 text-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
