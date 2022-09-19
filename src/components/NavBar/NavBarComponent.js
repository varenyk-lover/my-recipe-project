import React from "react";

import styles from './NavBar.module.scss';

export const NavBarComponent = () => {
    return (
        <nav className={styles.navBarWrap}>
            <div className={styles.insideWrap}>
                <h3>Search By Tags</h3>
             <div>navbar</div>
            </div>
        </nav>
    );
};