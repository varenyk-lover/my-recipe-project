import React from 'react';
import {useNavigate} from 'react-router-dom';

import {AsideComponent} from "../../components/Aside/AsideComponent";
import {FooterComponent} from '../../components/Footer/FooterComponent';
import {HeaderComponent} from '../../components/Header/HeaderComponent';
import {NavBarComponent} from '../../components/NavBar/NavBarComponent';

import styles from './HomePage.module.scss';
import HomeMainSectionComponent from '../../components/HomeMainSection/HomeMainSectionComponent';

export const HomePage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <HeaderComponent/>
            <div className={styles.mainWrap}>
                <div className={styles.colorBlock}></div>
                    <NavBarComponent/>
                    <HomeMainSectionComponent/>
                    <AsideComponent/>

            </div>
            <FooterComponent/>
        </div>
    );
};