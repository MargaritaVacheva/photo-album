import React from 'react';
import FavouritesCarousel from 'components/FavouritesCarousel';

const Favourites = () => {
    return (
        <section className="favourites">
            <h2>Favourites photos</h2>
            <FavouritesCarousel />
        </section>
    );
}

export default Favourites;