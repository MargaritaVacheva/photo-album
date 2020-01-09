import React from 'react';
import { connect } from 'react-redux';
import CustomSlider from 'components/CustomSlider';

const FavouritesCarousel = ({ favouritesIds, photos, isLoading }) => {
    
    let favouritePhotos = photos.filter(p => favouritesIds.includes(p.id));

    return (
        <div className="slider-wrapper">
            {!isLoading ?
                <>
                    {favouritePhotos.length > 0 ?
                        <CustomSlider images={favouritePhotos} favouritesIds={favouritesIds}/>
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
