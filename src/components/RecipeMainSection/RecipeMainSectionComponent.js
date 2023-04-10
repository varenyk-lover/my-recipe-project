import React from 'react';

import {Button} from "@mui/material";
import timerIcon from '../../assets/images/timer-icon.svg';
import spoonIcon from '../../assets/images/spoon-little-logo.svg';

import homeMainStyles from '../HomeMainSection/HomeMainSection.module.scss';
import styles from './RecipeMainSection.module.scss';
import favIcon from "../../assets/images/fav-icon.svg";

export default function RecipeMainSectionComponent({recipe}) {


    return (
        <div className={homeMainStyles.contentContainer}>
            {recipe.name ?
            <div>
                <div className={styles.titleContainer}>
                    <div className={styles.headingContainer}>
                        <h2>{recipe.name}</h2>
                    </div>

                    <p>
                        {recipe.description ? <span>{recipe.description}</span> :
                            <span>Let's create something tasty😋</span>}
                    </p>
                </div>

                <div className={styles.recipeContainer}>
                    <div className={styles.imageContainer}>

                        <div className={styles.imageCard}>
                            <img className={styles.image} src={recipe.thumbnail_url} alt="Ready food on plate"/>
                            <div className={styles.favIconOnCard}>
                                <button>
                                    <img src={favIcon} className={styles.favIcon} alt="Icon of heart"/>
                                </button>
                            </div>
                        </div>

                        <div className={styles.servingsContainer}>
                            <h4>Prep: {recipe.prep_time_minutes ? <span>{recipe.prep_time_minutes} mins</span> :
                                <span>no info</span>}</h4>
                            <h4>Cook: {recipe.cook_time_minutes ? <span>{recipe.cook_time_minutes} mins</span> :
                                <span>no info</span>}</h4>
                            <h4>Total: {recipe.total_time_minutes ? <span>{recipe.total_time_minutes} mins</span> :
                                <span>no info</span>}</h4>
                            <h4>Servings: {recipe.num_servings ? <span>{recipe.num_servings}</span> :
                                <span>no info</span>}</h4>
                            <span className={styles.timerIcon}><img src={timerIcon} alt="Icon of timer"/></span>
                        </div>
                    </div>


                    <div className={styles.mediaAndDetailsContainer}>
                        {recipe.original_video_url &&
                            <div className={styles.videoDetailsContainer}>
                                <video className={styles.videoContainer}
                                       width="auto" height="500" controls preload="auto" autoPlay=""
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
                        <h3>Ingredients</h3>
                        <div className={styles.unorderedListContainer}>
                            {recipe.sections && recipe.sections[0]?.components?.map((item) =>
                                <li key={item.id}>{item.raw_text}</li>
                            )}
                        </div>


                        {recipe.sections &&
                            <div className={styles.unorderedListContainer}>
                                <h3>Special</h3>

                                {recipe.sections[1]?.components?.map((item) =>
                                    <li key={item.id}>{item.raw_text}</li>
                                )}
                            </div>

                        }

                        <div className={`${styles.directionsContainer} ${styles.instructionsStyle}`}>
                            <h3>Directions
                                <span className={styles.spoonIconWraper}><img src={spoonIcon} alt="Icon of spoon"/></span>
                            </h3>

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

            </div>

              :  <h2 style={{ marginTop: '200px', marginBottom: '100px' }}>Oops, there is no recipe. Try to find another one.</h2>}
        </div>
    );
}
