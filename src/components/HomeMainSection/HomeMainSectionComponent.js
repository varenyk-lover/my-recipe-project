import React, { useState, useEffect } from 'react';
import PaginationComponent from '../Pagination/PaginationComponent';
import MultiActionAreaCard from '../MultiActionAreaCard/MultiActionAreaCardComponent';
import { fetchRecipes } from '../../api/requests/RecipesList';


import styles from './HomeMainSection.module.scss';

export default function HomeMainSectionComponent() {
    const [page, setPage] = useState(1);
    const [recipes, setRecipes] = useState({
        data: [],
        loading: false,
    });

    useEffect(() => {
        setRecipes({ loading: true });
        const res = fetchRecipes(page);
        res.then((data) => setRecipes({ data: [...data.results], loading: false }));
    }, [page]);

    return (
        <div className={styles.contentContainer}>
            {recipes.loading ? (
                <h1 style={{ marginTop: '200px', marginBottom: '100px' }}>
                    Loading...
                </h1>
            ) : (
                <MultiActionAreaCard recipes={recipes.data} page={page} />
            )}

            <PaginationComponent setPage={setPage} page={page} />
        </div>
    );
}