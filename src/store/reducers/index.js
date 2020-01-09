import { combineReducers } from 'redux';
import favouritesReducer from './favouritesReducer';
import photosReducer from './photosReducer';
import albumReducer from './albumReducer';

export const rootReducer = combineReducers({
    favourites: favouritesReducer,
    photos: photosReducer,
    albums: albumReducer
})