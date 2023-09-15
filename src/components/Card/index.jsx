import React from 'react';
import styles from './styles.module.scss';


export default function Card({ title, subtitle, image }) {
    return (

        <div className={styles.container__work} >
            <h1 className={styles.title__work} > <u>{title}</u> </h1>

            <span className={styles.subtitle__work}> {subtitle} </span>

            <div className={styles.container__img}>
                <img src={image} alt="foto ilustrativa do projeto" />
            </div>
        </div>
    )
}
