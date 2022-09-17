import axios from 'axios';

const url = 'https://tasty.p.rapidapi.com';

export const instance = axios.create({
    baseURL: url,
    headers: {
        'X-RapidAPI-Key': '677d73c48fmsh86ae0c20526fd1fp1474b6jsn71e4589561db',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
});
