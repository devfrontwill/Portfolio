import React, { useState } from "react";
import ProjetosWeb from '../../components/ProjetosWeb';
import ProjetosMobile from "../../components/ProjetosMobile";


function Projetos() {
    const [activeTab, setActiveTab] = useState('web');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div>
            <div>
                <button onClick={() => handleTabChange('web')}>Projetos Web</button>
                <button onClick={() => handleTabChange('mobile')}>Projetos Mobile</button>
            </div>

            <div>
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
        </div>
    )
}

export default Projetos;