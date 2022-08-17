import React, { useState } from 'react';
import { Button } from '@mui/material';

import styles from './Pagination.module.scss';

export default function PaginationComponent({ page, setPage }) {
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
            <Button
                size="medium"
                variant="contained"
                sx={{ bgcolor: '#d54215', width: '108px' }}
                onClick={prevHandler}
                disabled={currentPage === 1}
            >
                Previous
            </Button>
            <Button
                size="medium"
                variant="contained"
                sx={{ bgcolor: '#d54215', width: '108px' }}
                onClick={nextHandler}
                disabled={currentPage === 5}
            >
                Next
            </Button>
        </div>
    );
}