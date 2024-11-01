import React, { useEffect, useState } from 'react';
import { portfolio } from "../../data";
import PortfolioItem from '../../components/PortfolioItem';
import "./portfolio.css";

const Portfolio = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const images = portfolio.map(item => item.img);
        let loadedImages = 0;

        const handleImageLoad = () => {
            loadedImages += 1;
            if (loadedImages === images.length) {
                setLoading(false);
            }
        };

        images.forEach((imgSrc) => {
            const img = new Image();
            img.src = imgSrc;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad;
        });
        return () => {
            setLoading(true);
        };
    }, [portfolio]);

    return (
        <section className='portfolio section'>
            <h2 className='section__title'>
                My <span>Portfolio</span>
            </h2>

            {loading ? (
                <div className='flex'>
                    <div class="dot-spinner">
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                    </div>
                </div>
            ) : (
                <div className='portfolio__container container grid'>
                    {
                        portfolio.map((item) => {
                            return <PortfolioItem key={item.id} {...item} />
                        })
                    }
                </div>
            )}
        </section>
    );
};

export default Portfolio;
