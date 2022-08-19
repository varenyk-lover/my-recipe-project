import React, {useState} from 'react';
import {Button} from '@mui/material';
import {StandartButtonComponent} from '../StandartButton/StandartButtonComponent';

import styles from './Pagination.module.scss';

export default function PaginationComponent({page, setPage}) {
    const [currentPage, setCurrentPage] = useState(1);

    const prevHandler = () => {
        setCurrentPage(currentPage - 1);
        setPage(page - 6);
    };

    const nextHandler = () => {
        setCurrentPage(currentPage + 1);
        setPage(page + 6);
    };

    return (
        <div className={styles.paginationContainer}>
            <StandartButtonComponent className={styles.buttonStyle}
                                     title="Previous"
                                     onPress={prevHandler}
                                     toDisable={currentPage === 1}
            />

            <StandartButtonComponent sx={{width: 108,}}
                                     title="Next"
                                     onPress={nextHandler}
                                     toDisable={currentPage === 5}
            />
        </div>
    );
}