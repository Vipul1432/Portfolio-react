import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for scroll-based navigation with snap behavior
 * @param {React.RefObject} containerRef - Reference to the scrollable container
 * @returns {Object} - { activeSection, scrollToSection }
 */
export const useScrollSnap = (containerRef) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const container = containerRef?.current;
        if (!container) return;

        const handleScroll = () => {
            let minDistance = Infinity;
            let activeSectionId = '';

            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const distance = Math.abs(rect.top);

                if (distance < minDistance) {
                    minDistance = distance;
                    activeSectionId = section.id;
                }
            });

            if (activeSectionId && activeSectionId !== activeSection) {
                setActiveSection(activeSectionId);
                // Update URL hash without scrolling
                window.history.replaceState(null, '', `#${activeSectionId}`);
            }
        };

        container.addEventListener('scroll', handleScroll);

        // Check initial hash
        const hash = window.location.hash.slice(1);
        if (hash) {
            setActiveSection(hash);
        }

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [containerRef, activeSection]);

    const scrollToSection = useCallback((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    }, []);

    return { activeSection, scrollToSection };
};
