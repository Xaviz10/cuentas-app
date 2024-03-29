import React, { useState } from 'react';
import '../assets/styles/Home.css';

import Header from '../components/Header';
import FormAccounts from '../components/FormAccounts';
import PopUpConfirmation from '../components/PopUpConfirmation';
import PopUpNewItem from '../components/PopUpNewItem';
import TableViewer from '../components/TableViewer';
import ShoppingList from '../components/ShoppingList';

const Home = () => {

    const [popupState, setPopupState] = useState(false);
    const [popupNewItemState, setPopupNewItemState] = useState(false);
    // const formatterCurrency = new Intl.NumberFormat('es-CO', {
    //     style: 'currency',
    //     currency: 'COP',
    //     maximumFractionDigits: '0',
    // });

    const dateHourFormater = () => {
        const today = new Date();
        return `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}, ${today.getHours()}:${today.getMinutes()<10? `0${today.getMinutes()}` : today.getMinutes()}:${today.getSeconds()<10? `0${today.getSeconds()}`: today.getSeconds()}`
    }

    const togglePopup = () => {
        setPopupState(previus => !previus)
    }

    const togglePopupNewItem = () => {
        setPopupNewItemState(previus => !previus)
    }
    return (
        <>
            <Header />
            <div className="home-container">
                <FormAccounts togglePopup={togglePopup} />
                <div className="home-container__tables">
                    <TableViewer dateHourFormater={dateHourFormater} />
                    <ShoppingList dateHourFormater={dateHourFormater} togglePopupNewItem={togglePopupNewItem}/>
                </div>
            </div>
            <PopUpConfirmation popupState={popupState} togglePopup={togglePopup}  />
            <PopUpNewItem popupNewItemState={popupNewItemState} togglePopupNewItem={togglePopupNewItem }/>
        </>


    );
}

export default Home;