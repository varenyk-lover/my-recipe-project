import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import image1 from '../../assets/images/7d148ceaaab14576b56f348124716b61.jpeg';
import image2 from '../../assets/images/download.jpeg';
import {Link} from "react-router-dom";

import styles from './StartPageMain.module.scss';

import {fetchRandomId} from "../../api/requests/RecipesList";

export default function StartPageMainComponent() {

    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        const res = fetchRandomId();
        res.then((data) => setRecipes(data.results));
    }, []);

    const idRecipes = recipes.map((item) => item.id);

    const random = idRecipes[Math.floor(Math.random() * idRecipes.length)];

console.log(random);
    const images = [
        {
            url: image1,
            title: 'Go to homepage',
            width: '50%',
            link: '/home',
        },
        {
            url: image2,
            title: 'Try random recipe',
            width: '50%',
            link: `/recipe/${random}`,
        },

    ];

    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
                opacity: 0.15,
            },
            '& .MuiImageMarked-root': {
                opacity: 0,
            },
            '& .MuiTypography-root': {
                backgroundColor: '#c12e01'
            },
        },
    }));

    const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    });

    const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    }));

    const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    }));

    const ImageMarked = styled('span')(({ theme }) => ({
        // I couldn't delete this const 'cause there is some hide styles from MUI library. Page don't work without it.
    }));

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image) => (

                <ImageButton className={styles.imageBox}
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>

                        <Link  to={image.link}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="white"
                            sx={{
                                backgroundColor: '#d54215',
                                borderRadius: '4px',
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                        </Link>

                    </Image>
                </ImageButton>

            ))}
        </Box>
    );
}
