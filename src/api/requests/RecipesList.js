import {instance} from '../AxiosInstance';

export const fetchRecipes = async (page) => {
    const response = await instance.get('/recipes/list', {
        params: {
            from: page,
            size: '6'
        },
    });

    return response.data;
};


export const fetchRecipesInput = async (page) => {
    const response = await instance.get('/recipes/list', {
        params: {
            from: 0,
            size: '40'
        },
    });

    return response.data;
};


export const fetchSingleRecipe = async (id) => {
    const response = await instance.get('/recipes/get-more-info', {
        params: {id: id},
    });

    return response.data;
};