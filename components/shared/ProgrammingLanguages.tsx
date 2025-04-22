import React from 'react';
import { motion } from 'framer-motion';
import {
    SiPython,
    SiJavascript,
    SiTypescript,
    SiPhp,
    SiHtml5,
    SiCss3,
    SiCplusplus,
    SiGo,
    SiRust,
    SiGraphql,
    SiSolidity,
    SiNodedotjs,
    SiGnubash
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";

const ProgrammingLanguages = () => {
    const languages = [
        { name: 'Python', icon: <SiPython className="text-blue-500" />, color: 'bg-blue-100 dark:bg-blue-900' },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, color: 'bg-yellow-100 dark:bg-yellow-900' },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, color: 'bg-blue-100 dark:bg-blue-900' },
        { name: 'PHP', icon: <SiPhp className="text-purple-700" />, color: 'bg-purple-100 dark:bg-purple-900' },
        { name: 'Java', icon: <FaJava className="text-red-600" />, color: 'bg-red-100 dark:bg-red-900' },
        { name: 'SQL', icon: <div className="text-gray-700 dark:text-gray-300 font-bold">SQL</div>, color: 'bg-gray-100 dark:bg-gray-700' },
        { name: 'HTML', icon: <SiHtml5 className="text-orange-500" />, color: 'bg-orange-100 dark:bg-orange-900' },
        { name: 'CSS', icon: <SiCss3 className="text-blue-500" />, color: 'bg-blue-100 dark:bg-blue-900' },
        { name: 'C++', icon: <SiCplusplus className="text-blue-700" />, color: 'bg-blue-100 dark:bg-blue-900' },
        { name: 'C#', icon: <TbBrandCSharp className="text-purple-600" />, color: 'bg-purple-100 dark:bg-purple-900' },
        { name: 'Go', icon: <SiGo className="text-blue-600" />, color: 'bg-blue-100 dark:bg-blue-900' },
        { name: 'Rust', icon: <SiRust className="text-orange-700" />, color: 'bg-orange-100 dark:bg-orange-900' },
        { name: 'Bash', icon: <SiGnubash className="text-gray-800 dark:text-gray-200" />, color: 'bg-gray-100 dark:bg-gray-700' },
        { name: 'Solidity', icon: <SiSolidity className="text-gray-700 dark:text-gray-300" />, color: 'bg-gray-100 dark:bg-gray-700' },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" />, color: 'bg-pink-100 dark:bg-pink-900' },
        { name: 'Node', icon: <SiNodedotjs className="text-yellow-400" />, color: 'bg-yellow-100 dark:bg-yellow-900' },
    ];

    return (
        <div className="w-full px-4 py-4 md:px-32 mx-auto">
            <div className="w-full flex flex-wrap justify-center items-center md:justify-start flex-row gap-4">
                {languages.map((lang, index) => (
                    <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        className={`${lang.color} rounded-xl p-4 h-20 w-20 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all`}
                    >
                        <div className="text-3xl mb-2">{lang.icon}</div>
                        <h3 className="font-medium text-gray-900 dark:text-white text-center">{lang.name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProgrammingLanguages;