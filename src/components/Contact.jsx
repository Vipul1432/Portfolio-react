import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the form data to your backend
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
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
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-brand-accent">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
                    <p className="mt-6 text-base sm:text-lg text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto px-4">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-brand-accent mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 sm:space-x-4">
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
                                </div>
                                <div className="flex items-center space-x-3 sm:space-x-4">
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
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-brand-accent mb-6">
                                Follow Me
                            </h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-light-surface dark:bg-dark-surface p-3 sm:p-4 rounded-lg hover:bg-brand-accent hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                                        aria-label={link.label}
                                    >
                                        {getIcon(link.icon)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-light-surface dark:bg-dark-surface p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-xs sm:text-sm font-medium mb-2 text-light-primary dark:text-dark-primary"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-primary dark:text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs sm:text-sm font-medium mb-2 text-light-primary dark:text-dark-primary"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-primary dark:text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-xs sm:text-sm font-medium mb-2 text-light-primary dark:text-dark-primary"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-primary dark:text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-accent text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg shadow-lg hover:bg-brand-accent-hover hover:shadow-glow transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-50 flex items-center justify-center"
                            >
                                <Send size={18} className="mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
