import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
export interface DetailedExperienceType {
    /**
     * Job role or title
     */
    role: string;

    /**
     * Name of the company
     */
    company: string;

    /**
     * Location of the job
     */
    location: string;

    /**
     * Website of the company
     */
    website: string;

    /**
     * Start date in YYYY-MM format
     */
    startDate: string;

    /**
     * End date in YYYY-MM format or "Present"
     */
    endDate: string;

    /**
     * Technologies and tools used
     */
    stacks: string[];

    /**
     * Key responsibilities or achievements
     */
    responsibilities: string[];
}

const workExperience: any = [
    {
        role: "Backend Engineer & AI Engineer",
        company: "Taskify360",
        location: "Texas, USA (Remote)",
        website: "https://taskify360.com",
        startDate: "2026-04",
        endDate: "Present",
        stacks: ["Bun", "TypeScript", "Drizzle ORM", "PostgreSQL", "REST APIs", "Docker", "AI", "LLMs", "Git"],
        responsibilities: [
            "Architected and developed a scalable marketplace platform featuring payment processing, digital wallets, and financial transaction management.",
            "Designed and implemented high-performance backend services using Bun, TypeScript, Drizzle ORM, and PostgreSQL.",
            "Built an AI-powered customer support assistant using Large Language Models (LLMs), reducing customer support workload by approximately 25%.",
            "Developed secure REST APIs with a focus on maintainability, scalability, and clean architecture.",
            "Collaborated with frontend engineers to define API contracts and streamline feature delivery.",
            "Mentored engineers through architecture reviews, code reviews, and backend engineering best practices.",
            "Contributed to deployment automation, monitoring, and overall platform reliability."
        ]
    },
    {
        role: "Senior Backend Engineer",
        company: "Blip.ng",
        location: "Abuja, Nigeria (Remote)",
        website: "https://blip.ng",
        startDate: "2024-11",
        endDate: "Present",
        stacks: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "REST APIs", "Docker", "AI"],
        responsibilities: [
            "Led backend development for a transportation platform supporting ride-hailing, payments, and wallet infrastructure.",
            "Engineered a high-throughput wallet and payment system processing over ₦109 million in monthly transactions.",
            "Designed scalable REST APIs supporting bookings, user management, payments, and financial reconciliation.",
            "Integrated AI-assisted customer support capabilities that significantly reduced manual support requests.",
            "Improved API performance and database efficiency through query optimization and scalable service design.",
            "Collaborated with cross-functional teams to deliver production-ready backend services.",
            "Mentored developers through technical guidance, code reviews, and architectural recommendations."
        ]
    },
    {
        role: "Full-Stack Software Engineer",
        company: "Nexoris Technologies",
        location: "Abuja, Nigeria",
        website: "https://nexoris.com",
        startDate: "2025-08",
        endDate: "2025-11",
        stacks: ["NestJS", "React", "Next.js", "PostgreSQL", "TypeScript", "REST APIs"],
        responsibilities: [
            "Developed enterprise software solutions including a Learning Management System (LMS), online examination platform, and business management applications.",
            "Designed backend APIs using NestJS with secure authentication, authorization, and role-based access control.",
            "Built responsive frontend interfaces using React and Next.js.",
            "Implemented the company's corporate website and landing pages, improving digital presence and usability.",
            "Integrated AI-powered customer assistance features to improve user engagement and operational efficiency.",
            "Worked closely with product stakeholders to translate business requirements into scalable technical solutions."
        ]
    },
    {
        role: "Machine Learning & AI Engineer",
        company: "Reviai.ai",
        location: "Abuja, Nigeria",
        website: "https://reviai.ai",
        startDate: "2025-02",
        endDate: "2025-08",
        stacks: ["Python", "Django", "AWS SageMaker", "Hugging Face", "Transformers", "RAG", "LangChain", "PostgreSQL", "REST APIs"],
        responsibilities: [
            "Fine-tuned Large Language Models (LLMs) for real estate applications, improving response quality and domain-specific accuracy by approximately 15%.",
            "Designed and implemented a Retrieval-Augmented Generation (RAG) architecture for real-time knowledge retrieval and AI-assisted search.",
            "Developed AI-powered web crawlers and automated data collection pipelines, significantly reducing manual data preparation.",
            "Deployed production-ready AI models on AWS SageMaker and integrated them with Django backend services.",
            "Designed scalable REST APIs supporting AI inference, document retrieval, and model interactions.",
            "Collaborated with engineering teams to deploy secure, production-ready AI services.",
            "Conducted architecture reviews and mentored developers on AI engineering best practices."
        ]
    },
    {
        role: "Full-Stack Software Engineer",
        company: "Management System Global",
        location: "Abuja, Nigeria",
        website: "https://www.msspaceglobal.com",
        startDate: "2024-08",
        endDate: "2025-02",
        stacks: ["React", "Next.js", "Laravel", "PHP", "JavaScript", "MySQL", "REST APIs"],
        responsibilities: [
            "Built enterprise web applications using React, Next.js, and Laravel for clients across multiple industries.",
            "Developed features including payment processing, digital wallets, training systems, examination modules, and business workflows.",
            "Designed reusable frontend components and optimized application performance for improved user experience.",
            "Collaborated with backend engineers to deliver scalable RESTful APIs and seamless frontend integration.",
            "Performed code reviews and contributed to engineering quality standards across development teams."
        ]
    },
    {
        role: "Full-Stack Software Engineer",
        company: "Orion Industrial Resources Ltd",
        location: "Abuja, Nigeria",
        website: "http://emp.sanitracksuite.com",
        startDate: "2024-02",
        endDate: "2024-08",
        stacks: ["React", "Vite", "Express.js", "TypeScript", "Babylon.js", "PostgreSQL"],
        responsibilities: [
            "Developed modern web applications using React, Vite, Express.js, and TypeScript.",
            "Implemented interactive 3D visualization features using Babylon.js for industrial applications.",
            "Built scalable backend APIs supporting business operations and client workflows.",
            "Collaborated with mobile engineers to ensure consistent API integration across platforms.",
            "Reviewed pull requests, improved code quality, and supported junior developers through technical mentorship."
        ]
    },
    {
        role: "Lead Full-Stack Software Engineer",
        company: "Walkre.com",
        location: "Abuja, Nigeria (Remote)",
        website: "https://www.walkre.com",
        startDate: "2023-01",
        endDate: "Present",
        stacks: ["Java", "Spring Boot", "React", "Next.js", "Redux", "GraphQL", "REST APIs", "PostgreSQL", "Docker", "Git"],
        responsibilities: [
            "Lead the end-to-end architecture, design, and development of Walkre, a trust-first e-commerce and marketplace platform built to improve secure online commerce.",
            "Architected scalable backend services using Spring Boot (Java), designing RESTful APIs for authentication, marketplace operations, payments, order management, inventory, messaging, and user management.",
            "Designed and implemented a modern frontend using Next.js, React, and Redux, delivering a responsive, high-performance user experience.",
            "Engineered secure payment workflows, marketplace infrastructure, and scalable data models supporting buyers, sellers, and administrators.",
            "Integrated GraphQL and REST APIs to support efficient communication between frontend and backend services.",
            "Led technical decision-making, system architecture, code quality initiatives, and development planning throughout the product lifecycle.",
            "Collaborated closely with product stakeholders to transform business requirements into scalable technical solutions.",
            "Established engineering standards, reviewed pull requests, mentored developers, and promoted clean architecture and software engineering best practices."
        ]
    },
    {
        role: "Full-Stack Software Engineer",
        company: "Swifre.com",
        location: "Abuja, Nigeria",
        website: "https://www.swifre.com",
        startDate: "2023-09",
        endDate: "2023-11",
        stacks: ["Laravel", "PHP", "React", "JavaScript", "GraphQL", "MySQL"],
        responsibilities: [
            "Contributed to the development of a community-driven blogging and publishing platform enabling user-generated content and social engagement.",
            "Developed backend APIs and frontend features supporting user authentication, content publishing, comments, notifications, and profile management.",
            "Implemented GraphQL services to improve frontend data retrieval efficiency and reduce unnecessary API requests.",
            "Collaborated with designers and backend engineers to deliver responsive, user-friendly experiences across web platforms.",
            "Improved application maintainability through reusable components and modular architecture."
        ]
    },
    {
        role: "Backend & Mobile Software Engineer",
        company: "Amabills Technologies",
        location: "Abuja, Nigeria",
        website: "https://www.360corporation.co",
        startDate: "2023-03",
        endDate: "2023-11",
        stacks: ["Laravel", "PHP", "Lighthouse GraphQL", "React", "React Native", "Next.js", "MySQL"],
        responsibilities: [
            "Developed enterprise SaaS solutions for multiple clients using Laravel, GraphQL, React, React Native, and Next.js.",
            "Designed scalable backend APIs using Laravel and Lighthouse GraphQL, enabling efficient communication across web and mobile applications.",
            "Helped build a sophisticated multi-tenant enterprise platform supporting accounting, inventory management, production tracking, staff management, messaging, sales, work scheduling, and payment processing.",
            "Collaborated with mobile engineers to build cross-platform applications using React Native while simultaneously developing administration dashboards with Next.js.",
            "Improved application scalability through modular backend architecture and reusable API services.",
            "Participated in architectural discussions, code reviews, and engineering planning across multiple client projects."
        ]
    },
    {
        role: "Software Engineering Instructor & Software Engineer",
        company: "EL Academy",
        location: "Abuja, Nigeria",
        website: "https://www.elacademy.org.ng",
        startDate: "2022-02",
        endDate: "2023-02",
        stacks: ["Python", "Django", "PHP", "Laravel", "JavaScript", "MySQL"],
        responsibilities: [
            "Delivered practical software engineering training covering Python, PHP, Laravel, Django, cybersecurity, networking, and software development best practices.",
            "Designed structured learning programs that enabled students to build real-world web applications using modern development frameworks.",
            "Mentored aspiring software developers through hands-on coding sessions, project reviews, debugging, and career guidance.",
            "Led development of secure client web applications while promoting secure coding practices and application security.",
            "Contributed to organizational planning, technical decision-making, and digital transformation initiatives."
        ]
    },
    {
        role: "Wallet Operations & Customer Support Specialist",
        company: "Recharge And Get Paid DRC",
        location: "Abuja, Nigeria",
        website: "https://www.rechargeandgetpaid.cm",
        startDate: "2019-03",
        endDate: "2021-12",
        stacks: ["Html", "CSS", "Customer Service", "Fraud Prevention", "Wallet Management"],
        responsibilities: [
            "Managed secure digital wallet funding operations and payment verification for a large-scale financial services platform.",
            "Verified customer payment transactions, reducing fraud risk and maintaining transaction accuracy.",
            "Provided customer support for a user base of approximately one million customers through phone and online channels.",
            "Resolved account, payment, and wallet-related issues while maintaining high customer satisfaction.",
            "Worked closely with operations teams to improve payment workflows and operational efficiency."
        ]
    },
    {
        role: "Junior Software Developer",
        company: "Walker Nigeria",
        location: "Abuja, Nigeria",
        website: "",
        startDate: "2016-01",
        endDate: "2021-01",
        stacks: ["PHP", "Laravel", "JavaScript", "HTML", "CSS", "MySQL"],
        responsibilities: [
            "Developed web applications supporting hotel reservations, flight bookings, tourism services, and vehicle rental operations.",
            "Built backend functionality using PHP and Laravel while developing responsive frontend interfaces with HTML, CSS, JavaScript, and Blade.",
            "Implemented booking management features, customer portals, and business management tools.",
            "Collaborated with senior developers on application enhancements, debugging, testing, and production deployments.",
            "Gained strong foundational experience in full-stack web development, database design, and software engineering best practices."
        ]
    }
];


