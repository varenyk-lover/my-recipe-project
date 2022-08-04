import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {fetchRecipes} from '../api/requests/RecipesList';
import {Link} from "react-router-dom";

const url = 'https://tasty.p.rapidapi.com';

export const RecipesListComponent = () => {
    const [recipes, setRecipes] = useState([]);
    // const [genre, setGenre] = useState('');

    useEffect(() => {
        const res = fetchRecipes();
        res.then((data) => setRecipes(data.results));
    }, []);

    // useEffect(() => {
    //   axios
    //     .get(`${url}/games`, {
    //       headers: {
    //         'X-RapidAPI-Key':
    //           '',
    //         'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
    //       },
    //       params: genre && {
    //         category: genre,
    //       },
    //     })
    //     .then((res) => setGames(res.data));
    // }, [genre]);

    const ascSort = () => {
        const sortedRecipes = recipes.sort((a, b) =>
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0,
        );

        setRecipes([...sortedRecipes]);
    };

    const descSort = () => {
        const sortedRecipes = recipes.sort((a, b) =>
            a.name > b.name ? -1 : a.name < b.name ? 1 : 0,
        );

        setRecipes([...sortedRecipes]);
    };

    return (
        <div>
            {/*<select onChange={(e) => setRecipes(e.target.value)}>*/}
            {/*    <option value="">All</option>*/}
            {/*    /!*<option value="shooter">Shooter</option>*!/*/}
            {/*    /!*<option value="mmorpg">MMORPG</option>*!/*/}
            {/*</select>*/}

            <button onClick={ascSort}>A-Z</button>
            <button onClick={descSort}>Z-A</button>

            {recipes.map((item) => (
               <Link key={item.id} to={`/recipe/${item.id}`}>
                   <div>{item.name}</div>
               </Link>
            ))}
        </div>
    );
};
