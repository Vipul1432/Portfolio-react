// Portfolio Data - Centralized data for the portfolio

export const personalInfo = {
    name: 'Vipul Kumar',
    email: 'vipulupadhyay563@gmail.com',
    location: 'Vadodara, Gujarat, India',
    availability: 'Available for hire',
};

export const socialLinks = [
    {
        url: 'https://github.com/Vipul1432',
        icon: 'Github',
        label: 'GitHub',
    },
    {
        url: 'https://linkedin.com/in/vipul-kumar-tech',
        icon: 'Linkedin',
        label: 'LinkedIn',
    },
    {
        url: 'mailto:vipulupadhyay563@gmail.com',
        icon: 'Mail',
        label: 'Email',
    },
];

export const roles = [
    'Full Stack Developer',
    'Angular Developer',
    'ASP.NET Developer',
];

export const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '15+', label: 'Happy Clients' },
];

export const coreCompetencies = [
    {
        name: 'Frontend Development',
        description: 'Expertise in Angular, TypeScript, and modern CSS frameworks',
    },
    {
        name: 'Backend Development',
        description: 'Strong experience with ASP.NET Core and SQL Server',
    },
    {
        name: 'UI/UX Design',
        description: 'Creating intuitive and responsive user interfaces',
    },
];

export const skills = [
    {
        categoryName: 'Frontend Development',
        skills: [
            { name: 'Angular', proficiency: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
            { name: 'HTML5', proficiency: 95, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', proficiency: 95, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript', proficiency: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'TypeScript', proficiency: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Tailwind CSS', proficiency: 90, iconUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
        ],
    },
    {
        categoryName: 'Backend Development',
        skills: [
            { name: '.NET Core', proficiency: 95, iconUrl: 'https://cdn.simpleicons.org/dotnet/512BD4' },
            { name: 'ASP.NET Web API', proficiency: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
            { name: 'ASP.NET MVC', proficiency: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg' },
            { name: 'C#', proficiency: 95, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
            { name: 'FastAPI', proficiency: 70, iconUrl: 'https://cdn.simpleicons.org/fastapi/009688' },
            { name: 'Python', proficiency: 75, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        ],
    },
    {
        categoryName: 'Databases',
        skills: [
            { name: 'SQL Server', proficiency: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
            { name: 'PostgreSQL', proficiency: 95, iconUrl: 'https://cdn.simpleicons.org/postgresql/4169E1' },
            { name: 'MySQL', proficiency: 75, iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1' },
        ],
    },
    {
        categoryName: 'Developer Tools & Platforms',
        skills: [
            { name: 'Visual Studio', proficiency: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
            { name: 'VS Code', proficiency: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Git', proficiency: 95, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', proficiency: 90, iconUrl: 'https://cdn.simpleicons.org/github/181717' },
            { name: 'Docker', proficiency: 70, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'CI/CD', proficiency: 90, iconUrl: 'https://cdn.simpleicons.org/jenkins/D24939' },
        ],
    },
];

export const experiences = [
    {
        company: 'Promact Infotech Pvt. Ltd',
        role: 'Software Engineer',
        duration: 'Aug 2023 – Present',
        responsibilities: [
            'Integrated Auth0 to manage secure authentication and role-based authorization systems across multiple platforms.',
            'Implemented Azure-based email services, ensuring secure and efficient email communication.',
            'Developed a comprehensive subscription management system using Stripe, including subscription-based restrictions to enforce user access controls.',
            'Optimized application performance by implementing Redis caching for frequently accessed data.',
            'Successfully integrated and utilized various third-party APIs, ensuring seamless functionality and performance.',
            'Leveraged Elasticsearch and Azure Search to enhance search functionality and improve data retrieval speed.',
            'Built robust data scraping solutions using Selenium and implemented ETL pipelines to process and store extracted data efficiently.',
        ],
        technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure', 'Redis', 'Stripe', 'Auth0', 'Elasticsearch'],
        companyLogo: '/assets/images/logos/promact-logo.png',
    },
    {
        company: 'Simform Solutions Pvt. Ltd',
        role: '.NET Developer Apprentice',
        duration: 'Feb 2023 – Jul 2023',
        responsibilities: [
            'Gained hands-on experience with .NET Web API, .NET MVC, and SQL Server.',
            'Demonstrated ability to quickly learn and apply complex technologies.',
            'Embraced Agile and Scrum development practices.',
            'Contributed to team projects and collaborated effectively with senior developers.',
            'Assisted in debugging and resolving software defects.',
        ],
        technologies: ['.NET Core', 'ASP.NET MVC', 'SQL Server', 'C#', 'Agile', 'Scrum'],
        companyLogo: '/assets/images/logos/simform-logo.png',
    },
];

export const education = [
    {
        degree: 'Bachelor of Engineering in Computer Engineering',
        institution: 'Gujarat Technological University (GTU)',
        duration: '2019 – 2023',
        location: 'Ahmedabad, Gujarat, India',
        score: '8.80 CGPA',
        highlights: [
            'Specialized in Computer Science and Engineering with a focus on software development.',
            'Key coursework: Data Structures, Algorithms, Database Management, Web Development, Operating Systems.',
            'Actively participated in coding competitions and technical workshops.',
            'Final Year Project: AI-Powered Legal Document Analysis Tool (LegalGen.AI)',
        ],
        institutionLogo: '/assets/images/logos/gtu-logo.png',
    },
    {
        degree: 'Higher Secondary Certificate (HSC) - Science Stream',
        institution: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
        duration: '2017 – 2019',
        location: 'Gujarat, India',
        score: '85%',
        highlights: [
            'Focused on Physics, Chemistry, and Mathematics (PCM Group).',
            'Developed a strong foundation in analytical and problem-solving skills.',
        ],
        institutionLogo: '/assets/images/logos/gseb-logo.png',
    },
];

export const projects = [
    {
        title: 'Modern Portfolio Website',
        description:
            'A responsive and sleek personal portfolio website designed to showcase skills, projects, and experience. Built with React, Tailwind CSS, and modern UI components for a clean and engaging user experience. Features smooth scrolling, dynamic content loading, and a premium UI/UX.',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5'],
        features: [
            'Fully Responsive Design',
            'Dark/Light Mode Toggle',
            'Smooth Scrolling Navigation',
            'Modern Animations',
            'Dynamic Content Sections',
            'AI-Powered Chatbot',
        ],
        githubUrl: 'https://github.com/Vipul1432/Portfolio',
        liveUrl: 'https://vipulkumar.dev',
        thumbnailUrl: '/assets/images/projects/portfolio-thumbnail.svg',
    },
    {
        title: 'LegalGen.AI - Legal Document Platform',
        description:
            'An AI-powered legal research platform aimed at enhancing the efficiency of finding and analyzing legal documents. Features advanced search, document summarization, and a user-friendly interface for legal professionals.',
        technologies: ['Angular', 'ASP.NET Core', 'Python', 'SQL Server', 'Machine Learning'],
        features: [
            'AI-Powered Document Search',
            'Automated Document Summarization',
            'User Authentication & Authorization',
            'Case Law and Statute Database',
        ],
        githubUrl: 'https://github.com/Vipul1432/LegalGen.AI',
        liveUrl: null,
        thumbnailUrl: '/assets/images/projects/legalgen-thumbnail.svg',
    },
    {
        title: 'Minimal Chat Application',
        description:
            'A real-time messaging application built with Angular and SignalR for instant communication. Supports chat rooms, multimedia file sharing, and user identification, providing a seamless and engaging chat experience.',
        technologies: ['Angular', 'ASP.NET Web API', 'SignalR', 'SQL Server', 'Entity Framework'],
        features: [
            'Real-time Messaging',
            'Chat Room Creation',
            'Multimedia File Sharing',
            'User Identification',
            'Emoji and GIF Support',
        ],
        githubUrl: 'https://github.com/Vipul1432/MinimalChatApp',
        liveUrl: null,
        thumbnailUrl: '/assets/images/projects/chatapp-thumbnail.svg',
    },
];
