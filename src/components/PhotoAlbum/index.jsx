import React from 'react';
import { connect } from 'react-redux';
import ImageCard from '../ImageCard';

const PhotoAlbum = ({ albumId, photos, isLoading, error, favourites }) => {

    return (
        <section className="album-gallery">
            <h3>Album: {albumId}</h3>
            {isLoading ?
                <div>Loading...</div> :
                <div className="album-cards">
                    {error && <p>{error}</p>}
                    {photos
                        .filter(p => p.albumId === albumId)
                        .map(p => {
                            let isInFavourites = favourites.includes(p.id);
                            return (
                                <ImageCard
                                    key={p.id}
                                    id={p.id}
                                    title={p.title}
                                    url={p.url}
                                    isInFavourites={isInFavourites} />
                            )
                        })}
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