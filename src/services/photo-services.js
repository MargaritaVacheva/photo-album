import { albumIds } from '../utils/constants';

//transform albumIds in uri querry param

let querryStirng = albumIds.map((id) => `albumId[]=${id}`).join('&');


let photosUrl = `https://jsonplaceholder.typicode.com/photos?${querryStirng}`;

const errorHandler = res => {
    if (!res.ok) throw new Error(res.status);
    return res.json()
}

const load = () => {
    return fetch(photosUrl)
        .then(errorHandler)
}

export default load;