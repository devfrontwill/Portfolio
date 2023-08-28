import { PiCaretRightBold } from 'react-icons/pi';
import styles from './styles.module.scss';


function Button({ title, href }) {


    return (
        <div className={styles.container__btn} >
            <a className={styles.btn} target='_blank' href={href}>{title}
                <PiCaretRightBold
                    size={18}
                />
            </a>
        </div>
    )
}

export default Button;

