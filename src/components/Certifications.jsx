import React from 'react';
import { motion } from 'framer-motion';
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2">{cert.name}</h3>
                                    <p className="text-sm text-gray-500 font-medium mt-1">{cert.provider}</p>
                                </div>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 flex items-center justify-between px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors border border-gray-700"
                            >
                                <span>View Credential</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
