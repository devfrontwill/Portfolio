import React from "react";
import { LiaFileDownloadSolid } from 'react-icons/lia';
import { PiCaretRightBold } from 'react-icons/pi';
import styles from './styles.module.scss';
import profile from '../../assets/profile.png';
import curriculum from '../../assets/curriculum.pdf';
import Menu from '../../components/Menu';
import { BsLinkedin, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import Javascript from '../../assets/javascript-logo.png';
import Reactlogo from '../../assets/react-logo.png';
import ReactNativelogo from '../../assets/react-native-logo.png';
import Sass from '../../assets/sass-logo.png';
import Git from '../../assets/git-logo.png';
import Github from '../../assets/github-logo.png';
import Typescript from '../../assets/typescript-logo.png';
import Scrum from '../../assets/scrum-logo.png';
import StyledComponents from '../../assets/styled-logo.png';
import whatsapp from '../../assets/whatsapp.svg';
import Aos from "aos";
import 'aos/dist/aos.css';



function Home() {

    Aos.init();

    return (
        <>
            <div className={styles.container}>
                <Menu />

                <main>
                    <div className={styles.container_img} data-aos="fade-down" data-aos-delay="350" data-aos-duration="1500">
                        <img src={profile} alt="Foto de Wiliam Roza" />
                    </div>

                    <section >
                        <div className={styles.container_text}>
                            <h1 className={styles.title} data-aos="fade-up" data-aos-delay="350" data-aos-duration="1500">
                                Olá, me chamo Wiliam Roza
                            </h1>
                            <span className={styles.subtitle} data-aos="fade-left" data-aos-delay="350" data-aos-duration="1000">
                                Estudante de Análise e Desenvolvimento de Sistemas pela Universidade IBMR, e autodidata, venho buscando conhecimento e praticando com cursos, livros e muita documentação das linguagens que utilizo nos meus projetos.
                                Amante de tecnologia desde a adolescência, enxergo hoje a possibilidade de finalmente poder aprender e aplicar o que realmente amo e desejo seguir como carreira para minha vida profissional, e até mesmo como realização pessoal, pois poder exercer aquilo que se gosta é sem dúvidas gratificante.
                                Busco entrar para o mercado de desenvolvimento Front-End Web/Mobile.
                            </span>

                            <div className={styles.btn_container} data-aos="fade-right" data-aos-delay="350" data-aos-duration="1000">
                                <a href={curriculum} download='currilum_devfrontwill={ Wiliam Roza }'>
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
                        <h3
                            className={styles.footer__title}
                            data-aos="zoom-in-down" data-aos-delay="350" data-aos-duration="1500">
                            Tecnologias que trabalho e possuo conhecimento :
                        </h3>
                        <nav>
                            <ul className={styles.container_footer} data-aos="zoom-in-up" data-aos-delay="350" data-aos-duration="1500">
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
                    <div className={styles.social_container}>
                        <h3> © Copyright Devfrontwill - 2023 All rights reserved </h3>
                        <a className={styles.social} target="_blank" href="https://www.linkedin.com/in/devfrontwill">
                            <BsLinkedin color='#FFF' size={24} />
                        </a>

                        <a className={styles.social} target="_blank" href="https://github.com/devfrontwill">
                            <BsGithub color='#FFF' size={24} />
                        </a>

                        <a className={styles.social} target="_blank" href="https://instagram.com/wiliam.rozza">
                            <BsInstagram color='#FFF' size={24} />
                        </a>

                        <a className={styles.social} target="_blank" href="https://api.whatsapp.com/send?phone=5521990556961&text=Ol%C3%A1%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20Portf%C3%B3lio%20!">
                            <BsWhatsapp color='#FFF' size={24} />
                        </a>
                    </div>
                    
                    <a className={styles.btn_whatsapp}
                        data-aos="zoom-in-up" data-aos-delay="400"
                        href="https://api.whatsapp.com/send?phone=5521990556961&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20!"
                    >
                        <img
                            src={whatsapp}
                            alt="Botao whatsapp"
                        />
                        <span className={styles.tooltip_text} > Olá, que tal iniciarmos uma conversa ? </span>
                    </a>
                </footer>



            </div>

        </>
    )
}


export default Home;