import React from "react";
import {Link} from "react-router-dom";
// import recipeImg from '../../assets/images/french-toast.jpg';
import {Button} from '@mui/material';
import styles from './Aside.module.scss';


export const AsideComponent = () => {

    return (
        <aside className={styles.asideWrap}>
            <div className={styles.insideWrap}>
                <h2>Users Tips</h2>
                <div className={styles.imageBox}></div>
                <p>Definitely go with crunchy 🤤🤤 peanut butter...</p>
                <Link to="/userstips" className={styles.buttonLink}>
                    <Button size="medium" variant="contained"
                            sx={{bgcolor: '#d54215',}}>Read more
                    </Button>
                </Link>
            </div>
        </aside>
    );
};