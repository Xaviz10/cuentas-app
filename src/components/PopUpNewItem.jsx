import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getProductList, postNewItem, resetDataNewItemSend, patchItemBuy, resetEditProduct } from '../actions';
import '../assets/styles/components/PopUpNewItem.css';

import loadingIcon from '../assets/static/icons/loading-icon.gif';
import productIcon from '../assets/static/icons/product-icon.svg';
import commentIcon from '../assets/static/icons/comment-icon.svg';



const PopUpNewItem = ({ popupNewItemState, togglePopupNewItem}) => {
    
    const dispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm();
    const loading = useSelector(state => state.shopping.loading);
    const dataSend = useSelector(state => state.shopping.data_send);
    const product = useSelector(state => state.shopping.product_edit);
    
    console.log("producto",product);
    console.log(Boolean(product.Producto));
    
    useEffect(() => {
        reset();
    }, [product])
    const onSubmit = (data) => {

        if (!product.Producto) {
            data.Comprado = "No";
            handleSendData(data);
        } else {
            handlePatchData(data, product);
        }
    }
    
    const handleSendData = (data) => {
        dispatch(postNewItem(data));
    };

    const handlePatchData = (data, product) => {
        dispatch(patchItemBuy(data, product));
    };

    const handleDataSendConfirmation = () => {
        if (popupNewItemState) {
            setTimeout(() => {
                dispatch(resetDataNewItemSend());
            }, 2000)
            setTimeout(() => {
                dispatch(resetEditProduct());
                dispatch(getProductList());
                togglePopupNewItem();
            } , 2050)
        }
    }

    const handleTogglePopupNewItem = () => {
        dispatch(resetEditProduct());
        togglePopupNewItem();
    }
        
    if (dataSend) {
        handleDataSendConfirmation();
    }
    
    return (
        <>         {
            popupNewItemState ?
                <div className="popup-new-item-outer-container">
                    <span className="close-popup-new-item" onClick={() => handleTogglePopupNewItem()}>X</span>
                    <div className="popup-new-item-container">
                        <h2 className="popup-new-item__title">Adicionar producto</h2>
                        <form className="popup-new-item__form" onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                Producto:
                                <span style={{ backgroundImage: `url(${productIcon})` }}></span>
                                
                                <input {...register('Producto', { required: true })} type="text" defaultValue={product.Producto ? product.Producto : ""}/>
                            </label>
                            <label>
                                Comentario (Opcional):
                                <span style={{ backgroundImage: `url(${commentIcon})` }}></span>
                                <input {...register('Comentario')} type="text" defaultValue={product.Producto ? product.Comentario : ""}/>
                            </label>
                            <button className="confirmation-button"> {loading ? <span style={{ backgroundImage: `url(${loadingIcon})` }}></span> : <>Confirmar</>}</button>

                        </form>
                        
                        {dataSend ? <p className="message-confirmation"> La información fue envida! :)</p> : null}
                        
                        <button className="cancelation-button" onClick={() => handleTogglePopupNewItem()}>Cancelar</button>
                    </div >
                </div>
                : null
        } </>
    );
}

export default PopUpNewItem;