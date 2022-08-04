import { instance } from '../AxiosInstance';

export const fetchRecipes = async () => {
    const response = await instance.get('/recipes/list', {
        params: {size: '40'},

    });

    return response.data;
};

export const fetchSingleRecipe = async (id) => {
    const response = await instance.get('/recipes/get-more-info', {
        params: {id: id},
    });

    return response.data;
};