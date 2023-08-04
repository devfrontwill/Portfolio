import React, { useState } from "react";
import ProjetosWeb from '../../components/ProjetosWeb';
import ProjetosMobile from "../../components/ProjetosMobile";
import styles from './styles.module.scss';
import Menu from '../../components/Menu';


function Projetos() {
    const [activeTab, setActiveTab] = useState('web');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className={styles.container} >
            <Menu />
            <div className={styles.container_button}>
                <button className={styles.button_tabweb} onClick={() => handleTabChange('web')}>Projetos Web</button>
                <button className={styles.button_tabmobile} onClick={() => handleTabChange('mobile')}>Projetos Mobile</button>
            </div>

            <div className={styles.container_projects} >
                {activeTab === 'web' && (
                    <div className={styles.webprojects} >                        
                        <ProjetosWeb />
                    </div>
                )}

                {activeTab === 'mobile' && (
                    <div className={styles.mobileprojects} >                        
                        <ProjetosMobile />
                    </div>
                )}

            </div>
        </div>
    )
}

export default Projetos;