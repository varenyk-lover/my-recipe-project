import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
// import PaginationRounded from '../Pagination/PaginationComponent';
import styles from './MultiActionAreaCard.module.scss';
import recipeImg from '../../assets/images/french-toast.jpg';
import favIcon from "../../assets/images/fav-icon.svg";


import axios from 'axios';
import {fetchRecipes} from '../../api/requests/RecipesList';
import {Link} from "react-router-dom";

const url = 'https://tasty.p.rapidapi.com';

export default function MultiActionAreaCard({page}) {
    const [recipes, setRecipes] = useState([]);
    // const [genre, setGenre] = useState('');

    useEffect(() => {
        const res = fetchRecipes(page);
        res.then((data) => setRecipes(data.results));
    }, []);

    console.log(recipes);

    return (
        <div className={styles.recipeListWraper}>
            {recipes.map((item) => (
                <Card key={item.id} sx={{maxWidth: 320}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            // image={recipeImg}
                            image={item.thumbnail}
                            alt="green iguana"
                        />
                        <div className={styles.favIconOnCard}>
                            <img src={favIcon} className={styles.favIcon}/>
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <h3>
                                    {item.name}
                                </h3>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>
                                    {item.description}
                                </p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}


        </div>
    );
}
