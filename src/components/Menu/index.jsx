import React from "react";
import styles from './styles.module.scss';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <header>
            <nav>
                <ul className={styles.container_list}>
                    <Link to="/" className={styles.list_item} >Home </Link>
                    <Link to="/projetos" className={styles.list_item} >Projetos </Link>
                    <Link to="/contato" className={styles.list_item} >Contato </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Menu;
