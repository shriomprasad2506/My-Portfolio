import React, { useEffect, useRef, useState } from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./home.css"

import Typed from "typed.js"

const Home = () => {
    const typedRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "Web Developer"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        }
        const typed = new Typed(typedRef.current, options)
        return () => {
            typed.destroy()
        }
    }, [])
    const [imageLoaded, setImageLoaded] = useState(false)
    function handleImageLoad() {
        setImageLoaded(true)
    }
    return (
        <section className='home section grid'>
            <img src={Profile} alt='' className={`home__img ${imageLoaded ? 'loaded' : ''}`} onLoad={handleImageLoad} />
            <div className='home__content'>
                <div className='home__data'>
                    <h1 className='home__title'>
                        <span>I'm Shri Om Prasad.</span> <span ref={typedRef}></span>
                    </h1>

                    <p className='home__description'>
                        Proactive and innovative Computer Science
                        Engineering student with a strong technical
                        background and a collaborative mindset. Passionate
                        about applying technology to solve real-world
                        challenges, with a keen interest in finance and data
                        driven solutions. Committed to leveraging my
                        programming and analytical skills to make
                        impactful contributions.
                    </p>

                    <Link to='/about' className='button moreabout'>
                        More About Me{' '}
                        <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className='color_block'>
            </div>
        </section>
    )
}

export default Home