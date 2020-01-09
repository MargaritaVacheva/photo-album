import {
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
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

function fetchPhotosError(error) {
    return {
        type: FETCH_PHOTOS_ERROR,
        payload: { error }
    }
}

function fetchPhotos() {
    return (dispath) => {
        dispath(startFetchingPhotos());
        load()
            .then(data => dispath(fetchPhotosSuccess(data)))
            .catch(err => dispath(fetchPhotosError(err)))
    }
}


export { addToFavourites, removeFromFavourites, fetchPhotos };