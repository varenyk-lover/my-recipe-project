import axios from 'axios';

const url = 'https://tasty.p.rapidapi.com';

export const instance = axios.create({
    baseURL: url,
    headers: {
        'X-RapidAPI-Key': 'c6e800d244mshf6b3dbecf1d35fdp13f07fjsn78a782be4adf',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
});
