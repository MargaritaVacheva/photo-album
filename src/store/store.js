import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from 'store/reducers';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['favourites']
}

const persistedReducer = persistReducer( persistConfig, rootReducer );

const store = createStore(persistedReducer,
    {favourites: [] },
    compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const persistor = persistStore(store);

export { store, persistor };