import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';
import { Code } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp } from '../utils/animations';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary p-4 md:p-8">
            <div className="max-w-screen-xl mx-auto w-full">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-brand-accent mx-auto"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <p className="mt-6 text-base sm:text-lg text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto px-4">
                        A comprehensive overview of my technical expertise and proficiency levels
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="space-y-12"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {skills.map((category, categoryIndex) => (
                        <motion.div key={categoryIndex} variants={staggerItem}>
                            <motion.h3
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-accent mb-6"
                                variants={fadeInUp}
                            >
                                {category.categoryName}
                            </motion.h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="bg-light-surface dark:bg-dark-surface p-4 sm:p-6 rounded-lg shadow-card group"
                                        variants={staggerItem}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: '0 20px 40px rgba(0, 123, 255, 0.3)',
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <div className="flex items-center mb-4">
                                            {skill.iconUrl ? (
                                                <motion.img
                                                    src={skill.iconUrl}
                                                    alt={skill.name}
                                                    className="w-8 h-8 sm:w-10 sm:h-10 mr-3"
                                                    animate={{
                                                        y: [0, -5, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                    }}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                            ) : null}
                                            <motion.div
                                                className="w-8 h-8 sm:w-10 sm:h-10 mr-3 bg-brand-accent rounded-lg flex items-center justify-center"
                                                style={{ display: skill.iconUrl ? 'none' : 'flex' }}
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Code size={20} className="text-white" />
                                            </motion.div>
                                            <span className="font-semibold text-base sm:text-lg text-light-primary dark:text-dark-primary">
                                                {skill.name}
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="relative">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-xs sm:text-sm text-light-secondary dark:text-dark-secondary">
                                                    Proficiency
                                                </span>
                                                <motion.span
                                                    className="text-xs sm:text-sm font-semibold text-brand-accent"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                >
                                                    {skill.proficiency}%
                                                </motion.span>
                                            </div>
                                            <div className="w-full bg-light-border dark:bg-dark-border rounded-full h-2.5 overflow-hidden">
                                                <motion.div
                                                    className="bg-brand-accent h-2.5 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                                                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
