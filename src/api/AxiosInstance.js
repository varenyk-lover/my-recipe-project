import axios from 'axios';

const url = 'https://tasty.p.rapidapi.com';

export const instance = axios.create({
    baseURL: url,
    headers: {
        'X-RapidAPI-Key': 'f55f16dd60msh411c05e60327571p1b55a2jsn7d84bae01dda',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
});
