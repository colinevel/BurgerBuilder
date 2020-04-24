import React from 'react';
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

export default function Burger(props) {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((x, i) => {
            return <BurgerIngredient key={igKey+1} type={igKey} />;
        })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (!transformedIngredients.length) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
