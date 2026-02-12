import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary p-4 md:p-8">
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="text-brand-accent">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
                    <p className="mt-6 text-base sm:text-lg text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto px-4">
                        My professional journey and key achievements
                    </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-glow transition-all duration-300 animate-fadeInUp"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 md:mb-0">
                                    {exp.companyLogo && (
                                        <img
                                            src={exp.companyLogo}
                                            alt={exp.company}
                                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white p-2 flex-shrink-0"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    )}
                                    <div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-accent">{exp.role}</h3>
                                        <p className="text-base sm:text-lg md:text-xl text-light-primary dark:text-dark-primary font-semibold">
                                            {exp.company}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center text-sm sm:text-base text-light-secondary dark:text-dark-secondary">
                                    <Calendar size={16} className="mr-2" />
                                    <span>{exp.duration}</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-base sm:text-lg mb-3 flex items-center text-light-primary dark:text-dark-primary">
                                    <Briefcase size={16} className="mr-2 text-brand-accent" />
                                    Key Responsibilities:
                                </h4>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li
                                            key={idx}
                                            className="text-sm sm:text-base text-light-secondary dark:text-dark-secondary flex items-start"
                                        >
                                            <span className="text-brand-accent mr-2">•</span>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-base sm:text-lg mb-3 text-light-primary dark:text-dark-primary">
                                    Technologies:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-brand-accent bg-opacity-10 text-brand-accent px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-brand-accent"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
