import React from 'react';
import { connect } from 'react-redux';
import CustomSlider from 'components/CustomSlider';

const PhotoAlbum = ({ albumId, photos, isLoading, error, favourites }) => {

    let images = photos
        .filter(p => p.albumId === albumId);

    return (
        <section className="album-gallery">
            <h3>Album: {albumId}</h3>
            {isLoading ?
                <div>Loading...</div> :
                <div>
                    <CustomSlider images={images} favouritesIds={favourites} />
                    {error && <p>{error}</p>}
                </div>}
        </section>
    );
}

const mapStateToProps = (state) => ({
    albumId: state.albums.currentAlbum,
    photos: state.photos.data,
    isLoading: state.photos.isFetching,
    error: state.photos.error,
    favourites: state.favourites
})

export default connect(
    mapStateToProps
)(PhotoAlbum);