interface ExperienceCardProps {
    experience: DetailedExperienceType;
    isLast: boolean;
}

const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);

    const months = (end.getFullYear() - start.getFullYear()) * 12
        + (end.getMonth() - start.getMonth())
        + 1; // +1 to count both start and end months

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
        return `${years} yr ${remainingMonths} mos`;
    } else if (years > 0) {
        return `${years} yr`;
    } else {
        return `${months} mos`;
    }
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isLast }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const duration = calculateDuration(experience.startDate, experience.endDate);
    return (
        <motion.div
            className={`relative p-6 w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${!isLast && 'mb-6'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex-1">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.role}</h3>
                            <div className="mt-1 flex items-center">
                                <a
                                    href={experience.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
                                >
                                    {experience.company}
                                    <FiExternalLink className="ml-1" size={14} />
                                </a>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-gray-600 dark:text-gray-300">{experience.location}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="p-1 text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300 md:hidden"
                            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                        >
                            {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                        </button>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>
                            {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {' '}
                            {experience.endDate === 'Present' ? 'Present' : new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{duration}</span>
                    </div>
                </div>

                <div className="mt-4 md:ml-4 md:mt-0">
                    <div className="flex max-w-[500px] flex-wrap gap-2">
                        {experience.stacks.map((tech, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <ul className="mt-4 list-disc space-y-2 pl-5">
                            {experience.responsibilities.map((item, index) => (
                                <li key={index} className="text-gray-700 dark:text-gray-300">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 hidden items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400 md:flex"
            >
                {isExpanded ? 'Show less' : 'Show more'}
                {isExpanded ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
            </button>

            {!isLast && (
                <div className="absolute bottom-0 left-16 h-6 w-px -translate-y-full transform bg-gray-200 z-[-1] dark:bg-gray-700" />
            )}
        </motion.div>
    );
};

interface ExperienceCardsProps {
    experiences: DetailedExperienceType[];
}

const ExperienceCards: React.FC<ExperienceCardsProps> = ({ experiences }: ExperienceCardsProps) => {
    return (
        <div className="relative w-full">
            <div className="absolute bottom-0 left-16 top-0 w-px bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={`${exp.company}-${exp.startDate}`}
                        experience={exp}
                        isLast={index === experiences.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

const Experience: any = () => (
    <div className="flex w-full flex-grow flex-col items-start justify-center px-4 py-16 md:px-32">
        <h2 className="mb-8 text-2xl font-bold">Work Experience</h2>
        <ExperienceCards experiences={workExperience} />
    </div>
);

export default Experience;
