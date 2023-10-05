import React, { useState } from "react";
import ProjetosWeb from '../../components/ProjetosWeb';
import ProjetosMobile from "../../components/ProjetosMobile";
import styles from './styles.module.scss';
import Menu from '../../components/Menu';
import whatsapp from '../../assets/whatsapp.svg';
import Aos from "aos";
import 'aos/dist/aos.css';



function Projetos() {
    const [activeTab, setActiveTab] = useState('web');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    Aos.init();

    return (<>
        <Menu />
        <div className={styles.container} >
            <div className={styles.container_button}>
                <button className={styles.button_tabweb} onClick={() => handleTabChange('web')}>Projetos Web</button>
                <button className={styles.button_tabmobile} onClick={() => handleTabChange('mobile')}>Projetos Mobile</button>
            </div>

            <div className={styles.container_projects} >
                {activeTab === 'web' && (
                    <div>
                        <ProjetosWeb />
                    </div>
                )}

                {activeTab === 'mobile' && (
                    <div>
                        <ProjetosMobile />
                    </div>
                )}

            </div>

            <a className={styles.btn_whatsapp}
                data-aos="zoom-in-up" data-aos-delay="400"
                href="https://api.whatsapp.com/send?phone=5521990556961&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20!"
            >
                <img
                    src={whatsapp}
                    alt="Botao whatsapp"
                />
                <span className={styles.tooltip_text} > Olá, que tal iniciarmos uma conversa ? </span>
            </a>
        </div>
    </>
    )
}

export default Projetos;