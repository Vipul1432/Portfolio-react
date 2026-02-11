import { Sun, Moon } from 'lucide-react';

const Header = ({ navItems, activeSection, scrollToSection, isDarkMode, toggleTheme }) => {
    return (
        <header className="bg-light-surface dark:bg-dark-surface text-light-primary dark:text-dark-primary p-4 shadow-lg border-b border-light-border dark:border-dark-border sticky top-0 z-50 flex justify-between items-center backdrop-blur-md bg-opacity-90">
            <div className="text-xl font-bold text-brand-accent">Vipul Kumar</div>

            <nav className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                    <button
                        key={item.path}
                        onClick={() => scrollToSection(item.path)}
                        className={`px-4 py-2 hover:bg-brand-accent hover:text-white rounded-lg cursor-pointer transition-all duration-300 text-sm font-medium ${activeSection === item.path
                                ? 'bg-brand-accent text-white'
                                : 'text-light-primary dark:text-dark-primary'
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>

            <div className="flex items-center space-x-2">
                <button
                    onClick={toggleTheme}
                    id="theme-toggle-button"
                    className="p-2 rounded-lg hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg text-light-secondary dark:text-dark-secondary hover:text-brand-accent transition-all duration-300"
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
