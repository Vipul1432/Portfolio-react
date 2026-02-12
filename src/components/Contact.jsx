import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Clear status when user starts typing
        if (status.message) setStatus({ type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Replace these with your EmailJS credentials
            // Get them from: https://dashboard.emailjs.com/
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
                {
                    name: formData.name,
                    message: formData.message,
                    email: formData.email,
                    time: new Date().toLocaleString('en-US', {
                        dateStyle: 'medium',
                        timeStyle: 'short'
                    }),
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
            );

            if (result.text === 'OK') {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!',
                });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or email me directly.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Github':
                return <Github size={24} />;
            case 'Linkedin':
                return <Linkedin size={24} />;
            case 'Mail':
                return <Mail size={24} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary p-4 md:p-8">
            <div className="max-w-screen-xl mx-auto w-full">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-brand-accent mx-auto"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <p className="mt-6 text-base sm:text-lg text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto px-4">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 gap-8 md:gap-12"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {/* Contact Info */}
                    <motion.div className="space-y-8" variants={staggerItem}>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-brand-accent mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <motion.div
                                    className="flex items-center space-x-3 sm:space-x-4"
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-brand-accent bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                                        <Mail className="text-brand-accent" size={20} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs sm:text-sm text-light-secondary dark:text-dark-secondary">
                                            Email
                                        </p>
                                        <a
                                            href={`mailto:${personalInfo.email}`}
                                            className="text-sm sm:text-base text-light-primary dark:text-dark-primary hover:text-brand-accent transition-colors break-all"
                                        >
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-center space-x-3 sm:space-x-4"
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-brand-accent bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                                        <MapPin className="text-brand-accent" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm text-light-secondary dark:text-dark-secondary">
                                            Location
                                        </p>
                                        <p className="text-sm sm:text-base text-light-primary dark:text-dark-primary">
                                            {personalInfo.location}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-brand-accent mb-6">
                                Follow Me
                            </h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-light-surface dark:bg-dark-surface p-3 sm:p-4 rounded-lg hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-md"
                                        aria-label={link.label}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {getIcon(link.icon)}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-light-surface dark:bg-dark-surface p-4 sm:p-6 md:p-8 rounded-lg shadow-lg"
                        variants={staggerItem}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <motion.div variants={fadeInUp}>
                                <label
                                    htmlFor="name"
                                    className="block text-xs sm:text-sm font-medium mb-2 text-light-primary dark:text-dark-primary"
                                >
                                    Your Name
                                </label>
                                <motion.input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-primary dark:text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                                    placeholder="John Doe"
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <label
                                    htmlFor="email"
                                    className="block text-xs sm:text-sm font-medium mb-2 text-light-primary dark:text-dark-primary"
                                >
                                    Your Email
                                </label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-primary dark:text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                                    placeholder="john@example.com"
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <label
                                    htmlFor="message"
                                    className="block text-xs sm:text-sm font-medium mb-2 text-light-primary dark:text-dark-primary"
                                >
                                    Message
                                </label>
                                <motion.textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-primary dark:text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-none"
                                    placeholder="Your message here..."
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            {/* Status Message */}
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-center space-x-2 p-3 rounded-lg ${status.type === 'success'
                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                                        }`}
                                >
                                    {status.type === 'success' ? (
                                        <CheckCircle size={20} />
                                    ) : (
                                        <AlertCircle size={20} />
                                    )}
                                    <p className="text-sm">{status.message}</p>
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-brand-accent text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-50 flex items-center justify-center ${isSubmitting
                                    ? 'opacity-70 cursor-not-allowed'
                                    : 'hover:bg-brand-accent-hover hover:shadow-glow transform hover:scale-105'
                                    }`}
                                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} className="mr-2" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
