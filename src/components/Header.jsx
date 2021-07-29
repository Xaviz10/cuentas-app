import React from 'react';
import '../assets/styles/components/Header.css';


import gastosComunesIcon from '../assets/static/icons/gastos-comunes-icon.svg';


const Header = () => {

    
    return(    
        <header className="header-gastos-comunes">
            <a href='/' className="header-gastos-comunes__logo">
                <img src={gastosComunesIcon} alt="Cuentas comunes logo" />
            </a>
        </header>
    );

};

export default Header;