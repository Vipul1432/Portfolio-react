import { useState, useEffect } from 'react';

/**
 * Custom hook for theme management (dark/light mode)
 * @returns {Object} - { isDarkMode, toggleTheme }
 */
export const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // Fall back to system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        // Apply theme class to document element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Save to localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return { isDarkMode, toggleTheme };
};
