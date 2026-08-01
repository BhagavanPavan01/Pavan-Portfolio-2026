import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-transparent pt-16 pb-8 border-t border-gray-900 border-opacity-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 border-b border-gray-800 pb-12">

                    <div className="flex flex-col items-center md:items-start max-w-xs">
                        <a href="#home" className="flex items-center gap-2 mb-4">
                            <Code2 className="w-8 h-8 text-purple-500" />
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                                B.P Creative
                            </span>
                        </a>
                        <p className="text-gray-400 text-center md:text-left text-sm">
                            Creating beautiful, functional digital experiences with a focus on user-centered design and cutting-edge development.
                        </p>
                    </div>

                    <div className="flex gap-8 md:gap-16">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold mb-2">Quick Links</h4>
                            <a href="#home" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">Home</a>
                            <a href="#about" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">About</a>
                            <a href="#projects" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">Projects</a>
                            <a href="#contact" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">Contact</a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold mb-2">Services</h4>
                            <a href="https://bp-creatives.netlify.app/" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">Web Development</a>
                            <a href="https://bp-creatives.netlify.app/" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">UI/UX Design</a>
                            <a href="https://bpcreativestudio.netlify.app/" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">Photography</a>
                            <a href="https://bpcreativestudio.netlify.app/" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">Branding</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Bhagavan Pavan. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
