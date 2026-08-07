import React from 'react';
import { Terminal, MapPin, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-gray-950/80 backdrop-blur-xl pt-24 pb-12 border-t border-gray-900/80 overflow-hidden">
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"></div>

            {/* Background ambient light */}
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 lg:gap-12 mb-16">

                    {/* Column 1: Brand & Logo (Takes exactly 1/5 width on Desktop) */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-start group">
                        {/* Massive Circular Logo */}
                        <a href="#home" className="relative flex items-center justify-center w-32 h-32 md:w-full md:aspect-square max-w-[160px] rounded-full border border-gray-800 bg-gray-900/50 p-2 shadow-[0_0_30px_rgba(124,58,237,0.1)] hover:shadow-[0_0_50px_rgba(124,58,237,0.3)] transition-all duration-500 mb-6 group/logo">
                            {/* Rotating border effect */}
                            <div className="absolute inset-0 rounded-full border border-purple-500/0 group-hover/logo:border-purple-500/40 group-hover/logo:rotate-[180deg] transition-all duration-700"></div>

                            <div className="w-full h-full bg-gray-950 rounded-full border border-gray-700 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent z-10 pointer-events-none"></div>
                                <img
                                    src="https://res.cloudinary.com/qxw39tud/image/upload/v1785598604/Gemini_Generated_Image_wcb1alwcb1alwcb1_lff0we.png"
                                    alt="Bhagavan Pavan Logo"
                                    className="w-full h-full object-cover group-hover/logo:scale-110 transition-transform duration-500 relative z-0"
                                />
                            </div>
                        </a>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">Bhagavan Pavan</h3>
                            <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-3 py-1 shadow-inner">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span className="text-xs text-gray-300 font-medium">Available for work</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="md:col-span-1 flex flex-col justify-start mt-4 md:mt-0">
                        <h4 className="text-white font-bold mb-6 tracking-wide flex items-center gap-2 uppercase text-sm">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span> Sitemap
                        </h4>
                        <div className="flex flex-col gap-4">
                            {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((link) => (
                                <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-400 text-sm font-medium hover:text-white hover:translate-x-2 transition-all w-max flex items-center gap-1 group/link">
                                    <ArrowUpRight className="w-3 h-3 text-transparent group-hover/link:text-purple-400 transition-colors" />
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Services / External */}
                    <div className="md:col-span-1 flex flex-col justify-start mt-4 md:mt-0">
                        <h4 className="text-white font-bold mb-6 tracking-wide flex items-center gap-2 uppercase text-sm">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span> Platforms
                        </h4>
                        <div className="flex flex-col gap-4">
                            <a href="https://bp-creatives.netlify.app/" target="_blank" rel="noreferrer" className="text-gray-400 text-sm font-medium hover:text-indigo-300 hover:translate-x-2 transition-all w-max">Web Master</a>
                            <a href="https://bp-creatives.netlify.app/" target="_blank" rel="noreferrer" className="text-gray-400 text-sm font-medium hover:text-indigo-300 hover:translate-x-2 transition-all w-max">UI/UX Engine</a>
                            <a href="https://bpcreativestudio.netlify.app/" target="_blank" rel="noreferrer" className="text-gray-400 text-sm font-medium hover:text-indigo-300 hover:translate-x-2 transition-all w-max">Lens & Photo</a>
                            <a href="https://bpcreativestudio.netlify.app/" target="_blank" rel="noreferrer" className="text-gray-400 text-sm font-medium hover:text-indigo-300 hover:translate-x-2 transition-all w-max">Brand Architect</a>
                        </div>
                    </div>

                    {/* Column 4 & 5: New Interactive Contact CTA */}
                    <div className="md:col-span-2 flex flex-col justify-start mt-4 md:mt-0">
                        <h4 className="text-white font-bold mb-6 tracking-wide flex items-center gap-2 uppercase text-sm">
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span> Let's Collab
                        </h4>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Ready to build something extraordinary? I'm currently seeking new opportunities to leverage my full-stack and UI/UX expertise.
                            </p>
                            <div className="flex flex-col gap-4">
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=bhagavanpavan999@gmail.com&su=Portfolio%20Inquiry%20-%20Let's%20Connect!&body=Hi%20Pavan,%0A%0AI%20was%20looking%20at%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch%20regarding..."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 bg-gray-950 p-4 rounded-xl border border-gray-800 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all group/email"
                                >
                                    <div className="bg-gray-800 p-2 rounded-lg group-hover/email:bg-purple-900/30 transition-colors flex-shrink-0">
                                        <Mail className="w-5 h-5 text-gray-300 group-hover/email:text-purple-400" />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Drop a message</span>
                                        <span className="text-sm text-gray-200 font-bold group-hover/email:text-white truncate">bhagavanpavan999@gmail.com</span>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 bg-gray-950 p-4 rounded-xl border border-gray-800">
                                    <div className="bg-gray-800 p-2 rounded-lg">
                                        <MapPin className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Location</span>
                                        <span className="text-sm text-gray-200 font-bold">Andhra Pradesh, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom / Social Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-800 pt-8 pb-4">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-gray-600" />
                        <p className="text-gray-500 text-xs sm:text-sm font-medium">
                            &copy; {new Date().getFullYear()} Pavan Software Solutions. Rooted in code.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {[
                            { icon: FaGithub, href: "https://github.com/BhagavanPavan01", color: "hover:text-white" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/bhagavan-pavan-227857253", color: "hover:text-blue-400" },
                            { icon: FaTwitter, href: "#", color: "hover:text-cyan-400" },
                            { icon: FaInstagram, href: "#", color: "hover:text-pink-400" }
                        ].map((social, id) => {
                            const Icon = social.icon;
                            return (
                                <a key={id} href={social.href} className={`bg-gray-900 border border-gray-800 p-2.5 rounded-full text-gray-400 ${social.color} hover:border-gray-600 hover:scale-110 active:scale-95 transition-all shadow-sm`}>
                                    <Icon className="w-4 h-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
