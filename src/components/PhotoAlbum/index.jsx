import React from 'react';
import { connect } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../store/actions'

const PhotoAlbum = ({ albumId, photos, isLoading, error, favourites, addToFavourites, removeFromFavourites }) => {

    return (
        <section className="album-gallery">
            <h3>Photos from album: {albumId}</h3>
            {isLoading ?
                <div>Loading...</div> :
                <div className="album-cards">
                    {error && <p>{error}</p>}
                    {photos
                        .filter(p => p.albumId === albumId)
                        .map(p => {
                            let isInFavourites = favourites.includes(p.id)
                            return (
                                <div className="photo-card" key={p.id}>
                                    <img src={p.url} alt={p.title} />
                                    <p>{p.title}</p>
                                    { !isInFavourites ?
                                        <button onClick={() => addToFavourites(p.id)}>Add to Favourites</button> :
                                        <button onClick={() => removeFromFavourites(p.id)}>Favourite</button>
                                    }
                                </div>
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

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (id) => dispatch(addToFavourites(id)),
    removeFromFavourites: (id) => dispatch(removeFromFavourites(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoAlbum);