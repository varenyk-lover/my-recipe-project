import React, {useState} from 'react';
import PaginationControlled from '../Pagination/PaginationComponent';
import MultiActionAreaCard from '../MultiActionAreaCard/MultiActionAreaCardComponent';


import styles from './HomeMainSection.module.scss';

export default function HomeMainSectionComponent() {

    const [page, setPage] = useState(1);

    return (
        <div className={styles.contentContainer}>

                <MultiActionAreaCard
                    page={page}
                />

            <PaginationControlled setPage={setPage} page={page}/>
        </div>
    );
}
