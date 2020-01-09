import { combineReducers } from 'redux';
import favouritesReducer from 'store/reducers/favouritesReducer';
import photosReducer from 'store/reducers/photosReducer';
import albumReducer from 'store/reducers/albumReducer';

export const rootReducer = combineReducers({
    favourites: favouritesReducer,
    photos: photosReducer,
    albums: albumReducer
})