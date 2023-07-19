import React from "react";
import { PiCaretRightBold } from 'react-icons/pi';
import styles from './styles.module.scss';

function Button({ title }) {
    return (
        <div className={styles.container__btn__right}>
            <a className={styles.btn__right}>{title}
                <PiCaretRightBold
                    size={18}
                />
            </a>
        </div>
    )
}

export default Button;

