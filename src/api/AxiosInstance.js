import axios from 'axios';

const url = 'https://tasty.p.rapidapi.com';

export const instance = axios.create({
    baseURL: url,
    headers: {
        'X-RapidAPI-Key': 'e3bc14bf9amsh810a103a9db8d8ep137465jsne496abbca4fb',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
});
