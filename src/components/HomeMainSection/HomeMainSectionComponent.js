import React, {useState} from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
import PaginationRounded from '../Pagination/PaginationComponent';

import MultiActionAreaCard from '../MultiActionAreaCard/MultiActionAreaCardComponent';

import styles from './HomeMainSection.module.scss';
// import recipeImg from '../../assets/images/french-toast.jpg';


export default function HomeMainSectionComponent() {
    const [page, setPage] = useState(0);

    return (
        <div className={styles.contentContainer}>

                <MultiActionAreaCard page={page}/>

            <PaginationRounded setPage={setPage} page={page}/>
        </div>
    );
}
