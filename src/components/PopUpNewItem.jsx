import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { postNewItem, resetDataNewItemSend } from '../actions';
import '../assets/styles/components/PopUpNewItem.css';

import loadingIcon from '../assets/static/icons/loading-icon.gif';
import productIcon from '../assets/static/icons/product-icon.svg';
import commentIcon from '../assets/static/icons/comment-icon.svg';



const PopUpNewItem = ({ popupNewItemState, togglePopupNewItem }) => {
    
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const loading = useSelector(state => state.shopping.loading);
    const dataSend = useSelector(state => state.shopping.data_send);


    const onSubmit = data => {
        data.Comprado = "No"
        console.log('Shopping List: ', data);
        handleSendData(data);
    }
    
    const handleSendData = (data) => {
        dispatch(postNewItem(data))
    }

    const handleDataSendConfirmation = () => {
        setTimeout(() => {
            dispatch(resetDataNewItemSend());
        }, 2000)
        setTimeout(() => {
            togglePopupNewItem();
        } , 2050)
        
    }

    if (dataSend) {
        handleDataSendConfirmation()
    }
    
    return (
        <>         {
            popupNewItemState ?
                <div className="popup-new-item-outer-container">
                    <span className="close-popup-new-item" onClick={togglePopupNewItem}>X</span>
                    <div className="popup-new-item-container">
                        <h2 className="popup-new-item__title">Adicionar producto</h2>
                        <form className="popup-new-item__form" onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                Producto:
                                <span style={{ backgroundImage: `url(${productIcon})` }}></span>
                                <input {...register('Producto')} type="text" />
                            </label>
                            <label>
                                Comentario (Opcional):
                                <span style={{ backgroundImage: `url(${commentIcon})` }}></span>
                                <input {...register('Comentario')} type="text" />
                            </label>
                            <button className="confirmation-button"> {loading ? <span style={{ backgroundImage: `url(${loadingIcon})` }}></span> : <>Confirmar</>}</button>

                        </form>
                        
                        {dataSend ? <p className="message-confirmation"> La información fue envida! :)</p> : null}
                        
                        <button className="cancelation-button" onClick={togglePopupNewItem}>Cancelar</button>
                    </div >
                </div>
                : null
        } </>
    );
}

export default PopUpNewItem;