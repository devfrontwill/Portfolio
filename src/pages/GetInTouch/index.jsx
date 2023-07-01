import React from "react";
import { PiCaretRightBold } from 'react-icons/pi';
import styles from './styles.module.scss';


function GetInTouch() {
    return (
        <>
            <div className={styles.container} >
                <h1 className={styles.title} >
                    Get in Touch
                </h1>
                <span className={styles.subtitle} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>

                <form className={styles.form_container} >
                    <label htmlFor="Email">Email :</label>
                    <input className={styles.input_field}
                        type="email" required placeholder="example@example.com" />

                    <label htmlFor="phone">Telefone :</label>
                    <input className={styles.input_field}
                        type="tel" required placeholder="Ex. 21 98765-4321" minLength={11} maxLength={11} />

                    <label htmlFor="message">Mensagem :</label>
                    <textarea className={styles.input_msg} type="text" required placeholder="Digite aqui sua mensagem :" />

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

export default GetInTouch;