import React from "react";
import styles from './styles.module.scss';
import logoprime from '../../assets/devprime.png';
import logoDevCars from '../../assets/logodevcars.png'
import playstorebtn from '../../assets/googleplay.png';
import devauth from '../../assets/devauth.png';
import Button from "../Button";
import CardMobile from "../CardMobile";

function ProjetosMobile() {
    return (

        <section className={styles.container}>

            <h1 className={styles.title} >
                Projetos Mobile Desenvolvidos com React Native
            </h1>

            <CardMobile
                title="Dev Prime Movie Guide"
                subtitle="O DevPrime Movie Guide, é um app que lista para o usuário algumas listas de filmes classificadas em três diferentes categorias, são elas: Filmes em cartaz, Filmes Populares e Filmes mais votados ou seja os melhores avaliados pela Movie DB. Este app serve para aquela pessoa que busca assistir algo em sua plataforma de stream de preferencia, porem que não acompanha o mundo cinematografico e através deste app leve e de fácil utilização, conseguirá consultar, ter acesso as sinopses dos filmes, as suas avaliações e ainda poderá salvar os filmes de sua preferencia para poupar futuras buscas, podendo excluir quando não se fizer mais necessário."
                image={logoprime}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/AndroidApp-Dev-Prime-Movie-Guide"} />

            <a className={styles.container__btn} href="https://play.google.com/store/apps/details?id=com.devfrontwill.appmovies" target="_blank" >
                <img className={styles.btn} src={playstorebtn} />
            </a>

            <CardMobile
                title="DevCars App"
                subtitle="Dev Cars App é uma aplicação de compra e venda entre usuarios cadastrados.
                            Compre, venda, pesquise os preços atuais do mercado com base nos anuncios de outros usuarios.
                            Cadastre seu veiculo com o maximo de descrição possivel para facilitar o entendimento de terceiros e assim conseguir alcançar a venda de forma mais rápida e eficaz.
                            Junte-se aos outros usuarios e faça parte desta comunidade totalmente grátis e sem anuncios ."
                image={logoDevCars}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/DevCars-SemiNovos-App"} />

            <a className={styles.container__btn} href="https://play.google.com/store/apps/details?id=com.devfrontwill.DevCars_SemiNovos" target="_blank" >
                <img className={styles.btn} src={playstorebtn} />
            </a>

            <CardMobile
                title="Dev Auth (supabase)"
                subtitle="Dev Auth com Supabase é um App no qual eu criei um sistema de autenticação de usuario utilizando os serviços de autenticação do Supabase, além de implementar e configurar a confirmação de email pós cadastro, para garantir que o usuario se cadastre na aplicação utilizando um email válido. Neste App temos um fluxo de criação de conta com validação via email, Após temos uma tela de login para faze-lo utilizando suas credenciais cadastradas no App e após fazer o login o usuario vai para o que seria a tela de Perfil do usuario logado, com um botão para fazer logoff e retornar a tela de login."
                image={devauth}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/App-Auth-Supabase"} />

            <a className={styles.container__btn} href="https://play.google.com/store/apps/details?id=com.devfrontwill.AppAuthsupabase" target="_blank" >
                <img className={styles.btn} src={playstorebtn} />
            </a>

        </section>
    )
}

export default ProjetosMobile;