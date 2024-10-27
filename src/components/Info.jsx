import React from 'react'
import { personalInfo } from '../data'

const Info = () => {
    return (
        <>
            {personalInfo.map(({title,description},index) => {
                return (
                    <li className='' key={index} >
                        <span className='info__title'>{title}</span>
                        <span className='info_description'>{description}</span>
                    </li>
                )
            })}
        </>
    )
}

export default Info