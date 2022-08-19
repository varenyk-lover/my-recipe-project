import React from 'react';
import {Button} from "@mui/material";
import styles from './LogInButton.module.scss';


export const LogInButtonComponent = () => {
    return (
        <Button className={styles.buttonStyle} size="medium" variant="contained"
                sx={{bgcolor: 'rgb(247, 175, 49)', fontWeight: 500, fontFamily: 'Poppins',}}>Log in
        </Button>
    );
};