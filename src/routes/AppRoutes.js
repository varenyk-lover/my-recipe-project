import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import {HomePage} from '../pages/HomePage/HomePage';
import {SingleRecipe} from '../pages/SingleRecipe/SingleRecipe';
import {UsersTips} from '../pages/UsersTips/UsersTips';
import {FavouriteRecipes} from '../pages/FavouriteRecipes/FavouriteRecipes';
import StartPageMainComponent from "../pages/StartPageMain/StartPageMainComponent";




export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StartPageMainComponent/>} />

            <Route path="/home" element={<HomePage/>} />


            <Route path="/recipe/:id" element={<SingleRecipe/>} />


            <Route path="/favouriterecipes" element={<FavouriteRecipes/>} />
            <Route path="/userstips" element={<UsersTips/>} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
