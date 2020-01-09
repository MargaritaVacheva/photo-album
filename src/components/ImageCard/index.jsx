import React from 'react';
import { connect } from 'react-redux';
import { addToFavourites, removeFromFavourites } from 'store/actions';

const ImageCard = ({ id, title, url, isInFavourites, addToFavourites, removeFromFavourites }) => {
    return (
        <div className="photo-card" key={id}>
            <img src={url} alt={title} />
            <p>{title}</p>
            {!isInFavourites ?
                <button
                    className="add"
                    onClick={() => addToFavourites(id)}>Add to Favourites</button> :
                <button
                    className="favourite"
                    onClick={() => removeFromFavourites(id)}>Favourite</button>
            }
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (id) => dispatch(addToFavourites(id)),
    removeFromFavourites: (id) => dispatch(removeFromFavourites(id))
})

export default connect(
    null,
    mapDispatchToProps
)(ImageCard);