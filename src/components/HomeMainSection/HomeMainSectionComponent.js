import React, {useState} from 'react';
import PaginationComponent from '../Pagination/PaginationComponent';
import MultiActionAreaCard from '../MultiActionAreaCard/MultiActionAreaCardComponent';


import styles from './HomeMainSection.module.scss';

export default function HomeMainSectionComponent() {

    const [page, setPage] = useState(1);

    return (
        <div className={styles.contentContainer}>

                <MultiActionAreaCard
                    page={page}
                />

            <PaginationComponent setPage={setPage} page={page}/>
        </div>
    );
}
