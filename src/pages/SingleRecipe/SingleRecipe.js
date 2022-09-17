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
    const [recipe, setRecipe] = useState({
        data: [],
        loading: false,
    });


    const {id} = useParams();

    useEffect(() => {
        setRecipe({loading: true});
        const res = fetchSingleRecipe(id);
        res.then((data) => setRecipe({data: data, loading: false}));
    }, [id]);


    return (
        <div>
            <HeaderComponent/>
            <div className={styles.mainWrap}>
                <div className={styles.colorBlock}></div>
                <NavBarComponent/>

                {recipe.loading ? (
                    <h1 style={{marginTop: '200px', marginBottom: '100px'}}>
                        Loading...
                    </h1>
                ) : (
                    <RecipeMainSectionComponent recipe={recipe.data}/>
                )}
                <AsideComponent/>
            </div>
            <FooterComponent/>
        </div>
    );
};