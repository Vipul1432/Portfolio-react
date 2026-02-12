import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState('default');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if device has a mouse (not touch-only)
        const hasMousePointer = window.matchMedia('(pointer: fine)').matches;
        if (!hasMousePointer) return;

        setIsVisible(true);

        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                setCursorVariant('hover');
            }
        };

        const handleMouseLeave = () => {
            setCursorVariant('default');
        };

        window.addEventListener('mousemove', mouseMove);
        document.querySelectorAll('a, button').forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            document.querySelectorAll('a, button').forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    if (!isVisible) return null;

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: 1.5,
        },
    };

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="custom-cursor"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '2px solid #007BFF',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference',
                }}
            />
            {/* Cursor trail */}
            <motion.div
                className="cursor-trail"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#007BFF',
                    pointerEvents: 'none',
                    zIndex: 9998,
                }}
            />
        </>
    );
};

export default AnimatedCursor;
