import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';
import { Github, ExternalLink, Code } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';

const Projects = () => {
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
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-brand-accent mx-auto"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <p className="mt-6 text-base sm:text-lg text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto px-4">
                        Showcase of my recent work and personal projects
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-card overflow-hidden group"
                            variants={staggerItem}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 40px rgba(0, 123, 255, 0.3)',
                                transition: { duration: 0.3 },
                            }}
                        >
                            {/* Project Thumbnail */}
                            <motion.div
                                className="relative h-40 sm:h-48 bg-gradient-to-br from-brand-accent to-brand-accent-hover overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.thumbnailUrl ? (
                                    <motion.img
                                        src={project.thumbnailUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80"
                                        whileHover={{ opacity: 1 }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Code size={48} className="text-white opacity-50" />
                                    </div>
                                )}
                                <motion.div
                                    className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                    initial={{ opacity: 0 }}
                                />
                            </motion.div>

                            {/* Project Content */}
                            <div className="p-4 sm:p-6">
                                <motion.h3
                                    className="text-xl sm:text-2xl font-bold text-brand-accent mb-3"
                                    whileHover={{ x: 5 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <p className="text-sm sm:text-base text-light-secondary dark:text-dark-secondary mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-xs sm:text-sm mb-2 text-light-primary dark:text-dark-primary">
                                        Technologies:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                className="bg-brand-accent bg-opacity-10 text-brand-accent px-2 py-1 rounded text-xs font-medium border border-brand-accent"
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                {project.features && project.features.length > 0 && (
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-xs sm:text-sm mb-2 text-light-primary dark:text-dark-primary">
                                            Key Features:
                                        </h4>
                                        <ul className="space-y-1">
                                            {project.features.slice(0, 3).map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="text-xs sm:text-sm text-light-secondary dark:text-dark-secondary flex items-start"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                >
                                                    <span className="text-brand-accent mr-2">•</span>
                                                    <span>{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Links */}
                                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
                                    {project.githubUrl && (
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center bg-light-primary dark:bg-dark-primary text-light-bg dark:text-dark-bg px-4 py-2 rounded-lg font-medium text-sm"
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: '#007BFF',
                                                color: '#ffffff',
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Github size={16} className="mr-2" />
                                            GitHub
                                        </motion.a>
                                    )}
                                    {project.liveUrl && (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center bg-brand-accent text-white px-4 py-2 rounded-lg font-medium text-sm"
                                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 123, 255, 0.5)' }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ExternalLink size={16} className="mr-2" />
                                            Live Demo
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
