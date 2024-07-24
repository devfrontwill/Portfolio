import React from "react";
import styles from './styles.module.scss';
import work1 from '../../assets/webdevlink.png';
import devcars from '../../assets/devcars.png';
import barbershop from '../../assets/barbershop.png';
import formbank from '../../assets/formbank.png';
import hamburgueria from '../../assets/hamburgueria.png';
import Button from "../Button";
import Card from "../Card";


function ProjetosWeb() {
    return (
        <section className={styles.container}>

            <h1 className={styles.title} >
                Projetos Web com JavaScript Vanilla, React e TypeScript
            </h1>

            <Card
                title="DevCars Semi Novos"
                subtitle="DevCars Semi Novos, é um sistema Web responsivo feito para uma plataforma de venda de veiculos semi novos, no qual o usuario pode colocar seu veiculo a venda após o cadastro, porem tambem permite para quem não for usuario cadastrado ter acesso a plataforma e visualizar os veiculos disponiveis e caso tenha interesse entrar em contato com o vendedor através de um CTA que o direciona para o WhatsApp.
                Possui também uma area de Dashboard onde é possivel ver seus veiculos ativos à venda, onde o usuario pode gerencia-los.
                Possui um campo de busca para que o usuario possa buscar diretamente o item que esteja procurando, evitando rolar toda a página e assim realizar uma busca mais objetiva.
                Também foi feito o uso de rotas privadas para controlar o acesso no qual apenas usuarios cadastrados possam acessar a pagina de dashboard e cadastro de veiculos, utilizando React Router Dom.
                Os campos de inputs todos possuem validação de acordo com o solicitado em cada input para evitar o cadastro de informações inválidas, feito com React Hook Form e Zod.
                
                Na construção do sistema foi utilizado React com TypeScript, Firebase, Firebase-auth, Firebase-database, Firebase-storage, Responsive-design, React-router-dom, Tailwind-css, Uuidv4, Swiper-js, Private-routes, React-hook-form, React-hot-toast e zod-validation."
                image={devcars}
            />
            <Button title="Acessar Projeto" href={"https://github.com/devfrontwill/DevCars-SemiNovos"} />
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
