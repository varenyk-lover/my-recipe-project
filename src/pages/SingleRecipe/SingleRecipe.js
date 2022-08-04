import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {fetchSingleRecipe} from '../../api/requests/RecipesList';

export const SingleRecipe = () => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        const res = fetchSingleRecipe(id);
        res.then((data) => setRecipe(data));
    }, []);


    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <h1>Page of recipe</h1>
            <div>{recipe.name}</div>
        </div>
    );
};