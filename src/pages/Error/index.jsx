import { useRouteError, } from 'react-router';
import { Link } from 'react-router-dom'
import styles from './styles.module.scss';
import notfound from '../../assets/notfound.png';

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={styles.container_error}>
            <img src={notfound} alt='Pagina nao encontrada' />
            <h1>Página não encontrada!</h1>
            <Link to="/">
                Voltar para Home
            </Link>    
        </div>
    )
}