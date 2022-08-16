import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';

import styles from "../HomeMainSection/HomeMainSection.module.scss";

export default function PaginationRounded({page, setPage}) {

    return (
        <div>
            <button onClick={() => setPage(page = page + 6)}>next</button>
            <button onClick={() => setPage(page = page - 6)}>prev</button>

        </div>
    );
}