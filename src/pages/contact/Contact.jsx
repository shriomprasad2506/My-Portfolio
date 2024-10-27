import React from 'react'
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaGithub ,
} from "react-icons/fa"

import { SiLeetcode } from "react-icons/si";

import { FiSend } from "react-icons/fi"

import "./contact.css"

const Contact = () => {
    return (
        <section className='contact section' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
            <h2 className='section__title'>
                Get In <span>Touch</span>
            </h2>
            <div className='contact__container container grid'>
                <div className='contact__data'>
                    <h3 className='contact__title'>
                        Don't be Shy !
                    </h3>
                    <p className='contact__description'>
                        Feel free to get in touch wih me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className='contact__info'>
                        <div className='info__item'>
                            <FaEnvelopeOpen className='info__icon' />

                            <div className='info__center'>
                                <span className='info__title'>Mail me</span>
                                <h4 className='info__desc'>shriomprasad0@gmail.com</h4>
                            </div>
                        </div>

                        <div className='info__item'>
                            <FaPhoneSquareAlt className='info__icon' />

                            <div className='info__center'>
                                <span className='info__title'>Call me</span>
                                <h4 className='info__desc'>+91 89721 60828</h4>
                            </div>
                        </div>
                    </div>

                    <div className='contact__socials'>
                        <a href="https://github.com/shriomprasad2506" className='contact__social-link'>
                            <FaGithub  />
                        </a>
                        <a href="https://leetcode.com/u/shriomprasad36/" className='contact__social-link'>
                            <SiLeetcode  />
                        </a>
                    </div>
                </div>

                <form className='contact__form'>
                    <div className='form__input-group'>
                        <div className='form__input-div'>
                            <input type='text' placeholder='Your Name' className='form__control' />
                        </div>

                        <div className='form__input-div'>
                            <input type='email' placeholder='Your Email' className='form__control' />
                        </div>

                        <div className='form__input-div'>
                            <input type='text' placeholder='Your Subject' className='form__control' />
                        </div>
                    </div>

                    <div className='form__input-div'>
                        <textarea placeholder='Your Message' className='form__control textarea'></textarea>
                    </div>
                    <button className='button'>
                        Send Message<span className='button__icon contact__button-icon'>
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact