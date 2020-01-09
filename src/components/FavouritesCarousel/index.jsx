import React from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import ImageCard from '../ImageCard';

const FavouritesCarousel = ({ favouritesIds, photos, isLoading }) => {
    
    let favouritePhotos = photos.filter(p => favouritesIds.includes(p.id));
    
    const settings = {
        dots: true,
        infinite: favouritePhotos.length > 5,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <div className="slider-wrapper">
            {!isLoading ?
                <>
                    {favouritePhotos.length > 0 ?
                        <Slider {...settings}>
                            {
                            favouritePhotos.map(p => {
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
                        :
                        <p>Choose image from album above to add to your favourites!</p>

                    }
                </>
                :
                <p>Loading...</p>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    favouritesIds: state.favourites,
    photos: state.photos.data,
    isLoading: state.photos.isFetching
})

export default connect(
    mapStateToProps
)(FavouritesCarousel);
