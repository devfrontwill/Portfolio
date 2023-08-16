import React, { useState } from "react";
import { PiCaretRightBold } from 'react-icons/pi';
import styles from './styles.module.scss';


function Button({ title }) {


    return (
        <div className={styles.container__btn} >
            <a className={styles.btn} >{title}
                <PiCaretRightBold
                    size={18}
                />
            </a>
        </div>
    )
}

export default Button;

