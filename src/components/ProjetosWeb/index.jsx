import React from "react";
import styles from './styles.module.scss';
import work from '../../assets/work1.png'
import work1 from '../../assets/webdevlink.png';
import work2 from '../../assets/devspace.png';
import work3 from '../../assets/calcimc.png';
import Button from "../Button";


function ProjetosWeb() {
    return (
        <section className={styles.container}>

            <h1 className={styles.title} >
                Projetos Web com JavaScript Vanilla e React
            </h1>
            <span className={styles.subtitle}>Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>

            <div className={styles.container__work} >
                <h1 className={styles.title__work} > <u>DevLink Shortener</u> </h1>

                <span className={styles.subtitle__work}>
                    DevLink Shortener é uma aplicação desenvolvida para que o usuário possa obter links encurtados com o objetivo de facilitar o uso de links extensos, seja para mostrar em um perfil de rede social ou afins. É uma aplicação dinâmica, que possui uma página inicial onde o usuário pode digitar ou colar o seu link que deseja encurtar, feito isso todo link encurtado é automaticamente armazenado na seção "meus links" onde o usuário consegue consultar a lista de links encurtados que ali ficam salvos, também é possivel deletar os links encurtados salvos que não forem mas utilizados. Foi utilizado a API do bit.ly, porém por ser FREE tem um baixo limite quantitativo para encurtamento de links. Dito isto, deixarei alguns prints da aplicação em funcionamento.
                </span>

                <div className={styles.container__img}>
                    <img src={work1} alt="foto ilustrativa do projeto" />
                </div>

                <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/devlink-shortener"} />


            </div>

            <div className={styles.container__work} >
                <h1 className={styles.title__work} ><u>Dev Space</u></h1>

                <span className={styles.subtitle__work}>
                    Dev Space é uma aplicação desenvolvida para um teste técnico de uma vaga de pessoa desenvolvedora front-end jr . Se trata de uma galeria de imagens criada para a empresa Alura com o objetivo de exibir as imagens incríveis que ela produz do universo observável. É uma aplicação estática, que possui apenas uma página inicial mas que é altamente escalável para adição de novas funcionalidades!
                </span>

                <div className={styles.container__img}>
                    <img src={work2} alt="foto ilustrativa do projeto" />
                </div>


                <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/DevSpace"} />



            </div>

            <div className={styles.container__work} >
                <h1 className={styles.title__work} > <u> DevCalc IMC </u></h1>

                <span className={styles.subtitle__work}>
                    Uma aplicação simples mas dinâmica feita apenas para praticar e exercitar o uso do Hook UseState do Reactjs, neste projeto eu criei uma calculadora de IMC com layout simples, porém responsivo.
                </span>

                <div className={styles.container__img}>
                    <img src={work3} alt="foto ilustrativa do projeto" />
                </div>


                <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/calc-imc_reactjs"} />



            </div>
        </section>
    )
}

export default ProjetosWeb;