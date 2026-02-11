import { skills } from '../data/portfolioData';
import { Code } from 'lucide-react';

const Skills = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary p-4 md:p-8">
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-brand-accent">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
                    <p className="mt-6 text-lg text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and proficiency levels
                    </p>
                </div>

                <div className="space-y-12">
                    {skills.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="animate-fadeInUp">
                            <h3 className="text-2xl md:text-3xl font-bold text-brand-accent mb-6">
                                {category.categoryName}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg shadow-md hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                                    >
                                        <div className="flex items-center mb-4">
                                            {skill.iconUrl ? (
                                                <img
                                                    src={skill.iconUrl}
                                                    alt={skill.name}
                                                    className="w-10 h-10 mr-3"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                            ) : null}
                                            <div
                                                className="w-10 h-10 mr-3 bg-brand-accent rounded-lg flex items-center justify-center"
                                                style={{ display: skill.iconUrl ? 'none' : 'flex' }}
                                            >
                                                <Code size={20} className="text-white" />
                                            </div>
                                            <span className="font-semibold text-lg text-light-primary dark:text-dark-primary">
                                                {skill.name}
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="relative">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm text-light-secondary dark:text-dark-secondary">
                                                    Proficiency
                                                </span>
                                                <span className="text-sm font-semibold text-brand-accent">
                                                    {skill.proficiency}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-light-border dark:bg-dark-border rounded-full h-2.5">
                                                <div
                                                    className="bg-brand-accent h-2.5 rounded-full transition-all duration-1000"
                                                    style={{ width: `${skill.proficiency}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
