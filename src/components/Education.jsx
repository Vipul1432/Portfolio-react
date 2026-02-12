import { education } from '../data/portfolioData';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const Education = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary p-4 md:p-8">
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-brand-accent">Education</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
                    <p className="mt-6 text-base sm:text-lg text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto px-4">
                        Academic background and achievements
                    </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-glow transition-all duration-300 animate-fadeInUp"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 md:mb-0">
                                    {edu.institutionLogo && (
                                        <img
                                            src={edu.institutionLogo}
                                            alt={edu.institution}
                                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white p-2 flex-shrink-0"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    )}
                                    <div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-accent flex items-center">
                                            <GraduationCap size={20} className="mr-2" />
                                            {edu.degree}
                                        </h3>
                                        <p className="text-base sm:text-lg md:text-xl text-light-primary dark:text-dark-primary font-semibold mt-2">
                                            {edu.institution}
                                        </p>
                                        <div className="flex items-center text-sm sm:text-base text-light-secondary dark:text-dark-secondary mt-2">
                                            <MapPin size={14} className="mr-1" />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left md:text-right">
                                    <div className="text-sm sm:text-base text-light-secondary dark:text-dark-secondary mb-2">
                                        {edu.duration}
                                    </div>
                                    <div className="flex items-center md:justify-end text-brand-accent font-semibold">
                                        <Award size={16} className="mr-1" />
                                        <span className="text-sm sm:text-base">{edu.score}</span>
                                    </div>
                                </div>
                            </div>

                            {edu.highlights && edu.highlights.length > 0 && (
                                <div>
                                    <h4 className="font-semibold text-base sm:text-lg mb-3 text-light-primary dark:text-dark-primary">
                                        Highlights:
                                    </h4>
                                    <ul className="space-y-2">
                                        {edu.highlights.map((highlight, idx) => (
                                            <li
                                                key={idx}
                                                className="text-sm sm:text-base text-light-secondary dark:text-dark-secondary flex items-start"
                                            >
                                                <span className="text-brand-accent mr-2">•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
