import { motion } from 'framer-motion';

const FloatingShapes = () => {
    const shapes = [
        { size: 100, color: 'rgba(0, 123, 255, 0.1)', duration: 20, delay: 0 },
        { size: 150, color: 'rgba(0, 123, 255, 0.08)', duration: 25, delay: 2 },
        { size: 80, color: 'rgba(0, 123, 255, 0.12)', duration: 18, delay: 4 },
        { size: 120, color: 'rgba(0, 123, 255, 0.09)', duration: 22, delay: 1 },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        backgroundColor: shape.color,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        x: [0, Math.random() * 200 - 100, 0],
                        y: [0, Math.random() * 200 - 100, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: shape.duration,
                        delay: shape.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes;
