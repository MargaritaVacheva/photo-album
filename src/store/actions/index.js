import {
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    SELECT_ALBUM,
    FETCH_PHOTOS_START,
    FETCH_PHOTOS_ERROR,
    FETCH_PHOTOS_SUCCESS
} from '../actionTypes';
import load from '../../services/photo-services';


function addToFavourites(id) {
    return {
        type: ADD_TO_FAVOURITES,
        payload: { id }
    }
}

function removeFromFavourites(id) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: { id }
    }
}

function selectAlbum(id) {
    return {
        type: SELECT_ALBUM,
        payload: { id }
    }
}

//photos actions

function startFetchingPhotos() {
    return {
        type: FETCH_PHOTOS_START
    }
}

function fetchPhotosSuccess(data) {
    return {
        type: FETCH_PHOTOS_SUCCESS,
        payload: { data }
    }
}

function fetchPhotosError(err) {
    return {
        type: FETCH_PHOTOS_ERROR,
        payload: { error: err }
    }
}

function fetchPhotos() {
    return (dispath) => {
        dispath(startFetchingPhotos());
        load()
            .then(data => dispath(fetchPhotosSuccess(data)))
            .catch(err => {
                dispath(fetchPhotosError(err.message))
            })
    }
}


export { addToFavourites, removeFromFavourites, selectAlbum, fetchPhotos };