import React from 'react';
import PhotoAlbum from '../PhotoAlbum';
import AlbumsSelector from './AlbumsSelector';

const PhotoGallery = () => {

    return (
        <section className='photo-gallery'>
            <h1>Photo gallery</h1>
            <AlbumsSelector/>
            <PhotoAlbum />
            <AlbumsSelector />
        </section>
    );
}

export default PhotoGallery;
