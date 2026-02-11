import { useState, useEffect } from 'react';

/**
 * Custom hook for typing animation effect
 * @param {string[]} texts - Array of strings to cycle through
 * @param {number} typingSpeed - Speed of typing in ms (default: 100)
 * @param {number} deletingSpeed - Speed of deleting in ms (default: 50)
 * @param {number} pauseTime - Pause time after typing completes (default: 2000)
 * @returns {string} - Currently displayed text
 */
export const useTypingEffect = (
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000
) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!texts || texts.length === 0) return;

        const currentText = texts[currentIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (charIndex < currentText.length) {
                    setDisplayedText(currentText.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Finished typing, start deleting after pause
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting
                if (charIndex > 0) {
                    setDisplayedText(currentText.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Finished deleting, move to next text
                    setIsDeleting(false);
                    setCurrentIndex((currentIndex + 1) % texts.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [texts, currentIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseTime]);

    return displayedText;
};
