import React from 'react';
import styles from "./NavigationItems.module.css";

export default function NavigationItems(props) {
    return (
        <ul className={styles.NavigationItems}>
            <li 
            className={styles.NavigationItem}>
            <a href="/"
             className={props.active ? styles.active : null}>Burger Builder</a>
             </li>
            <li className={styles.NavigationItem}>
            <a href="/"
             className={props.active ? styles.active : null}>Checkout</a>
             </li>
        </ul>
    )
}
