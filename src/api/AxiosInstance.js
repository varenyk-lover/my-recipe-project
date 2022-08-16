import axios from 'axios';

const url = 'https://tasty.p.rapidapi.com';

export const instance = axios.create({
    baseURL: url,
    headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
});
