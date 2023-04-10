import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import favIcon from "../../assets/images/fav-icon.svg";
import {fetchRecipes} from '../../api/requests/RecipesList';
import {Link} from "react-router-dom";

import styles from './MultiActionAreaCard.module.scss';



export default function MultiActionAreaCard({page}) {
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        const res = fetchRecipes(page);
        res.then((data) => setRecipes(data.results));
    }, [page]);



    return (

        <div className={styles.recipeListWraper}>
            {recipes.map((item) => (
                <Link to={`/recipe/${item.id}`}>
                    <Card key={item.id} sx={{maxWidth: 320}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={item.thumbnail_url}
                                alt="image of recipe"
                            />
                            <div className={styles.favIconOnCard}>
                                <button>
                                <img  alt="icon of heart" src={favIcon} className={styles.favIcon}/>
                                </button>
                            </div>
                            <CardContent className={styles.cardContentWraper}>
                                <Typography gutterBottom variant="h5" component="div">
                                    <h4>
                                        {item.name}
                                    </h4>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <p>
                                        {item.description === "" ? <span>This is so tasty that we even couldn't describe! Just tap the banner to learn more. You will definitely love it</span> : <span> {item.description.slice(0, 100)}</span>}
                                        ...
                                    </p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            ))}


        </div>
    );
}
