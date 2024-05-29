import React from "react";
import styles from './styles.module.scss';
import work1 from '../../assets/webdevlink.png';
import voicegame from '../../assets/voice-game.png';
import barbershop from '../../assets/barbershop.png';
import formbank from '../../assets/formbank.png';
import hamburgueria from '../../assets/hamburgueria.png';
import Button from "../Button";
import Card from "../Card";


function ProjetosWeb() {
    return (
        <section className={styles.container}>

            <h1 className={styles.title} >
                Projetos Web com JavaScript Vanilla e React
            </h1>

            <Card
                title="DevLink Shortener"
                subtitle="DevLink Shortener é uma aplicação desenvolvida para que o usuário possa obter links encurtados com o objetivo de facilitar o uso de links extensos, seja para mostrar em um perfil de rede social ou afins. É uma aplicação dinâmica, que possui uma página inicial onde o usuário pode digitar ou colar o seu link que deseja encurtar, feito isso todo link encurtado é automaticamente armazenado na seção Meus Links onde o usuário consegue consultar a lista de links encurtados que ali ficam salvos, também é possivel deletar os links encurtados salvos que não forem mas utilizados. Foi utilizado a API do bit.ly, porém por ser FREE tem um baixo limite quantitativo para encurtamento de links."
                image={work1}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/devlink-shortener"} />

            <Card
                title="Form Bank Landing Page"
                subtitle="Uma landing page completa com um formulário de cadastro, feito validações dos campos e registro de foto obrigatório para conclusão do cadastro."
                image={formbank}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/FormBank"} />

            <Card
                title="Voice Command Game"
                subtitle="Web App criado utilizando a Web Speech API para fazer a parte de reconhecimento de voz e a idéia foi explorar essa API configurando diversos comandos com Javascript. Dito isto criei um jogo de advinhação por reconhecimento de voz. Foi utilizado funções, feito validações e consumo da API. Foi feito também manipulação de dados, eventos e elementos com Javascript além da parte visual feita com Html e Css. Projeto encontra-se responsivo."
                image={voicegame}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/Jogo-Reconhecimento-Por-Voz"} />

            <Card
                title="Hamburgueria"
                subtitle="Protótipo feito para uma Hamburgueria, feito com Html, TailwindCss e JavaScript Vanilla, encontra-se responsivo e totalmente funcional com carrinho de compras e envio para Whatsapp da 'loja'."
                image={hamburgueria}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/my-store"} />

            <Card
                title="Barber Shop"
                subtitle="O Barber Shop é uma landing page ficticia criada para praticar minhas habilidades com as tecnologias utilizadas neste projeto. Foi utilizado Reactjs para construção do projeto, utilizando ao maximo toda a versatilidade que esta biblioteca javascript nos proporciona. Foi utlizado Sass para fazer toda a estilização de forma otimizada e intuitiva. O site possui uma seção que mostra a localização do estabelecimento e para tal foi utilizado a APi do Google maps."
                image={barbershop}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/Landing-page-BarberShop"} />

        </section>
    )
}

export default ProjetosWeb;
