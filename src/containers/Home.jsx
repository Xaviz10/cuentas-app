import React, { useState } from 'react';
import '../assets/styles/Home.css';

import Header from '../components/Header';
import FormAccounts from '../components/FormAccounts';
import PopUpConfirmation from '../components/PopUpConfirmation';
import TableViewer from '../components/TableViewer';

const Home = () => {

    const [popupState, setPopupState] = useState(false);
    const formatterCurrency = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: '0',
    });

    const dateHourFormater = () => {
        const today = new Date();
        return `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}, ${today.getHours()}:${today.getMinutes()<10? `0${today.getMinutes()}` : today.getMinutes()}:${today.getSeconds()<10? `0${today.getSeconds()}`: today.getSeconds()}`
    }

    const togglePopup = () => {
        setPopupState(previus => !previus)
    }
    return (
        <div className="home-container">
            <Header/>
            <FormAccounts togglePopup={togglePopup} />
            <PopUpConfirmation popupState={popupState} togglePopup={togglePopup} formatterCurrency={formatterCurrency} />
            <TableViewer dateHourFormater={dateHourFormater}/>
        </div>
    );
}

export default Home;