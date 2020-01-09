import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from 'store/actionTypes';

function favouritesReducer(state = [], action) {
    switch(action.type){
        case ADD_TO_FAVOURITES:
            return [...state, action.payload.id];
        case REMOVE_FROM_FAVOURITES:
            return state.filter(id => id !== action.payload.id);
        default:
            return state;
    }
}

export default favouritesReducer;