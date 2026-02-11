import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary p-4 md:p-8">
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="text-brand-accent">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
                    <p className="mt-6 text-lg text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto">
                        My professional journey and key achievements
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-6 md:p-8 hover:shadow-glow transition-all duration-300 animate-fadeInUp"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                                    {exp.companyLogo && (
                                        <img
                                            src={exp.companyLogo}
                                            alt={exp.company}
                                            className="w-16 h-16 object-contain rounded-lg bg-white p-2"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    )}
                                    <div>
                                        <h3 className="text-2xl font-bold text-brand-accent">{exp.role}</h3>
                                        <p className="text-xl text-light-primary dark:text-dark-primary font-semibold">
                                            {exp.company}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center text-light-secondary dark:text-dark-secondary">
                                    <Calendar size={18} className="mr-2" />
                                    <span>{exp.duration}</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-lg mb-3 flex items-center text-light-primary dark:text-dark-primary">
                                    <Briefcase size={18} className="mr-2 text-brand-accent" />
                                    Key Responsibilities:
                                </h4>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li
                                            key={idx}
                                            className="text-light-secondary dark:text-dark-secondary flex items-start"
                                        >
                                            <span className="text-brand-accent mr-2">•</span>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-light-primary dark:text-dark-primary">
                                    Technologies:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-brand-accent bg-opacity-10 text-brand-accent px-3 py-1 rounded-full text-sm font-medium border border-brand-accent"
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
