import React from "react";
import styles from './styles.module.scss';
import profile from '../../assets/profile.png';

function Home() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Case Studies</li>
                        <li>Testimonials</li>
                        <li>Recent work</li>
                        <li>Get in Touch</li>
                    </ul>
                </nav>
            </header>

            <main>
                <section>
                    <div classs={styles.container_text}>
                        <h1>
                            Wiliam Roza
                        </h1>
                        <span>
                            Sobre mim: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>

                    <div className={styles.container_img}>
                        <img src={profile} alt="Foto de Wiliam Roza" />
                    </div>

                    <div className={styles.btn_container}>
                        <button>
                            Baixar CV
                        </button>
                    </div>
                </section>
            </main>

            <footer>
                <section className={styles.container_h3}>
                    <h3>Worked with</h3>
                </section>

                <section>
                    <nav>
                        <ul className={styles.ul_footer} >
                            <li className={styles.li_footer} >JavaScript</li>
                            <li className={styles.li_footer} >React</li>
                            <li className={styles.li_footer} >React Native</li>
                            <li className={styles.li_footer} >Sass</li>
                            <li className={styles.li_footer} >Git & Github</li>
                            <li className={styles.li_footer} >TypeScript</li>
                            <li className={styles.li_footer} >Scrum</li>
                            <li className={styles.li_footer} >TailwindCSS</li>                       
                        </ul>
                    </nav>
                </section>
            </footer>

        </>
    )
}


export default Home;