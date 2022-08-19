import React from "react";
import {Button} from '@mui/material';

import styles from './StandartButton.module.scss';


export const StandartButtonComponent = ({ onPress, title, toDisable, }) => {

    return (
        <Button onClick={onPress} disabled={toDisable} className={styles.buttonStyle} size="medium" variant="contained"
                sx={{bgcolor: '#d54215', fontWeight: 500, fontFamily: 'Poppins', minWidth: 108 }}>{title}
        </Button>
    );
}