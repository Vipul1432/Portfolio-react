import { personalInfo, stats, coreCompetencies } from '../data/portfolioData';

const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary p-4 md:p-8">
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-brand-accent">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Personal Info */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-brand-accent">Who I Am</h3>
                        <p className="text-lg text-light-secondary dark:text-dark-secondary leading-relaxed">
                            I'm a passionate Full Stack Developer with expertise in building modern web applications.
                            With a strong foundation in both frontend and backend technologies, I create seamless
                            digital experiences that combine beautiful design with robust functionality.
                        </p>
                        <p className="text-lg text-light-secondary dark:text-dark-secondary leading-relaxed">
                            My journey in software development has equipped me with the skills to tackle complex
                            challenges and deliver high-quality solutions. I'm constantly learning and adapting to
                            new technologies to stay at the forefront of web development.
                        </p>

                        <div className="space-y-3 pt-4">
                            <div className="flex items-center">
                                <span className="font-semibold text-brand-accent w-32">Name:</span>
                                <span className="text-light-secondary dark:text-dark-secondary">{personalInfo.name}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-brand-accent w-32">Email:</span>
                                <span className="text-light-secondary dark:text-dark-secondary">{personalInfo.email}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-brand-accent w-32">Location:</span>
                                <span className="text-light-secondary dark:text-dark-secondary">{personalInfo.location}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-brand-accent w-32">Status:</span>
                                <span className="text-brand-success font-semibold">{personalInfo.availability}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Stats & Competencies */}
                    <div className="space-y-8">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg text-center shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-light-secondary dark:text-dark-secondary">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Core Competencies */}
                        <div className="space-y-4">
                            <h4 className="text-2xl font-bold text-brand-accent">Core Competencies</h4>
                            {coreCompetencies.map((competency, index) => (
                                <div
                                    key={index}
                                    className="bg-light-surface dark:bg-dark-surface p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <h5 className="font-semibold text-lg text-light-primary dark:text-dark-primary mb-2">
                                        {competency.name}
                                    </h5>
                                    <p className="text-light-secondary dark:text-dark-secondary">
                                        {competency.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
