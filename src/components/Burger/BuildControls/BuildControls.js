import React from 'react';
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl";


const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon ", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"},
];

export default function BuildControls(props) {

    return (
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctr => (
                <BuildControl
                 key={ctr.label}
                 label={ctr.label}
                 added={()=>props.ingredientAdded(ctr.type)}
                 removed={()=>props.ingredientRemoved(ctr.type)}
                 disabled={props.disabled[ctr.type]}
                 />
            ))}
            <button 
            className={styles.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
}
