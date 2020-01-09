import {FETCH_PHOTOS_START, FETCH_PHOTOS_ERROR, FETCH_PHOTOS_SUCCESS} from 'store/actionTypes';

const initialState = {
    isFetching: false,
    data: [],
    error: null
}

function photosReducer(state = initialState, action) {
    switch(action.type){
        case FETCH_PHOTOS_START:
            return { ...state, isFetching: true };
        case FETCH_PHOTOS_SUCCESS:
            return { ...state, isFetching: false, data: action.payload.data };
        case FETCH_PHOTOS_ERROR:
            return { ...state, isFetching: false, error: action.payload.error };
        default:
            return state;
    }
}

export default photosReducer;