import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductList, deleteItem } from '../actions';
import '../assets/styles/components/ShoppingList.css';

import deleteIcon from '../assets/static/icons/delete-icon.svg';
import newItemIcon from '../assets/static/icons/new-item-icon.svg';
import loadingIcon from '../assets/static/icons/loading-icon.gif';



const ShoppingList = ({togglePopupNewItem, dateHourFormater}) => {
    const [lastUpdate, setLastUpdate] = useState("Nunca")

    const dispatch = useDispatch();
    const shoppingList = useSelector(state => state.shopping.shopping_list);
    const loading = useSelector(state => state.shopping.loading);
    console.log(shoppingList.length)
    useEffect(() => {
        dispatch(getProductList())
    }, []);

    const handleDeleteItem = (itemName) => {
        dispatch(deleteItem(itemName));
    }
    return (
        <div className="shopping-list-outer-container">
            <h2 className="shopping-list-title">Lista de Compras</h2>
            <p className="shopping-list-last-update">Última actualización: <span> {lastUpdate} </span> </p>
            
            <button className="new-item-button" onClick={togglePopupNewItem}>
                <span className="new-item-button--add-icon" style={{ backgroundImage: `url(${newItemIcon})` }}></span>
                Adicionar Producto
            </button>

            

            <div className="shopping-list-inner-container">
                <ul className="shopping-list">
                    {shoppingList.length ? shoppingList.slice(0).reverse().map((item, index) => {
                        return (
                            <li key={index} className="shopping-list__item">
                                <input type="checkbox" />
                                <p>
                                    {item.Producto}
                                    <span className="item__comment">
                                        {`(${item.Comentario})`}
                                    </span>
                                </p>

                                <button className="item__delete-button" onClick={() => handleDeleteItem(item.Producto)}>
                                    {loading ? <span style={{ backgroundImage: `url(${loadingIcon})`}}></span> : <span style={{ backgroundImage: `url(${deleteIcon})`}}></span>}
                                </button>
                            </li>
                        );
                    })
                        :
                        <div className="shopping-list-loading">
                            <span>Sin productos.</span>
                        </div>}
                    

                </ul>
                {loading ?
                    <div className="shopping-list-loading">
                        <span style={{ backgroundImage: `url(${loadingIcon})` }}></span>
                    </div>
                    : null}
            </div>


        </div>
        
    );
}


export default ShoppingList;