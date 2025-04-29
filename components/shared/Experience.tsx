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
        role: "Machine Learning/Deep Learning Developer",
        company: "Reviai.tech",
        location: "Abuja, Federal Capital Territory, Nigeria",
        website: "https://www.reviai.tech",
        startDate: "2025-02",
        endDate: "Present",
        stacks: ["Pytorch", "Transformers", "Python", "langchain", "Django", "AWS"],
        responsibilities: [
            "Fine-tuned a Large Language Model (LLM) for real estate domain",
            "Implemented Retrieval Augmented Generation (RAG)",
            "Built AI-assisted data crawler",
            "Deployed model to AWS Sagemaker and integrated with Django backend",
            "Developed APIs using Django",
            "Designed database and data structures",
            "Implemented wallet, payment, user management features",
            "Collaborated with frontend developers",
            "Reviewed team code and provided support"
        ]
    },
    {
        role: "Backend Developer",
        company: "Urban.ng",
        location: "Abuja, Federal Capital Territory, Nigeria",
        website: "https://www.urban.ng",
        startDate: "2024-11",
        endDate: "Present",
        stacks: ["NestJS", "TypeScript", "JavaScript", "ExpressJS"],
        responsibilities: [
            "Developed APIs using NestJS",
            "Designed database and data structures",
            "Implemented wallet, payment, user management features",
            "Collaborated with frontend developers",
            "Implemented AI-assisted chatbot",
            "Reviewed team code and provided support"
        ]
    },
    {
        role: "Full Stack Software Developer",
        company: "Management System Global",
        location: "Abuja, Federal Capital Territory, Nigeria",
        website: "https://www.msspaceglobal.com",
        startDate: "2024-08",
        endDate: "Present",
        stacks: ["Material UI", "Tailwind CSS", "TypeScript", "React", "Next.js", "PHP", "AWS", "Laravel"],
        responsibilities: [
            "Developed client applications using React/Next.js",
            "Implemented wallet, exam, training, and payment features",
            "Collaborated with backend for REST API development using Laravel",
            "Reviewed team code and provided support"
        ]
    },
    {
        role: "Full Stack Software Developer",
        company: "Orion Industrial Resources Ltd",
        location: "Abuja, Federal Capital Territory, Nigeria",
        website: "http://emp.sanitracksuite.com",
        startDate: "2024-02",
        endDate: "2024-08",
        stacks: ["Material UI", "Tailwind CSS", "TypeScript", "BabylonJS", "ExpressJS", "React", "React Native", "AWS"],
        responsibilities: [
            "Developed client applications using React with Vite",
            "Implemented 3D modeling with BabylonJS",
            "Built REST APIs using ExpressJS with TypeScript",
            "Reviewed mobile app code and supported the dev team"
        ]
    },
    {
        role: "Full Stack Software Developer",
        company: "Walkre.com",
        location: "Abuja, Federal Capital Territory, Nigeria",
        website: "https://www.walkre.com",
        startDate: "2023-01",
        endDate: "2024-02",
        stacks: ["JavaScript", "React", "Laravel", "PHP", "Node.js", "SQL", "REST", "GraphQL"],
        responsibilities: [
            "Led full-stack development of the Walkre platform",
            "Developed REST APIs using Laravel",
            "Built frontend with Next.js, React, Redux",
            "Managed frontend styling with CSS/HTML",
            "Oversaw architecture and implementation"
        ]
    },
    {
        role: "Full Stack Software Developer",
        company: "Swifre.com",
        location: "Abuja, Federal Capital Territory, Nigeria",
        website: "https://www.swifre.com",
        startDate: "2023-09",
        endDate: "2023-11",
        stacks: ["JavaScript", "React", "Laravel", "PHP", "Node.js", "SQL", "REST", "GraphQL"],
        responsibilities: [
            "Developed a blog platform allowing users to register and post articles"
        ]
    },
    {
        role: "Backend & Mobile Software Developer",
        company: "Amabills Technologies",
        location: "Abuja, Federal Capital Territory, Nigeria",
        websites: ["https://www.360corporation.co", "https://theloda.co"],
        startDate: "2023-03",
        endDate: "2023-11",
        stacks: ["JavaScript", "TypeScript", "React", "React Native", "Laravel", "Lighthouse GraphQL", "Node.js", "SQL", "VueJS"],
        responsibilities: [
            "Built web and mobile apps using React, React Native, Laravel, and GraphQL",
            "Implemented multi-tenant architecture for 360corporation",
            "Collaborated on admin web app using Next.js",
            "Developed accounting, feeds, inventory, and production tracking modules"
        ]
    },
    {
        role: "Tutor and Software Developer",
        company: "EL Academy",
        location: "Abuja, Federal Capital Territory, Nigeria",
        website: "https://www.elacademy.org.ng",
        startDate: "2022-02",
        endDate: "2023-02",
        stacks: ["Python", "Django", "FastAPI", "PHP", "Laravel", "Cybersecurity", "Networking", "HTML", "CSS", "JavaScript", "Scikit-learn", "Pandas", "Power BI", "SQL", "Java", "Spring Boot"],
        responsibilities: [
            "Taught programming and cybersecurity",
            "Led development of secure e-commerce websites",
            "Used Django and Laravel in hands-on training",
            "Contributed to marketing and strategic planning"
        ]
    },
    {
        role: "Wallet Funding Officer, Customer Care Representative",
        company: "Recharge And Get Paid DRC",
        location: "Abuja, Federal Capital Territory, Nigeria",
        website: "https://www.rechargeandgetpaid.cm",
        startDate: "2019-03",
        endDate: "2021-12",
        stacks: ["Html", "CSS", "Customer Service", "Fraud Prevention", "Wallet Management"],
        responsibilities: [
            "Funded wallets manually via admin dashboard",
            "Verified payment documents to prevent fraud",
            "Handled client support calls and inquiries",
            "Managed a large customer base and expanded reach"
        ]
    },
    {
        role: "Junior Software Developer",
        company: "Walker Nigeria",
        location: "Nigeria",
        startDate: "2016-01",
        endDate: "2021-01",
        stacks: ["PHP", "Laravel", "Blade Template", "JavaScript", "HTML", "CSS"],
        responsibilities: [
            "Built applications for hotel booking, flights, tourism, and car rentals"
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
            className={`relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${!isLast && 'mb-6'}`}
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
                <div className="absolute bottom-0 left-16 h-6 w-full -translate-y-full transform bg-gray-200 dark:bg-gray-700" />
            )}
        </motion.div>
    );
};

interface ExperienceCardsProps {
    experiences: DetailedExperienceType[];
}

const ExperienceCards: React.FC<ExperienceCardsProps> = ({ experiences }: ExperienceCardsProps) => {
    return (
        <div className="relative">
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
