import { store } from '../store/store';

//transform albumsIds in uri querry param

let { albumsIds } = store.getState().albums

let querryStirng = albumsIds.map((id) => `albumId[]=${id}`).join('&');


let photosUrl = `https://jsonplaceholder.typicode.com/photos?${querryStirng}`;

const errorHandler = res => {
    if (!res.ok) throw new Error(res);
    return res.json()
}

const load = () => {
    return fetch(photosUrl)
        .then(errorHandler)
}

export default load;