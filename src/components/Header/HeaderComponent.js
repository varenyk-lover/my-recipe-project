// import React, {useEffect, useState} from 'react';
import React from 'react';

import axios from 'axios';
import {fetchRecipes} from '../../api/requests/RecipesList';
import {Link} from "react-router-dom";
import SearchInputComponent from "../SearchInput/SearchInputComponent";
// import {Button} from "@mui/material";

import styles from './Header.module.scss';

import logo from '../../assets/images/spoon-big-logo.png';
import favIcon from '../../assets/images/fav-icon.svg';
import {LogInButtonComponent} from "../LogInButton/LogInButtonComponent";


const url = 'https://tasty.p.rapidapi.com';

export const HeaderComponent = () => {



    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} ${styles.flexContainer}`}>
                <div className={`${styles.headerLeft}`}>
                    <div className={styles.logoWraper}>
                        <Link to="/">
                                <h1>lovefood
                                    <img src={logo} alt="Image of logo"/>
                                </h1>
                        </Link>
                    </div>
                </div>


                <div className={`${styles.headerCenter} ${styles.flexContainer}`}>

                    <SearchInputComponent/>
                </div>

                <div className={`${styles.headerRight} ${styles.flexContainer}`}>
                    <div className={styles.buttonsBox}>
                        <div className={styles.loginButtonsBox}>
                            <LogInButtonComponent/>
                        </div>

                            <Link to="/favouriterecipes" className={styles.favButtonsBox}>
                                <div className={styles.favIconContainer}>
                                    <button>
                                    <img src={favIcon} className={styles.favIcon}/>
                                    </button>
                                </div>
                            </Link>


                    </div>
                </div>

            </div>
        </header>
    );
};