import { combineReducers } from 'redux';
import favouritesReducer from './favouritesReducer';
import photosReducer from './photosReducer';

export const rootReducer = combineReducers({
    favourites: favouritesReducer,
    photos: photosReducer
})