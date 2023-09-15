import React from "react";
import styles from './styles.module.scss';
import work1 from '../../assets/webdevlink.png';
import work2 from '../../assets/devspace.png';
import work3 from '../../assets/calcimc.png';
import Button from "../Button";
import Card from "../Card";


function ProjetosWeb() {
    return (
        <section className={styles.container}>

            <h1 className={styles.title} >
                Projetos Web com JavaScript Vanilla e React
            </h1>
            <span className={styles.subtitle}>Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>

            <Card
                title="DevLink Shortener"
                subtitle="DevLink Shortener é uma aplicação desenvolvida para que o usuário possa obter links encurtados com o objetivo de facilitar o uso de links extensos, seja para mostrar em um perfil de rede social ou afins. É uma aplicação dinâmica, que possui uma página inicial onde o usuário pode digitar ou colar o seu link que deseja encurtar, feito isso todo link encurtado é automaticamente armazenado na seção Meus Links onde o usuário consegue consultar a lista de links encurtados que ali ficam salvos, também é possivel deletar os links encurtados salvos que não forem mas utilizados. Foi utilizado a API do bit.ly, porém por ser FREE tem um baixo limite quantitativo para encurtamento de links."
                image={work1}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/devlink-shortener"} />

            <Card
                title="Dev Space"
                subtitle="Dev Space é uma aplicação desenvolvida para um teste técnico de uma vaga de pessoa desenvolvedora front-end jr . Se trata de uma galeria de imagens criada para a empresa Alura com o objetivo de exibir as imagens incríveis que ela produz do universo observável. É uma aplicação estática, que possui apenas uma página inicial mas que é altamente escalável para adição de novas funcionalidades!"
                image={work2}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/DevSpace"} />

            <Card
                title="DevCalc IMC"
                subtitle="Uma aplicação simples mas dinâmica feita apenas para praticar e exercitar o uso do Hook UseState do Reactjs, neste projeto eu criei uma calculadora de IMC com layout simples, porém responsivo."
                image={work3}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/calc-imc_reactjs"} />

        </section>
    )
}

export default ProjetosWeb;
