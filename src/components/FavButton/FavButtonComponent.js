import React from "react";
// import {Button} from "@mui/material";
import favIcon from "../../assets/images/fav-icon.svg";
import styles from "../Header/Header.module.scss";

export default function FavButtonComponent() {
    return (
<button className={styles.favIconContainer}>
    <img src={favIcon} className={styles.favIcon}/>
</button>
    );
}
