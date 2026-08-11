import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
    { name: "MERN Stack", provider: "Council for Skills and Competencies", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1753977217/BHAGAVAN_PAVAN_laytdz.png" },
    { name: "GenAI Hackathon", provider: "JNTU-GV & GenAIversity", link: "https://res.cloudinary.com/qxw39tud/image/upload/v1786376723/Pavan_GenAi_Hackathon_cert_page-0001_xewgyf.jpg" },
    { name: "OpenAI Codex Hackathon", provider: "OpenAI × NamasteDev", link: "https://res.cloudinary.com/qxw39tud/image/upload/v1786285067/Namaste_Dev_Hackathon_c0smmi.png" },
    { name: "Python Basics", provider: "Swayam", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1742043975/202200000661_swayam_cec22-cs20_pages-to-jpg-0001_vnkjoy.jpg" },
    { name: "AI-ML Virtual Internship", provider: "EduSkills", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1742044102/Bhagavan_Pavan_892947_page-0001_ar8inl.jpg" },
    { name: "Programming with Generative AI", provider: "Swayam NPTEL", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1770384247/Programming_with_Generative_AI_1__page-0001_dagwhs.jpg" },
    { name: "Introduction to Industry 4.0 and Industrial IOT", provider: "Swayam NPTEL", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1770384245/Introduction_To_Industry_4.0_And_Industrial_Internet_Of_Things_page-0001_ypcsmn.jpg" },
    { name: "AWS Cloud Foundations", provider: "AWS Academy", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1742044142/AWS_Academy_Cloud_Foundations_Badge20221027-46-f1o7yf_page-0001_ksbixc.jpg" },
    { name: "AI With Python Internship", provider: "Languify", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1742044184/Bhagavan_Jul_2022_Coincent_participation_25666_page-0001_llpsog.jpg" },
    { name: "Basics of Python", provider: "Infosys Springboard", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1743087713/Infosys_springboard_python_certificate_page-0001_vsfr5q.jpg" },
    { name: "HTML - 5", provider: "Infosys Springboard", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1744982107/HTML-5_page-0001_tspjkr.jpg" },
    { name: "CSS", provider: "Infosys Springboard", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1744982124/CSS_Web_Design_page-0001_etagmy.jpg" },
    { name: "Bootstrap", provider: "Infosys Springboard", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1744982136/Creating_Responsive_Web_Pages_using_Bootstrap_4_page-0001_xps0um.jpg" },
    { name: "JavaScript", provider: "Infosys Springboard", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1749744346/JavaScript_page-0001_voyi6e.jpg" },
    { name: "Java", provider: "Infosys Springboard", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1749744644/Java_page-0001_uyjzoz.jpg" },
    { name: "Cisco Networking Academy", provider: "Cisco", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1742044356/Pavan_Cico_main_certificate_page-0001_dq6c4h.jpg" },
    { name: "Python Programming", provider: "Pantech e-Learning", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1742047113/Pavan_PS-APSSDC-PYMC-962_page-0001_fbx5rx.jpg" },
    { name: "Web Developer Intern", provider: "SaiKet Systems", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1770384753/Saiket_systems_Internship_certficate_page-0001_kzp4ph.jpg" }
];

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedCerts = showAll ? certs : certs.slice(0, 3);

    return (
        <section id="certifications" className="py-16 bg-transparent border-t border-gray-900 overflow-hidden relative" style={{ zIndex: 10 }}>
            <div className="container mx-auto px-6 md:px-12 relative" style={{ zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Licenses & <span className="text-indigo-400">Certifications</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Added max-w-6xl to reduce card widths globally and increased gap to gap-10 md:gap-12 */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    <AnimatePresence>
                        {displayedCerts.map((cert) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                whileHover={{ y: -4, scale: 1.015 }}
                                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                                key={cert.name}
                                onClick={() => window.open(cert.link, '_blank')}
                                className="cursor-pointer bg-gray-900/60 backdrop-blur-md border border-gray-800 hover:border-indigo-500/60 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-[0_10px_40px_rgba(99,102,241,0.25)] relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 20 }}></div>

                                <div className="h-56 relative overflow-hidden bg-gray-950 border-b border-gray-800/50 p-2">
                                    <motion.img
                                        src={cert.link}
                                        alt={cert.name}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-5 relative flex-1 flex flex-col bg-gray-900/80" style={{ zIndex: 10 }}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 leading-tight">{cert.name}</h3>
                                            <p className="text-xs md:text-sm text-gray-400 font-medium mt-1">{cert.provider}</p>
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-gray-800">
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-full flex items-center justify-center gap-2 py-2.5 bg-indigo-500/10 rounded-lg text-sm font-semibold text-indigo-400 hover:text-white hover:bg-indigo-500 transition-colors border border-indigo-500/30 hover:border-indigo-500"
                                        >
                                            <Award className="w-4 h-4" />
                                            <span>View Certificate</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {certs.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mt-12 relative" style={{ zIndex: 10 }}
                    >
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gray-900/50 backdrop-blur-md border-2 border-indigo-500/50 text-indigo-300 font-bold hover:bg-indigo-500 hover:text-white hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all cursor-pointer"
                        >
                            {showAll ? 'Show Less' : 'View All Certificates'}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
