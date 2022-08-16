import React from 'react';
import {Button} from "@mui/material";

import styles from './Pagination.module.scss';
export default function PaginationComponent({page, setPage}) {
    return (
        <div className={styles.paginationContainer}>
            <Button size="medium" variant="contained"
                    sx={{bgcolor: '#d54215', width: '108px'}} onClick={() => setPage(page = page + 6)}>Next</Button>
            <Button size="medium" variant="contained"
                    sx={{bgcolor: '#d54215', width: '108px'}} onClick={() => setPage(page = page - 6)}>Previous</Button>

        </div>
    );
}