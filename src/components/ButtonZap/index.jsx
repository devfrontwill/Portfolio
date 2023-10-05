import styles from './styles.module.scss';
import whatsapp from '../../assets/whatsapp.svg';


export default function ButtonZap(){
    return (
        <a className={styles.btn_whatsapp}
            data-aos="zoom-in-up" data-aos-delay="400"
            href="https://api.whatsapp.com/send?phone=5521990556961&text=Ol%C3%A1%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20Portf%C3%B3lio%20!"
        >
            <img
                src={whatsapp}
                alt="Botao whatsapp"
            />
            <span className={styles.tooltip_text} > Olá, que tal iniciarmos uma conversa ? </span>
        </a>
    )
}