import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
    { name: "MERN Stack", provider: "Council for Skills and Competencies", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1753977217/BHAGAVAN_PAVAN_laytdz.png" },
    { name: "Python Basics", provider: "Swayam", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1742043975/202200000661_swayam_cec22-cs20_pages-to-jpg-0001_vnkjoy.jpg" },
    { name: "AI-ML Virtual Internship", provider: "EduSkills", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1742044102/Bhagavan_Pavan_892947_page-0001_ar8inl.jpg" },
    { name: "Generative AI", provider: "Swayam NPTEL", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1770384247/Programming_with_Generative_AI_1__page-0001_dagwhs.jpg" },
    { name: "Industry 4.0 and IOT", provider: "Swayam NPTEL", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1770384245/Introduction_To_Industry_4.0_And_Industrial_Internet_Of_Things_page-0001_ypcsmn.jpg" },
    { name: "AWS Cloud Foundations", provider: "AWS Academy", link: "https://res.cloudinary.com/decaajhdd/image/upload/v1742044142/AWS_Academy_Cloud_Foundations_Badge20221027-46-f1o7yf_page-0001_ksbixc.jpg" },
];

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedCerts = showAll ? certs : certs.slice(0, 3);

    return (
        <section id="certifications" className="py-24 bg-transparent border-t border-gray-900">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold text-white mb-4">Licenses & <span className="text-indigo-400">Certifications</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {displayedCerts.map((cert, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                                key={cert.name}
                                onClick={() => window.open(cert.link, '_blank')}
                                className="cursor-pointer group bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-500/10 transition-all"
                            >
                                <div className="h-40 bg-gray-800 border-b border-gray-700 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={cert.link}
                                        alt={cert.name}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                                </div>
                                <div className="p-6 relative z-10 bg-gray-900 flex-1 flex flex-col">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors shrink-0">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2">{cert.name}</h3>
                                            <p className="text-sm text-gray-400 font-medium mt-1">{cert.provider}</p>
                                        </div>
                                    </div>

                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="mt-auto flex items-center justify-between px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-indigo-600 transition-colors border border-gray-700 hover:border-indigo-500"
                                    >
                                        <span>View Credential</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {certs.length > 3 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-indigo-600 text-indigo-400 font-bold hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
                        >
                            {showAll ? 'Show Less' : 'View All Certificates'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
