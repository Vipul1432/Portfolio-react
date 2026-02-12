// Framer Motion Animation Variants
// Centralized animation configurations for consistent animations across the portfolio

// Fade animations
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

// Scale animations
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

export const scaleOnHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3, ease: 'easeInOut' }
    }
};

// Stagger children animations
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

// Slide animations
export const slideInLeft = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const slideInRight = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

// Rotate animations
export const rotateIn = {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

// Page transition animations
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3, ease: 'easeIn' }
    }
};

// Card animations
export const cardHover = {
    rest: {
        scale: 1,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 }
    },
    hover: {
        scale: 1.03,
        boxShadow: '0 20px 40px rgba(0, 123, 255, 0.3)',
        transition: { duration: 0.3 }
    }
};

// Timeline draw animation
export const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.5, ease: 'easeInOut' }
    }
};

// Progress bar animation
export const progressBar = (width) => ({
    hidden: { width: 0 },
    visible: {
        width: `${width}%`,
        transition: { duration: 1, ease: 'easeOut', delay: 0.2 }
    }
});

// Magnetic button effect (for use with motion values)
export const magneticButton = {
    rest: { x: 0, y: 0 },
    hover: (custom) => ({
        x: custom.x,
        y: custom.y,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
    })
};

// Floating animation
export const floating = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};

// Pulse animation
export const pulse = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};

// Scroll reveal animation
export const scrollReveal = {
    hidden: { opacity: 0, y: 75 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut'
        }
    }
};

// Modal animations
export const modalBackdrop = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
};

export const modalContent = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: 50,
        transition: { duration: 0.3, ease: 'easeIn' }
    }
};
