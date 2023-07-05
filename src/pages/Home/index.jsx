import React from "react";
import { Link } from "react-router-dom";
import { LiaFileDownloadSolid } from 'react-icons/lia';
import { PiCaretRightBold } from 'react-icons/pi';
import styles from './styles.module.scss';
import profile from '../../assets/profile.png';
import currilum from '../../assets/curriculum.pdf';

function Home() {
    return (
        <>
            <div className={styles.container}>
                <header>
                    <nav>
                        <ul className={styles.container_list}>
                            <Link to="/" className={styles.list_item} >Home </Link>
                            <Link to="/projetos" className={styles.list_item} >Projetos </Link>                            
                            <Link to="/contato" className={styles.list_item} >Contato </Link>
                        </ul>
                    </nav>
                </header>

                <main>
                    <section className={styles.container_text}>
                        <div>
                            <h1 className={styles.title} >
                                Wiliam Roza
                            </h1>
                            <span className={styles.subtitle} >
                                Sobre mim: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </span>
                        </div>

                        <div className={styles.container_img}>
                            <img src={profile} alt="Foto de Wiliam Roza" />
                        </div>

                        <div className={styles.btn_container}>
                            <a href={currilum} download='currilum_devfrontwill={ Wiliam Roza }'>
                                Baixar CV
                                <LiaFileDownloadSolid
                                    className={styles.icon}
                                    size={20}
                                    color="#FFF"
                                />
                                <PiCaretRightBold
                                    size={17}
                                    color="#FFF"
                                />
                            </a>
                        </div>
                    </section>
                </main>

                <footer>
                    <section className={styles.container_h3}>
                        <h3>Worked with:</h3>
                    </section>

                    <section>
                        <nav>
                            <ul className={styles.container_footer} >
                                <li className={styles.footer_item} >JavaScript</li>
                                <li className={styles.footer_item} >React</li>
                                <li className={styles.footer_item} >React Native</li>
                                <li className={styles.footer_item} >Sass</li>
                                <li className={styles.footer_item} >Git & Github</li>
                                <li className={styles.footer_item} >TypeScript</li>
                                <li className={styles.footer_item} >Scrum</li>
                                <li className={styles.footer_item} >TailwindCSS</li>
                            </ul>
                        </nav>
                    </section>
                </footer>
            </div>

        </>
    )
}


export default Home;