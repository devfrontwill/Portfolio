import React, { useState } from "react";
import { PiCaretRightBold } from 'react-icons/pi';
import styles from './styles.module.scss';
import Menu from '../../components/Menu';
import emailjs from '@emailjs/browser';


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
            
            alert("Mensagem enviada com sucesso.")

            setName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');

        }, (err) => {
            alert("Ops, ocorreu um erro, a mensagem falhou ao ser enviada por favor tente novamente.")
        })

    }

    return (
        <>
            <Menu />
            <div className={styles.container} >
                <h1 className={styles.title} >
                    Entre em contato
                </h1>
                <span className={styles.subtitle} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>

                <form className={styles.form_container} onSubmit={sendEmail} >

                    <label htmlFor="Name">Nome :</label>
                    <input
                        className={styles.input_field}
                        type="text"
                        placeholder="Digite seu nome"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <label htmlFor="Email">Email :</label>
                    <input
                        className={styles.input_field}
                        type="email"
                        placeholder="example@example.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <label htmlFor="phone">Telefone :</label>
                    <input
                        className={styles.input_field}
                        type="tel"
                        required
                        placeholder="Ex. 21 98765-4321"
                        minLength={11}
                        maxLength={11}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                    />

                    <label htmlFor="message">Mensagem :</label>
                    <textarea
                        className={styles.input_msg}
                        type="text"
                        required 
                        placeholder="Digite aqui sua mensagem . . ."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}

                    />

                    <button className={styles.btn_submit} type="submit">
                        Submit
                        <PiCaretRightBold
                            size={17}
                            color="#FFF"
                        />
                    </button>
                </form>
            </div>

            <footer className={styles.copyright} >© Copyright Devfrontwill - 2023 All rights reserved</footer>
        </>
    )
}

