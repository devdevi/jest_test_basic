import axios from 'axios';

export const getDataFromApi = (url) => {
    return axios.get(url)
        .then(({data}) => data)
        .catch(e => e)
}

export const getDatapi = url =>  axios(url)