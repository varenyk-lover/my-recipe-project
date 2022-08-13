import React, {useEffect, useState} from 'react';
import {fetchSingleRecipe} from "../../api/requests/RecipesList";
import {useParams} from "react-router-dom";
import {Button} from "@mui/material";
import timerIcon from '../../assets/images/timer-icon.svg';
import spoonIcon from '../../assets/images/spoon-icon.svg';
// import FavButtonComponent from "../FavButton/FavButtonComponent";

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
                    <div className={styles.favIconContainer}>
                        <img src={favIcon} className={styles.favIcon}/>
                    </div>
                    <h1>{recipe.name}</h1>
                </div>

                <p>
                    {recipe.description === "" ? <span>Let's create something tasty😋</span> :
                        <span>{recipe.description}</span>}
                </p>
            </div>

            <div className={styles.recipeContainer}>
                <div className={styles.imageContainer}><img className={styles.image} src={recipe.thumbnail_url}/>
                </div>

                <div className={styles.mediaAndDetailsContainer}>
                    <div className={styles.videoDetailsContainer}>

                        <video className={styles.videoContainer}
                               width="auto" height="300" controls preload="auto" autoPlay="" name="media">
                            <source
                                src="https://s3.amazonaws.com/video-api-prod/assets/e3001b4735b84539b6df42a0fcb70ee0/CaptainMorgan_MoMojito_BFV93411_SQHero.mp4"
                                type="video/mp4"/>
                        </video>


                        <div className={styles.servingsContainer}>
                            <h3>Prep: <span>{recipe.prep_time_minutes} mins</span></h3>
                            <h3>Cook: <span>{recipe.cook_time_minutes} mins</span></h3>
                            <h3>Total: <span>{recipe.total_time_minutes} mins</span></h3>
                            <h3>Servings: <span>{recipe.num_servings}</span></h3>
                            <span className={styles.timerIcon}><img src={timerIcon}/></span>
                        </div>

                    </div>


                    <div className={styles.tagsContainer}>
                        {/*   {recipe.tags.map((item) =>
                            <Button size="small" variant="contained"
                                    sx={{bgcolor: '#d54215',}}>{item.display_name}</Button>
                        )}*/}

                    </div>
                </div>


                <div className={`${styles.indredientsContainer} ${styles.instructionsStyle}`}>
                    <h2>Ingredients</h2>
                    <div className={styles.unorderedListContainer}>
                        {/*{recipe.sections.map((item) =>*/}
                        {/*    <li>{item.display_text}</li>*/}
                        {/*)}*/}
                    </div>

                    <h2>Special Equipment</h2>
                    <div className={styles.unorderedListContainer}>Map list Ingredients</div>
                </div>

                <div className={`${styles.directionsContainer} ${styles.instructionsStyle}`}>
                    <h2>Directions
                        <span className={styles.spoonIconWraper}><img src={spoonIcon}/></span>
                    </h2>

                    <div className={styles.orderedListContainer}>
                        {recipe.instructions.map((item) =>
                            <li>{item.display_text}</li>
                        )}
                    </div>
                </div>

            </div>

        </div>
    );
}
