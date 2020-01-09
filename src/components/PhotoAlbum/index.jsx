import React from 'react';
import { connect } from 'react-redux';

const PhotoAlbum = ({ albumId, photos, isLoading, error }) => {

    return (
        <section>
            <h3>Photos from album: {albumId}</h3>
            {isLoading ?
                <div>Loading...</div> :
                <>
                    {error && <p>{error}</p>}
                    {photos
                        .filter(p => p.albumId === albumId)
                        .map(p => {
                            return (
                                <div className="photo-card" key={p.id}>
                                    <img src={p.url} alt={p.title} />
                                    <span>{p.title}</span>
                                </div>
                            )
                        })}
                </>
            }
        </section>
    );
}
const mapStateToProps = (state) => ({
    albumId: state.albums.currentAlbum,
    photos: state.photos.data,
    isLoading: state.photos.isFetching,
    error: state.photos.error,
})

export default connect(
    mapStateToProps
)(PhotoAlbum);