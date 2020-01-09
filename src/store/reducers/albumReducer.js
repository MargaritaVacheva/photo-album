import { SELECT_ALBUM } from 'store/actionTypes';

const initialState = {
    currentAlbum: 1,
    albumsIds: [1, 2, 3, 4, 5]
};

function albumReducer(state = initialState, action) {
    switch(action.type){
        case SELECT_ALBUM:
            return {...state, currentAlbum: action.payload.id }
        default:
            return state;
    }
}

export default albumReducer;