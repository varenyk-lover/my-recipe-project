import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {fetchRecipes} from '../../api/requests/RecipesList';
import {Link} from "react-router-dom";
import SearchInputComponent from "../SearchInput/SearchInputComponent";
import {Button} from "@mui/material";

import styles from './Header.module.scss';

import logo from '../../assets/images/logo-icon.svg';
import favIcon from '../../assets/images/fav-icon.svg';



const url = 'https://tasty.p.rapidapi.com';

export const HeaderComponent = () => {

//         const [recipes, setRecipes] = useState([]);
//
//         useEffect(() => {
//             const res = fetchRecipes();
//             res.then((data) => setRecipes(data.results));
//         }, []);
// /*
//
//         const ascSort = () => {
//             const sortedRecipes = recipes.sort((a, b) =>
//                 a.name > b.name ? 1 : a.name < b.name ? -1 : 0,
//             );
//
//             setRecipes([...sortedRecipes]);
//         };
//
//         const descSort = () => {
//             const sortedRecipes = recipes.sort((a, b) =>
//                 a.name > b.name ? -1 : a.name < b.name ? 1 : 0,
//             );
//
//             setRecipes([...sortedRecipes]);
//         };
// */
//


    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} ${styles.flexContainer}`}>
                <div className={`${styles.headerLeft}`}>
                    {/*<h1>Explore</h1>*/}
                    <div className={styles.logoWraper}>
                        <Link to="/home">
                            <img src={logo}/>
                        </Link>
                    </div>
                </div>


                <div className={`${styles.headerCenter} ${styles.flexContainer}`}>
                    {/*<div className={styles.logoWraper}>*/}
                    {/*    <Link to="/home">*/}
                    {/*        <img src={logo}/>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <SearchInputComponent/>
                </div>

                <div className={`${styles.headerRight} ${styles.flexContainer}`}>
                    <div className={styles.buttonsBox}>
                        <div className={styles.loginButtonsBox}>
                            <Button size="medium" variant="contained"
                                    sx={{bgcolor: 'rgb(247, 175, 49)',}}>Log in
                            </Button>
                        </div>

                            <Link to="/favouriterecipes" className={styles.favButtonsBox}>
                                <div className={styles.favIconContainer}>
                                    <img src={favIcon} className={styles.favIcon}/>
                                </div>
                            </Link>


                    </div>
                </div>

            </div>
        </header>
    );
};