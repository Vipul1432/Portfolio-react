import { useTypingEffect } from '../hooks/useTypingEffect';
import { roles, socialLinks } from '../data/portfolioData';
import { Download, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';

const Home = () => {
    const displayedRole = useTypingEffect(roles);

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
        <div className="home-container min-h-screen flex flex-col items-center justify-center bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary p-4 md:p-8 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto w-full">
                {/* Text Content Area */}
                <div className="text-content text-center md:text-left md:w-1/2 lg:w-3/5 space-y-6 md:pr-12 animate-fadeInUp">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        Hello, I'm <span className="text-brand-accent">Vipul Kumar</span>
                    </h1>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-light-secondary dark:text-dark-secondary">
                        I'm a <span className="typed-text">{displayedRole}</span>
                        <span className="cursor text-brand-accent">|</span>
                    </h2>

                    <div className="location flex items-center justify-center md:justify-start text-light-secondary dark:text-dark-secondary">
                        <MapPin className="mr-2" size={20} />
                        <span>Vadodara, Gujarat, India</span>
                    </div>

                    <p className="text-lg md:text-xl text-light-secondary dark:text-dark-secondary leading-relaxed">
                        Passionate about crafting exceptional digital experiences with cutting-edge
                        technologies. Specialized in building scalable web applications with Angular and ASP.NET.
                    </p>

                    {/* Action Buttons */}
                    <div className="actions flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                        <button
                            onClick={downloadResume}
                            className="bg-brand-accent text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-brand-accent-hover hover:shadow-glow transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-50 flex items-center justify-center"
                        >
                            <Download className="mr-2" size={20} />
                            Download CV
                        </button>
                        <button
                            onClick={scrollToContact}
                            className="bg-light-surface dark:bg-dark-surface text-light-primary dark:text-dark-primary border border-light-border dark:border-dark-border font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg hover:border-brand-accent transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-50 flex items-center justify-center"
                        >
                            <Mail className="mr-2" size={20} />
                            Get in Touch
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="social-links mt-8 flex space-x-6 justify-center md:justify-start">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light-secondary dark:text-dark-secondary hover:text-brand-accent transition duration-300 transform hover:scale-110"
                                aria-label={link.label}
                            >
                                {getIcon(link.icon)}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Image Content Area */}
                <div className="image-content md:w-1/2 lg:w-2/5 mt-10 md:mt-0 flex justify-center animate-fadeInUp">
                    <div className="profile-image-wrapper relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <img
                            src="/assets/images/profile/Vipul2.jpg"
                            alt="Vipul Kumar"
                            className="rounded-full object-cover w-full h-full shadow-2xl border-4 border-brand-accent animate-float"
                        />
                        {/* Background glow effect */}
                        <div className="absolute inset-0 rounded-full border-4 border-brand-accent opacity-50 -z-10 transform scale-105 animate-pulse-slow"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 text-light-secondary dark:text-dark-secondary hover:text-brand-accent cursor-pointer hidden md:flex flex-col items-center"
                onClick={scrollDown}
            >
                <span className="text-sm">Scroll Down</span>
                <ChevronDown className="mt-1 animate-bounce" size={24} />
            </div>
        </div>
    );
};

export default Home;
