import { projects } from '../data/portfolioData';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary p-4 md:p-8">
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-brand-accent">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
                    <p className="mt-6 text-lg text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto">
                        Showcase of my recent work and personal projects
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg overflow-hidden hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                        >
                            {/* Project Thumbnail */}
                            <div className="relative h-48 bg-gradient-to-br from-brand-accent to-brand-accent-hover overflow-hidden">
                                {project.thumbnailUrl ? (
                                    <img
                                        src={project.thumbnailUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Code size={64} className="text-white opacity-50" />
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-brand-accent mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-light-secondary dark:text-dark-secondary mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-sm mb-2 text-light-primary dark:text-dark-primary">
                                        Technologies:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-brand-accent bg-opacity-10 text-brand-accent px-2 py-1 rounded text-xs font-medium border border-brand-accent"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                {project.features && project.features.length > 0 && (
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm mb-2 text-light-primary dark:text-dark-primary">
                                            Key Features:
                                        </h4>
                                        <ul className="space-y-1">
                                            {project.features.slice(0, 3).map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-sm text-light-secondary dark:text-dark-secondary flex items-start"
                                                >
                                                    <span className="text-brand-accent mr-2">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Links */}
                                <div className="flex space-x-4 mt-6">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center bg-light-primary dark:bg-dark-primary text-light-bg dark:text-dark-bg px-4 py-2 rounded-lg hover:bg-brand-accent hover:text-white transition-all duration-300 font-medium"
                                        >
                                            <Github size={18} className="mr-2" />
                                            GitHub
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center bg-brand-accent text-white px-4 py-2 rounded-lg hover:bg-brand-accent-hover transition-all duration-300 font-medium"
                                        >
                                            <ExternalLink size={18} className="mr-2" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
