const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

const errorHandler = res => {
    if (!res.ok) throw new Error(res.status);
    return res.json()
}

const load = () => {
    return fetch(photosUrl)
        .then(errorHandler)
}

export default load;