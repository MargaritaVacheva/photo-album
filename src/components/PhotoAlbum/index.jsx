import React, { useState, useEffect } from 'react';
import load from '../../services/photo-services';

const PhotoAlbum = ({ albumId, albumIds }) => {
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        load()
        .then(data => {
            let loadedPhotos = data.filter( p => p.albumId === albumId );
            setPhotos(loadedPhotos);
            console.log(loadedPhotos);
        })
        .catch(err => console.log(err))
    }, [albumId])


    return (
        <section>
            <h3>Photos from album: {albumId}</h3>
            { photos ?
                photos.map(p => {
                    return (
                        <div className="photo-card" key={p.id}>
                            <img src={p.url} alt={p.title} />
                            <span>{p.title}</span>
                        </div>
                    )
                }) :
                <div>Loading</div>
            }
        </section>
    );
}

export default PhotoAlbum;