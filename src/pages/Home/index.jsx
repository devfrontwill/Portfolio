import React from "react";
import { LiaFileDownloadSolid } from 'react-icons/lia';
import { PiCaretRightBold } from 'react-icons/pi';
import styles from './styles.module.scss';
import profile from '../../assets/profile.png';
import currilum from '../../assets/curriculum.pdf';
import Menu from '../../components/Menu';
import Javascript from '../../assets/javascript-logo.png';
import Reactlogo from '../../assets/react-logo.png';
import ReactNativelogo from '../../assets/react-native-logo.png';
import Sass from '../../assets/sass-logo.png';
import Git from '../../assets/git-logo.png';
import Github from '../../assets/github-logo.png';
import Typescript from '../../assets/typescript-logo.png';
import Scrum from '../../assets/scrum-logo.png';
import StyledComponents from '../../assets/styled-logo.png';


function Home() {
    return (
        <>
            <div className={styles.container}>
                <Menu />

                <main>
                    <div className={styles.container_img}>
                        <img src={profile} alt="Foto de Wiliam Roza" />
                    </div>

                    <section >
                        <div className={styles.container_text}>
                            <h1 className={styles.title} >
                                Olá, me chamo Wiliam Roza
                            </h1>
                            <span className={styles.subtitle} >
                                Sobre mim: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </span>

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

                        </div>
                    </section>

                    <section>
                        <h3 className={styles.footer__title}>Tecnologias que trabalho e possuo conhecimento :</h3>
                        <nav>
                            <ul className={styles.container_footer} >
                                <li className={styles.footer_item} >
                                    <img className={styles.logo} alt="javascript logo" src={Javascript} />
                                </li>
                                <li className={styles.footer_item} >
                                    <img className={styles.logo} alt="react logo" src={Reactlogo} />
                                </li>
                                <li className={styles.footer_item} >
                                    <img className={styles.logo} alt="react native logo" src={ReactNativelogo} />
                                </li>
                                <li className={styles.footer_item} >
                                    <img className={styles.logo} alt="sass logo" src={Sass} />
                                </li>
                                <li className={styles.footer_item} >
                                    <img className={styles.logo} alt="git logo" src={Git} />
                                </li>
                                <li className={styles.footer_item} >
                                    <img className={styles.logo} alt="github logo" src={Github} />
                                </li>
                                <li className={styles.footer_item} >
                                    <img className={styles.logo} alt="typescript logo" src={Typescript} />
                                </li>
                                <li className={styles.footer_item} >
                                    <img className={styles.logo} alt="scrum agile logo" src={Scrum} />
                                </li>
                                <li className={styles.footer_item} >
                                    <img className={styles.logo} alt="styled components logo" src={StyledComponents} />
                                </li>
                            </ul>
                        </nav>
                    </section>
                </main>


                <footer className={styles.copyright} >
                    © Copyright Devfrontwill - 2023 All rights reserved
                </footer>


            </div>

        </>
    )
}


export default Home;