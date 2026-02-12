import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { roles, socialLinks } from '../data/portfolioData';
import { Download, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import FloatingShapes from './FloatingShapes';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '../utils/animations';

const Home = () => {
    const downloadResume = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1fS5UKj1jSkHyerZXmtj0J1MUnAl0q4NT/view?usp=sharing';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Vipul_Kumar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollDown = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Github':
                return <Github className="text-3xl" />;
            case 'Linkedin':
                return <Linkedin className="text-3xl" />;
            case 'Mail':
                return <Mail className="text-3xl" />;
            default:
                return null;
        }
    };

    return (
        <div className="home-container relative min-h-screen flex flex-col items-center justify-center bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary p-4 md:p-8 overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Floating Shapes */}
            <FloatingShapes />

            <motion.div
                className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto w-full relative z-10"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {/* Text Content Area */}
                <motion.div
                    className="text-content text-center md:text-left md:w-1/2 lg:w-3/5 space-y-6 md:pr-12"
                    variants={staggerItem}
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                        variants={fadeInUp}
                    >
                        Hello, I'm <span className="gradient-text">Vipul Kumar</span>
                    </motion.h1>

                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl text-light-secondary dark:text-dark-secondary"
                        variants={fadeInUp}
                    >
                        I'm a{' '}
                        <TypeAnimation
                            sequence={roles.flatMap((role) => [role, 2000])}
                            wrapper="span"
                            speed={50}
                            className="text-brand-accent font-semibold"
                            repeat={Infinity}
                        />
                    </motion.h2>

                    <motion.div
                        className="location flex items-center justify-center md:justify-start text-light-secondary dark:text-dark-secondary"
                        variants={fadeInUp}
                    >
                        <MapPin className="mr-2" size={20} />
                        <span>Vadodara, Gujarat, India</span>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl text-light-secondary dark:text-dark-secondary leading-relaxed"
                        variants={fadeInUp}
                    >
                        Passionate about crafting exceptional digital experiences with cutting-edge
                        technologies. Specialized in building scalable web applications with Angular and ASP.NET.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        className="actions flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
                        variants={fadeInUp}
                    >
                        <motion.button
                            onClick={downloadResume}
                            className="bg-brand-accent text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 ease-in-out flex items-center justify-center"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 123, 255, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="mr-2" size={20} />
                            Download CV
                        </motion.button>
                        <motion.button
                            onClick={scrollToContact}
                            className="bg-light-surface dark:bg-dark-surface text-light-primary dark:text-dark-primary border border-light-border dark:border-dark-border font-semibold px-8 py-3 rounded-lg shadow-lg hover:border-brand-accent transition-all duration-300 ease-in-out flex items-center justify-center"
                            whileHover={{ scale: 1.05, borderColor: '#007BFF' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="mr-2" size={20} />
                            Get in Touch
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="social-links mt-8 flex space-x-6 justify-center md:justify-start"
                        variants={fadeInUp}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light-secondary dark:text-dark-secondary hover:text-brand-accent transition duration-300"
                                aria-label={link.label}
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {getIcon(link.icon)}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Image Content Area */}
                <motion.div
                    className="image-content md:w-1/2 lg:w-2/5 mt-10 md:mt-0 flex justify-center"
                    variants={scaleIn}
                >
                    <motion.div
                        className="profile-image-wrapper relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <motion.img
                            src="/assets/images/profile/Vipul2.jpg"
                            alt="Vipul Kumar"
                            className="rounded-full object-cover w-full h-full shadow-2xl border-4 border-brand-accent"
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        />
                        {/* Background glow effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-4 border-brand-accent opacity-50 -z-10 transform scale-105"
                            animate={{
                                scale: [1.05, 1.15, 1.05],
                                opacity: [0.5, 0.3, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 text-light-secondary dark:text-dark-secondary hover:text-brand-accent cursor-pointer hidden md:flex flex-col items-center"
                onClick={scrollDown}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <span className="text-sm">Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;

