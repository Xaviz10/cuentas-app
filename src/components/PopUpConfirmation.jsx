import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postAccount, resetDataSend } from '../actions';
import '../assets/styles/components/PopUpConfirmation.css';

import loadingIcon from '../assets/static/icons/loading-icon.gif';



const PopUpConfirmation = ({ popupState, togglePopup }) => {

    const dispatch = useDispatch();
    const currentAccount = useSelector(state => state.current_account);
    const loading = useSelector(state => state.loading);
    const dataSend = useSelector(state => state.data_send);
    
    const handleSendData = () => {
        dispatch(postAccount())
    }

    const handleDataSendConfirmation = () => {
        setTimeout(() => {
            dispatch(resetDataSend());
        }, 2000)
        setTimeout(() => {
            togglePopup();
        } , 2050)
        
    }

    if (dataSend) {
        handleDataSendConfirmation()
    }

    return (
        <>         {
            popupState ?
                <div className="popup-outer-container">
                    <span className="close-popup" onClick={togglePopup}>X</span>
                    <div className="popup-container">
                        <h2 className="popup-title">Verifica la información</h2>
                        <article className="popup-description">
                            <p>Fecha del gasto: <span>{currentAccount['Fecha']}</span></p>
                            <p>Usuario: <span>{currentAccount['Usuario']}</span></p>
                            <p>Tipo de gasto: <span>{currentAccount['Tipo de gasto']}</span></p>
                            <p>Costo: <span>{currentAccount['Costo']}</span></p>
                            <p>Comentario: <span>{currentAccount['Comentario']}</span></p>
                            {dataSend ? <p className="message-confirmation"> La información fue envida! :)</p> : null}
                        </article>
                        {dataSend || loading ?
                            <button className="confirmation-button"> {loading ? <span style={{ backgroundImage: `url(${loadingIcon})` }}></span> : <>Confirmar</>}</button>
                            :
                            <button className="confirmation-button" onClick={() => handleSendData()}> {loading ? <span style={{ backgroundImage: `url(${loadingIcon})` }}></span> : <>Confirmar</>}</button>
                        }
                        <button className="cancelation-button" onClick={togglePopup}>Cancelar</button>
                    </div >
                </div>
                : null
        } </>


    );
}

export default PopUpConfirmation;