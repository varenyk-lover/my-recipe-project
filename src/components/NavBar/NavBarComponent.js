import React from "react";

import styles from './NavBar.module.scss';

export const NavBarComponent = () => {
    return (
        <nav className={styles.navBarWrap}>
            <div className={styles.insideWrap}>
                <h2>Search By Tags</h2>
             <div>navbar</div>
            </div>
        </nav>
    );
};