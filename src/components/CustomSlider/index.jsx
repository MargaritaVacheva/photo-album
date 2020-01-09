import React from 'react';
import Slider from "react-slick";
import ImageCard from '../ImageCard';

const CustomSlider = ({ favouritesIds, images }) => {
    const settings = {
        dots: images.length < 20,
        infinite: images.length > 5,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {
                images.map(p => {
                    let isInFavourites = favouritesIds.includes(p.id);
                    return <ImageCard
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        url={p.url}
                        isInFavourites={isInFavourites}
                    />

                })
            }
        </Slider>
    );
}

export default CustomSlider;