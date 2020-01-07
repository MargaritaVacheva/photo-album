import React, { useState } from 'react';
import PhotoAlbum from '../PhotoAlbum';
import AlbumsLinks from './AlbumsLinks'

const PhotoGallery = () => {
    const [albumId, setAlbumId] = useState(1);
    const albumIds = [1, 2, 3, 4, 5];
    const handleChoosingAlbum = (id) => {
        setAlbumId(id);
    }

    return (
        <section className='photo-gallery'>
            <h1>Photo gallery</h1>
            <AlbumsLinks albumIds={albumIds} 
                handleChoosingAlbum={handleChoosingAlbum}/>
            <PhotoAlbum albumId={albumId}
                albumIds={albumIds} />
            <AlbumsLinks albumIds={albumIds} 
                handleChoosingAlbum={handleChoosingAlbum}/>
        </section>
    );
}

export default PhotoGallery;
