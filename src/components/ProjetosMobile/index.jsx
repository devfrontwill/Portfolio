import React from "react";
import styles from './styles.module.scss';
import work3 from '../../assets/calcimc.png';
import logoprime from '../../assets/devprime.png';
import logolink from '../../assets/devlink.png';
import playstorebtn from '../../assets/googleplay.png';
import Button from "../Button";
import Card from "../Card";

function ProjetosMobile() {
    return (

        <section className={styles.container}>

            <h1 className={styles.title} >
                Projetos Mobile Desenvolvidos com React Native
            </h1>
            <span className={styles.subtitle}>Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>

            <Card
                title="Dev Prime Movie Guide"
                subtitle="O DevPrime Movie Guide, é um app que lista para o usuário algumas listas de filmes classificadas em três diferentes categorias, são elas: Filmes em cartaz, Filmes Populares e Filmes mais votados ou seja os melhores avaliados pela Movie DB. Este app serve para aquela pessoa que busca assistir algo em sua plataforma de stream de preferencia, porem que não acompanha o mundo cinematografico e através deste app leve e de fácil utilização, conseguirá consultar, ter acesso as sinopses dos filmes, as suas avaliações e ainda poderá salvar os filmes de sua preferencia para poupar futuras buscas, podendo excluir quando não se fizer mais necessário."
                image={logoprime}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/AndroidApp-Dev-Prime-Movie-Guide"} />

            <a className= {styles.container__btn} href="https://play.google.com/store/apps/details?id=com.devfrontwill.appmovies" target="_blank" >
                <img className={styles.btn} src={playstorebtn} />
            </a>

            <Card
                title="DevLink Shortener"
                subtitle="DevLink Shortener é uma aplicação desenvolvida para que o usuário possa obter links encurtados com o objetivo de facilitar o uso de links extensos, seja para mostrar em um perfil de rede social ou afins. É uma aplicação dinâmica, que possui uma tela inicial onde o usuário pode digitar ou colar o seu link que deseja encurtar, feito isso todo link encurtado é automaticamente armazenado na seção Meus Links onde o usuário consegue consultar a lista de links encurtados que ali ficam salvos, também é possivel deletar os links encurtados salvos que não forem mas utilizados. Foi utilizado a API do bit.ly, porém por ser FREE tem um baixo limite quantitativo para encurtamento de links."
                image={logolink}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/AndroidApp-DevLink-Shortener"} />

            <a className= {styles.container__btn} href="https://play.google.com/store/apps/details?id=com.devfrontwill.devlinkshortenerapp" target="_blank" >
                <img className={styles.btn} src={playstorebtn} />
            </a>

        </section>
    )
}

export default ProjetosMobile;