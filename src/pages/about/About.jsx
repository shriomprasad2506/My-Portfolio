import React from 'react'
import Info from '../../components/Info'
import {FaDownload} from 'react-icons/fa'
import CV from "../../assets/CV.pdf"
import Skills from '../../components/Skills'
import './about.css'
import { resume } from '../../data'
import ResumeItem from '../../components/ResumeItem'
const About = () => {
    return (
        <main className='section container'>
            <section className='about'>
                <h2 className='section__title'>
                    About <span>Me</span>
                </h2>

                <div className='about__container' data-aos="fade-up">
                    <div className='about__info'>
                        <h3 className='section__subtitle'>
                            Personal Infos
                        </h3>
                        <ul className='info__list grid'>
                            <Info/>
                        </ul>

                        <a href={CV} className='button'>
                            Download CV 
                            <span className='button__icon'>
                                <FaDownload/>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            <div className='separator'>
            </div>

            <section className='skills'>
                <h3 className='section__subtitle'>
                    My Skills
                </h3>
                <div className='skills__container grid'>
                    <Skills/>
                </div>
            </section>

            <div className='separator'>
            </div>

            <section className='resume'>
                <h3 className='section__subtitle'>
                    Education
                </h3>
                <div className='resume__container grid'>
                    <div className='resume__data'>
                        {resume.map((val)=>{
                            return <ResumeItem key={val.id} {...val}/>
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About