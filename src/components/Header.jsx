import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ navItems, activeSection, scrollToSection, isDarkMode, toggleTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (path) => {
        scrollToSection(path);
        setIsMobileMenuOpen(false);
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.2 },
        },
    };

    const mobileItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.header
            className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md text-gray-900 dark:text-dark-primary p-4 shadow-lg border-b border-gray-200 dark:border-dark-border sticky top-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <motion.div
                    className="text-xl font-bold gradient-text"
                    whileHover={{ scale: 1.05 }}
                >
                    Vipul Kumar
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-2">
                    {navItems.map((item) => (
                        <motion.button
                            key={item.path}
                            onClick={() => scrollToSection(item.path)}
                            className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium relative overflow-hidden ${activeSection === item.path
                                ? 'bg-brand-accent text-white'
                                : 'text-gray-700 dark:text-dark-primary hover:text-brand-accent dark:hover:text-brand-accent'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </nav>

                <div className="flex items-center space-x-2">
                    {/* Theme Toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        id="theme-toggle-button"
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-accent-bg text-gray-600 dark:text-dark-secondary hover:text-brand-accent transition-all duration-300"
                        aria-label="Toggle theme"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </motion.button>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-accent-bg text-gray-600 dark:text-dark-secondary hover:text-brand-accent transition-all duration-300"
                        aria-label="Toggle menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="md:hidden mt-4 pb-4 space-y-2 overflow-hidden"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {navItems.map((item) => (
                            <motion.button
                                key={item.path}
                                onClick={() => handleNavClick(item.path)}
                                className={`w-full text-left px-4 py-3 rounded-lg cursor-pointer text-sm font-medium ${activeSection === item.path
                                    ? 'bg-brand-accent text-white'
                                    : 'text-gray-700 dark:text-dark-primary hover:bg-brand-accent hover:text-white'
                                    }`}
                                variants={mobileItemVariants}
                                whileTap={{ scale: 0.98 }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;

