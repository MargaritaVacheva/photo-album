import React from 'react';
import PhotoGallery from '../PhotoGallery';
import Favourites from '../Favourites';

const Main = () => {

    return (
        <main className='main-section'>
            <PhotoGallery />
            <Favourites />
        </main>
    );
}

export default Main;