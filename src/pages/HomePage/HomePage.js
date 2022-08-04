import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {RecipesListComponent} from "../../components/RecipesListComponent";

export const HomePage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Homepage</h1>
            <RecipesListComponent/>
        </div>
    );
};