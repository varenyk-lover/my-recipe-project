import React from "react";
import {Link} from "react-router-dom";
import {StandartButtonComponent} from '../StandartButton/StandartButtonComponent';
import styles from './Aside.module.scss';


export const AsideComponent = () => {

    return (
        <aside className={styles.asideWrap}>
            <div className={styles.insideWrap}>
                <h2>Users Tips</h2>
                <div className={styles.imageBox}></div>
                <p>Definitely go with crunchy 🤤🤤 peanut butter...</p>
                <Link to="/userstips" className={styles.buttonLink}>
                    <StandartButtonComponent title="Read more"/>
                </Link>
            </div>
        </aside>
    );
};