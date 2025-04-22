import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const PortfolioFooter: any = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { icon: <FiGithub />, url: 'https://github.com/relativity-codes', name: 'GitHub' },
        { icon: <FiLinkedin />, url: 'https://linkedin.com/in/ukweheverest', name: 'LinkedIn' },
        { icon: <FiMail />, url: 'mailto:ukweheverest@gmail.com', name: 'Email' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[rgba(0,0,0,0.5)] px-4 pb-8 pt-16 text-white md:px-32">
            <div className="mx-auto max-w-7xl">
                {/* Main Footer Content */}
                <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* About Section */}
                    <div className="md:col-span-2">
                        <motion.h3
                            className="mb-4 text-xl font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Let's Build Something Amazing
                        </motion.h3>
                        <motion.p
                            className="font-thin leading-relaxed text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            I'm passionate about creating beautiful, functional digital experiences.
                            Whether you have a project in mind or just want to connect, I'd love to hear from you.
                        </motion.p>
                    </div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-blue-200 transition-colors hover:text-[#7c3c8e]"
                                    >
                                        <span className="text-[#C778DD]">#</span>{item}
                                    </a>
                                </li>
                            ))}
                        </ul> */}
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="mb-4 text-lg font-semibold">Connect</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-white transition-colors hover:text-[#7c3c8e]"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <div className="mt-4">
                            <a
                                href="mailto:ukweheverest@gmail.com"
                                className="text-white transition-colors hover:text-[#7c3c8e]"
                            >
                                ukweheverest@gmail.com
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-[#7c3c8e]"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        &copy; {currentYear} Ukweh C. Everest. All rights reserved.
                    </motion.p>

                    <motion.button
                        onClick={scrollToTop}
                        className="mt-4 flex items-center text-white transition-colors hover:text-[#7c3c8e] md:mt-0"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        aria-label="Back to top"
                    >
                        <FiArrowUp className="mr-2" /> Back to Top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default PortfolioFooter;