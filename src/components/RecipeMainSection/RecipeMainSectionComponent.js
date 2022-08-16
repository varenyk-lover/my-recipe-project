import React, {useEffect, useState} from 'react';
import {fetchSingleRecipe} from "../../api/requests/RecipesList";
import {useParams} from "react-router-dom";
import {Button} from "@mui/material";
import timerIcon from '../../assets/images/timer-icon.svg';
import spoonIcon from '../../assets/images/spoon-icon.svg';
import FavButtonComponent from "../FavButton/FavButtonComponent";

import homeMainStyles from '../HomeMainSection/HomeMainSection.module.scss';
import styles from './RecipeMainSection.module.scss';
import favIcon from "../../assets/images/fav-icon.svg";

export default function RecipeMainSectionComponent() {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        const res = fetchSingleRecipe(id);
        res.then((data) => setRecipe(data));
    }, []);

    const {id} = useParams();


    return (
        <div className={homeMainStyles.contentContainer}>

            <div className={styles.titleContainer}>
                <div className={styles.headingContainer}>
                    <h1>{recipe.name}</h1>
                </div>

                <p>
                    {recipe.description === null ? <span>Let's create something tasty😋</span> :
                        <span>{recipe.description}</span>}
                </p>
            </div>

            <div className={styles.recipeContainer}>
                <div className={styles.imageContainer}>

                    <div className={styles.imageCard}>
                        <img className={styles.image} src={recipe.thumbnail_url}/>
                        <div className={styles.favIconOnCard}>
                            <button>
                                <img src={favIcon} className={styles.favIcon}/>
                            </button>
                        </div>
                    </div>

                    <div className={styles.servingsContainer}>
                        <h3>Prep: {recipe.prep_time_minutes ? <span>{recipe.prep_time_minutes} mins</span> :
                            <span>no info</span>}</h3>
                        <h3>Cook: {recipe.cook_time_minutes ? <span>{recipe.cook_time_minutes} mins</span> :
                            <span>no info</span>}</h3>
                        <h3>Total: {recipe.total_time_minutes ? <span>{recipe.total_time_minutes} mins</span> :
                            <span>no info</span>}</h3>
                        <h3>Servings: {recipe.num_servings ? <span>{recipe.num_servings}</span> :
                            <span>no info</span>}</h3>
                        <span className={styles.timerIcon}><img src={timerIcon}/></span>
                    </div>
                </div>


                <div className={styles.mediaAndDetailsContainer}>
                    {recipe.original_video_url &&
                        <div className={styles.videoDetailsContainer}>
                            <video className={styles.videoContainer}
                                   width="auto" height="500" controls preload="auto" autoPlay="" name="media"
                                   src={recipe.original_video_url}>
                            </video>
                        </div>}


                    <div className={styles.tagsContainer}>
                        {recipe.tags?.map((item) =>
                            <Button key={item.id} size="small" variant="contained"
                                    sx={{bgcolor: '#d54215',}}>{item.display_name}</Button>
                        )}

                    </div>
                </div>


                <div className={`${styles.indredientsContainer} ${styles.instructionsStyle}`}>
                    <h2>Ingredients</h2>
                    <div className={styles.unorderedListContainer}>
                        {recipe.sections && recipe.sections[0]?.components?.map((item) =>
                            <li key={item.id}>{item.raw_text}</li>
                        )}
                    </div>

                    <h2>Special</h2>
                    <div className={styles.unorderedListContainer}>
                        {recipe.sections && recipe.sections[1]?.components?.map((item) =>
                            <li key={item.id}>{item.raw_text}</li>
                        )}
                    </div>
                </div>

                <div className={`${styles.directionsContainer} ${styles.instructionsStyle}`}>
                    <h2>Directions
                        <span className={styles.spoonIconWraper}><img src={spoonIcon}/></span>
                    </h2>

                    <div className={styles.orderedListContainer}>
                        <ol>
                            {recipe.instructions?.map((item) =>
                                <li key={item.id}>{item.display_text}</li>
                            )}
                        </ol>
                    </div>
                </div>

            </div>

        </div>
    );
}
