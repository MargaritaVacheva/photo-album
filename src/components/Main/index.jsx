import React from 'react';
import PhotoGallery from 'components/PhotoGallery';
import Favourites from 'components/Favourites';

const Main = () => {

    return (
        <main className='main-section'>
            <PhotoGallery />
            <Favourites />
        </main>
    );
}

export default Main;