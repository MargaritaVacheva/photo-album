import React from 'react';
import { connect } from 'react-redux';

const PhotoAlbum = ({ albumId, photos, isLoading }) => {

    return (
        <section>
            <h3>Photos from album: {albumId}</h3>
            { !isLoading ?
                photos.map(p => {
                    return (
                        <div className="photo-card" key={p.id}>
                            <img src={p.url} alt={p.title} />
                            <span>{p.title}</span>
                        </div>
                    )
                }) :
                <div>Loading...</div>
            }
        </section>
    );
}
const mapStateToProps = (state) => ({
    photos: state.photos.data,
    isLoading: state.photos.isFetching
})

export default connect(
    mapStateToProps
)(PhotoAlbum);