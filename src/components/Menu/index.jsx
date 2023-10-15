import React from "react";
import styles from './styles.module.scss';
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

function Menu() {
    return (
        <header>
            <nav>
                <ul className={styles.container_list}>
                    <Link to="/" className={styles.list_item} >Home </Link>
                    <Link to="/projetos" className={styles.list_item} >Projetos </Link>
                    <Link to="/contato" className={styles.list_item} >Contato </Link>
                    
                    <Link to="https://www.linkedin.com/in/devfrontwill" className={styles.social_item} target="_blank" >
                        <BsLinkedin
                            color="#fff"
                            size={22}
                        />
                    </Link>

                    <Link to="https://github.com/devfrontwill" className={styles.social_item} target="_blank">
                        <BsGithub
                            color="#fff"
                            size={22}
                        />
                    </Link>

                    <Link to="https://instagram.com/wiliam.rozza" className={styles.social_item} target="_blank">
                        <BsInstagram
                            color="#fff"
                            size={22}
                        />
                    </Link>

                </ul>
            </nav>
        </header>
    )
}

export default Menu;
