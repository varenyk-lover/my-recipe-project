import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import {fetchSingleRecipe} from '../../api/requests/RecipesList';
import {AsideComponent} from "../../components/Aside/AsideComponent";
import {FooterComponent} from '../../components/Footer/FooterComponent';
import {HeaderComponent} from '../../components/Header/HeaderComponent';
import {NavBarComponent} from '../../components/NavBar/NavBarComponent';
import RecipeMainSectionComponent from '../../components/RecipeMainSection/RecipeMainSectionComponent'
import HomeMainSectionComponent from "../../components/HomeMainSection/HomeMainSectionComponent";

import styles from '../HomePage/HomePage.module.scss';

export const SingleRecipe = () => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        const res = fetchSingleRecipe(id);
        res.then((data) => setRecipe(data));
    }, []);

    const {id} = useParams();

    return (
        <div>
            <HeaderComponent/>
            <div className={styles.mainWrap}>
                <div className={styles.colorBlock}></div>
                <NavBarComponent/>
                <RecipeMainSectionComponent/>
                <AsideComponent/>
            </div>
            <FooterComponent/>
        </div>
    );
};