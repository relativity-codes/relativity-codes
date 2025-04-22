/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import {
    SiPython, SiJavascript, SiTypescript, SiPhp, SiHtml5, SiCss3,
    SiDjango, SiFastapi, SiLaravel, SiNestjs, SiExpress, SiReact, SiNextdotjs,
    SiRedux, SiVuedotjs, SiSpring, SiAmazon, SiDocker, SiTailwindcss,
    SiGraphql, SiPandas, SiScikitlearn
} from 'react-icons/si';
import { FaDatabase, FaJava } from 'react-icons/fa';
// Skill icon mapping
const skillIcons: Record<string, React.JSX.Element> = {
    // Programming Languages
    'Python': <SiPython className="text-blue-500" />,
    'JavaScript': <SiJavascript className="text-yellow-400" />,
    'TypeScript': <SiTypescript className="text-blue-600" />,
    'Java': <FaJava className="text-red-500" />,
    'PHP': <SiPhp className="text-purple-700" />,
    'HTML': <SiHtml5 className="text-orange-500" />,
    'CSS': <SiCss3 className="text-blue-500" />,
    // Frameworks
    'Django': <SiDjango className="text-green-800" />,
    'FastAPI': <SiFastapi className="text-teal-500" />,
    'Laravel': <SiLaravel className="text-red-500" />,
    'NestJS': <SiNestjs className="text-red-700" />,
    'Express.js': <SiExpress className="text-gray-800" />,
    'React': <SiReact className="text-blue-500" />,
    'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
    'Redux': <SiRedux className="text-purple-500" />,
    'Vue.js': <SiVuedotjs className="text-green-500" />,
    'Spring Boot': <SiSpring className="text-green-600" />,
    // Cloud & DevOps
    'AWS': <SiAmazon className="text-orange-500" />,
    'Docker': <SiDocker className="text-blue-500" />,
    // UI & Styling
    'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
    // API & Data
    'GraphQL': <SiGraphql className="text-pink-600" />,
    'Pandas': <SiPandas className="text-blue-700" />,
    'Scikit-learn': <SiScikitlearn className="text-orange-500" />,
    'Database Design': <FaDatabase className="text-gray-600" />,
    // Default fallback icon
    '_default': <div className="w-5 h-5 bg-gray-300 rounded-full" />
};

const SkillsDisplay = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const groupedSkills = {
        programmingLanguages: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "SQL", "HTML", "CSS", "C++", "C#", "Go", "Rust", "Bash", "Solidity", "GraphQL"],
        frameworksAndLibraries: ["Django", "FastAPI", "Laravel", "NestJS", "Express.js", "React", "React Native", "Next.js", "Redux", "Vue.js", "Spring Boot", "Babylon.js", "Blade Template", "Lighthouse GraphQL"],
        machineLearningAndAI: ["Machine Learning", "Deep Learning", "Large Language Models (LLMs)", "Transformers", "Retrieval-Augmented Generation (RAG)", "Langchain", "AI-assisted crawling", "Scikit-learn", "Pandas"],
        cloudAndDevOps: ["AWS", "Sagemaker", "Docker", "CI/CD", "Git", "GitHub Actions", "Serverless Architecture", "CloudFormation", "Nginx", "Apache", "Redis", "RabbitMQ", "GCP", "Cloudflare"],
        databasesAndData: ["Database Design", "Data Engineering", "Relational Databases", "Multi-tenancy Architecture", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "SQLite", "Data Warehousing", "Data Lakes"],
        uiAndStyling: ["Material UI", "Tailwind CSS", "Bootstrap", "Styled Components", "CSS Modules", "Sass", "Figma", "Adobe XD", "Responsive Design", "Cross-browser Compatibility"],
        apiAndIntegration: ["RESTful APIs", "GraphQL", "API Integration", "Lighthouse GraphQL", "Webhooks", "OAuth", "JWT", "API Documentation", "Postman"],
        cybersecurityAndNetworking: ["Cybersecurity", "Networking", "Application Security", "Penetration Testing", "Vulnerability Assessment", "Data Encryption", "SSL/TLS", "Firewall Configuration", "Intrusion Detection Systems (IDS)", "Network Protocols"],
        softSkillsAndTeam: ["Code Review", "Team Collaboration", "Technical Instruction", "Customer Care", "Marketing Strategy", "Project Management", "Agile Methodologies", "Scrum", "Kanban", "Time Management", "Problem Solving"],
        domainSpecificFeatures: ["Wallet Systems", "Payment Systems", "User Management", "Real Estate LLM", "E-commerce Development", "Exam and Training Portals", "3D Modeling", "Blogging Platforms", "Inventory Management", "Accounting Modules", "Production Tracking", "Data Analytics", "Business Intelligence"]
    };

    const categoryTitles = {
        programmingLanguages: "Programming Languages",
        frameworksAndLibraries: "Frameworks & Libraries",
        machineLearningAndAI: "Machine Learning & AI",
        cloudAndDevOps: "Cloud & DevOps",
        databasesAndData: "Databases & Data",
        uiAndStyling: "UI & Styling",
        apiAndIntegration: "API & Integration",
        cybersecurityAndNetworking: "Cybersecurity & Networking",
        softSkillsAndTeam: "Soft Skills & Team",
        domainSpecificFeatures: "Domain Specific Features"
    };

    const filteredCategories = Object.entries(groupedSkills)
        .filter(([category, skills]) =>
            skills.some(skill =>
                skill.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );

    const toggleCategory = (category: string) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    return (
        <div className="w-full px-4 py-16 md:px-32 flex flex-col justify-start items-start">
            <div className="mb-8 text-center w-full flex flex-col items-start justify-start">
                <h2 className="mb-2 text-3xl font-bold text-white">My Skills & Expertise</h2>
                <p className="text-gray-600 dark:text-gray-300">Technologies and methodologies I work with</p>
            </div>

            <div className="mb-6 w-full flex flex-col items-start justify-start">
                <input
                    type="text"
                    placeholder="Search skills..."
                    className="block w-full max-w-md rounded-lg border border-gray-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                {filteredCategories.map(([category, skills]) => (
                    <motion.div
                        key={category}
                        className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={() => toggleCategory(category)}
                            className="flex w-full items-center justify-between p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                            <h3 className="text-left text-lg font-semibold text-gray-800 dark:text-white">
                                {categoryTitles[category as keyof typeof categoryTitles]}
                                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                    ({skills.length})
                                </span>
                            </h3>
                            {activeCategory === category ? (
                                <FiChevronUp className="text-gray-500" />
                            ) : (
                                <FiChevronDown className="text-gray-500" />
                            )}
                        </button>

                        <AnimatePresence>
                            {activeCategory === category && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 pt-0">
                                        <div className="flex flex-wrap gap-2">
                                            {skills
                                                .filter(skill =>
                                                    skill.toLowerCase().includes(searchTerm.toLowerCase())
                                                )
                                                .map((skill, index) => (
                                                    <motion.div
                                                        key={skill}
                                                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-full"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <div className="w-5 h-5 flex-shrink-0">
                                                            {skillIcons[skill] || skillIcons['_default']}
                                                        </div>
                                                        <span className="text-sm text-black font-medium">{skill}</span>
                                                    </motion.div>
                                                ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {filteredCategories.length === 0 && (
                <div className="py-8 text-center text-gray-500 dark:text-gray-400">
                    No skills found matching your search
                </div>
            )}
        </div>
    );
};

export default SkillsDisplay;