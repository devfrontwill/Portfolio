import React from "react";
import styles from './styles.module.scss';
import work1 from '../../assets/work1.png'
import Button from "../Button";

function ProjetosWeb() {
    return (
        <section className={styles.container}>

            <h1 className={styles.title} >
                Projetos Web com JavaScript Vanilla e React
            </h1>
            <span className={styles.subtitle}>Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>

            <div className={styles.container__work__right} >
                <h1 className={styles.title__work__right} >Work Name Here</h1>

                <span className={styles.subtitle__work__right}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
                </span>

                <div className={styles.container__img}>
                    <img src={work1} alt="foto ilustrativa do projeto" className="img__right" />
                </div>


                <Button title="Visualizar Projeto" />



            </div>

            <div className={styles.container__work__right} >
                <h1 className={styles.title__work__right} >Work Name Here</h1>

                <span className={styles.subtitle__work__right}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
                </span>

                <div className={styles.container__img}>
                    <img src={work1} alt="foto ilustrativa do projeto" className="img__right" />
                </div>


                <Button title="Visualizar Projeto" />



            </div>

            <div className={styles.container__work__right} >
                <h1 className={styles.title__work__right} >Work Name Here</h1>

                <span className={styles.subtitle__work__right}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
                </span>

                <div className={styles.container__img}>
                    <img src={work1} alt="foto ilustrativa do projeto" className="img__right" />
                </div>


                <Button title="Visualizar Projeto" />



            </div>
        </section>
    )
}

export default ProjetosWeb;