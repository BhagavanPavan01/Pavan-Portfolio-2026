import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please provide your name, email, and a message.");
            return;
        }

        setIsSubmitting(true);

        // Format the message for WhatsApp URL encoding
        const phoneNumber = "919542377685";
        const textMessage = `Hello Bhagavan Pavan! 👋%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Subject:* ${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}%0A*Message:* ${encodeURIComponent(formData.message)}`;

        // WhatsApp API URL construction
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");

        // Clear the form and reset state
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-16 bg-transparent border-t border-gray-800 overflow-hidden relative">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center justify-center p-3 md:p-4 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl mb-6 group">
                        <Mail className="w-8 h-8 md:w-10 md:h-10 text-purple-400 group-hover:text-indigo-400 transition-colors" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
                        GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">TOUCH</span>
                    </h2>

                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6 mt-2"></div>

                    <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg font-medium leading-relaxed px-4">
                        Ready to start your next project? Let's work together to create something amazing.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm p-5 md:p-8 rounded-xl md:rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-colors">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Our Location</h4>
                                        <p className="text-gray-400">Srikakulam, Andhra Pradesh, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Phone Number</h4>
                                        <a href="tel:+919542377685" className="text-gray-400 hover:text-purple-400 transition-colors">+91 9542377685</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="text-white font-medium mb-1">Email Address</h4>
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bhagavanpavan999@gmail.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors break-all whitespace-normal pr-2 block">bhagavanpavan999@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex-[1.5]"
                    >
                        <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm p-5 md:p-8 rounded-xl md:rounded-2xl border border-gray-700/50 flex flex-col gap-4 sm:gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div className="flex flex-col gap-1.5 md:gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter Your Name"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5 md:gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="name@example.com"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`mt-2 w-full py-3.5 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform ${isSubmitting ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'}`}
                            >
                                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
