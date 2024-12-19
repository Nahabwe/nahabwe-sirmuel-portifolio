'use client';
import { useEffect, useRef, useState } from "react";
import { projectsButton, projectsData } from "../assets";
import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { animate, motion } from "framer-motion";

const Projects = () => {
    const [tech, setTech] = useState('All');
    const [index, setIndex] = useState(0);
    const prevIndex = useRef(0);
    const buttonRef = useRef([]);

    const handleClick = () => {
        animate(buttonRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
        animate(buttonRef.current[index], { opacity: 1, scale: 1.2 });
    };

    useEffect(() => {
        if(buttonRef.current.length >0){
            handleClick();
            prevIndex.current = index;
        }
    }, [index]);

    return (
        <div id="projects" className="min-h-screen py-20">
            <Heading text={'Projects'} />
            <div className="flex flex-wrap items-center justify-between gap-4 py-10">
                {projectsButton
                    .filter((project) => {
                        return project.tech?.some((item) => (tech === 'All' ? true : item === tech));
                    })
                    .map((text, i) => (
                        <motion.button
                            key={text} // Use unique text as key
                            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
                            ref={(el) => {
                                if (el) buttonRef.current[i] = el;
                            }}
                            onClick={() => {
                                setTech(text);
                                setIndex(i);
                            }}
                            className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
                        >
                            {text}
                        </motion.button>
                    ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5">
                {projectsData.map((data) => (
                    <motion.div key={data.id} layout> {/* Use a unique key for each project */}
                        <Project data={data} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
