import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
                ? 'py-3'
                : 'py-4'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-3 group">
                    <img
                        src="https://res.cloudinary.com/qxw39tud/image/upload/v1785342244/1767115738588png_qasauv.png"
                        alt="Bhagavan Pavan Logo"
                        className="w-10 h-10 rounded-full border-2 border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)] group-hover:border-purple-400 group-hover:scale-110 transition-all duration-300 object-cover"
                    />
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
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
