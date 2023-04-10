import React from 'react';

import {Link} from "react-router-dom";
import SearchInputComponent from "../SearchInput/SearchInputComponent";

import styles from './Header.module.scss';

import logo from '../../assets/images/spoon-big-logo.png';
import favIcon from '../../assets/images/fav-icon.svg';
import {LogInButtonComponent} from "../LogInButton/LogInButtonComponent";



export const HeaderComponent = () => {

    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} ${styles.flexContainer}`}>
                <div className={`${styles.headerLeft}`}>
                    <div className={styles.logoWraper}>
                        <Link to="/">
                                <h1>lovefood
                                    <img src={logo} alt="company logo"/>
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
                                    <img alt="heart icon" src={favIcon} className={styles.favIcon}/>
                                    </button>
                                </div>
                            </Link>


                    </div>
                </div>

            </div>
        </header>
    );
};