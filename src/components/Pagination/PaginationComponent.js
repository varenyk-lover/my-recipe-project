import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';

import styles from "../HomeMainSection/HomeMainSection.module.scss";
export default function PaginationRounded() {

    return (
        <Stack spacing={2} className={styles.paginationContainer}>
            {/*<Pagination count={10} shape="rounded" />*/}
            <Pagination count={7} variant="outlined" shape="rounded" />
        </Stack>

    // <Stack spacing={2}>
    //     <Pagination count={7} page={page} onChange={()=> setPage(page + 1)} />
    // </Stack>
    );
}
