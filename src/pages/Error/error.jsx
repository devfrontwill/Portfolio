import { useRouteError } from 'react-router';
import styles from './styles.module.scss';
import erroImg from '../../assets/errorimg.jpg';

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <img className={styles.img__error} src={erroImg} />
        </div>
    )
}