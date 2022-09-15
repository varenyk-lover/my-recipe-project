import React from "react";
import {Link} from "react-router-dom";

import styles from '../Header/Header.module.scss';
import footerstyles from './Footer.module.scss';
import logo from '../../assets/images/spoon-big-logo.png';

export const FooterComponent = () => {
    return (
        <footer className={footerstyles.footerContainer}>
            <div className={footerstyles.footerContentContainer}>
                <div className={styles.logoWraper}>
                    <Link to="/">
                        <h1>lovefood
                            <img src={logo} alt="Image of logo"/>
                        </h1>
                    </Link>
                </div>

                <div>
                    <p>© Copyright 2022. Made by Hanna Horbova.</p>
                </div>

                <div className={footerstyles.footerPolicyWraper}>
                    <div className={footerstyles.footerLinksBox}>
                        <Link to="#">
                            Privacy Policy
                        </Link>
                    </div>

                    <div className={footerstyles.footerLinksBox}>
                        <Link to="#">
                            Terms of Service
                        </Link>
                    </div>

                    <div className={footerstyles.footerLinksBox}>
                        <Link to="#">
                            Ad Choices
                        </Link>
                    </div>

                    <div className={footerstyles.footerLinksBox}>
                        <Link to="#">
                            Web Accessibility
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
};