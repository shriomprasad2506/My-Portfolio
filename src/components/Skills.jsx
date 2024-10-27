import React, { useState, useEffect } from 'react';
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1, // Adjust this threshold as needed
        triggerOnce: false, // Allow it to trigger multiple times
    });

    useEffect(() => {
        setIsVisible(inView); // Update isVisible based on inView
    }, [inView]);

    return (
        <>
            {skills.map(({ title, percentage }, index) => {
                const value = isVisible ? percentage : 0; // Only show the percentage when visible
                return (
                    <div className='progress__box' key={index}>
                        <div ref={ref} className='progress__circle'>
                            <CircularProgressbar
                                strokeWidth={7.5}
                                text={`${isVisible ? percentage : 0}%`}
                                value={value}
                            />
                        </div>
                        <h3 className='skills__title'>
                            {title}
                        </h3>
                    </div>
                );
            })}
        </>
    );
};

export default Skills;
