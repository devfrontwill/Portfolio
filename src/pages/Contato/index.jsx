import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { PiCaretRightBold } from 'react-icons/pi';
import { BsLinkedin, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import styles from './styles.module.scss';
import Menu from '../../components/Menu';
import Aos from "aos";
import 'aos/dist/aos.css'; 



export default function Contato() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault()


        const templateParams = {
            from_name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message
        }

        emailjs.send("service_ijyl298", "template_5go7gxq", templateParams, "eu1uNvi4jNgYeKwDe")
            .then((response) => {

                alert("Mensagem enviada com sucesso !");

                setName('');
                setEmail('');
                setPhoneNumber('');
                setMessage('');

            }, (err) => {
                alert("Ops, ocorreu um erro, a mensagem falhou ao ser enviada por favor tente novamente.")
            })

    }
    Aos.init();

    if (phoneNumber.length > 11){
        alert('Digite um número de telefone válido com 11 digitos incluindo o DDD');

        return setPhoneNumber('');
    }

    return (

        <>
            <Menu />
            <div className={styles.container} >
                <h1 className={styles.title} data-aos="fade-down" data-aos-delay="300" data-aos-duration="1200" >
                    Entre em contato
                </h1>
                <span className={styles.subtitle} data-aos="fade-left" data-aos-delay="300" data-aos-duration="1200">
                    Entre em contato para possiveis parcerias e para agendamento de entrevistas ou orçamentos. Deixe sua mensagem abaixo :
                </span>

                <form className={styles.form_container} onSubmit={sendEmail} data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">

                    <label htmlFor="Name">Nome :</label>
                    <input
                        className={styles.input_field}
                        type="text"
                        minLength={3}
                        placeholder="Digite seu nome"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}

                    />

                    <label htmlFor="Email">Email :</label>
                    <input
                        className={styles.input_field}
                        type="email"
                        minLength={15}
                        placeholder="example@example.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <label htmlFor="tel">Telefone :</label>
                    <input
                        className={styles.input_field}
                        type="number"                        
                        placeholder="Ex. 21987654321"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                    />


                    <label htmlFor="message">Mensagem :</label>
                    <textarea
                        className={styles.input_msg}
                        type="text"
                        name="message"
                        required
                        placeholder="Digite aqui sua mensagem . . ."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}

                    />

                    <button className={styles.btn_submit} type="submit" >
                        Submit
                        <PiCaretRightBold
                            size={17}
                            color="#FFF"
                        />
                    </button>

                </form>

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
                </footer>
            </div>
        </>
    )
}

