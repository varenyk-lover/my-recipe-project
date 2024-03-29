import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {fetchSingleRecipe} from '../../api/requests/RecipesList';
import {AsideComponent} from "../../components/Aside/AsideComponent";
import {FooterComponent} from '../../components/Footer/FooterComponent';
import {HeaderComponent} from '../../components/Header/HeaderComponent';
import {NavBarComponent} from '../../components/NavBar/NavBarComponent';
import RecipeMainSectionComponent from '../../components/RecipeMainSection/RecipeMainSectionComponent'

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
                    <h2 style={{marginTop: '200px', marginBottom: '100px'}}>
                        Loading...
                    </h2>
                ) : (
                    <RecipeMainSectionComponent recipe={recipe.data}/>
                )}
                <AsideComponent/>
            </div>
            <FooterComponent/>
        </div>
    );
};