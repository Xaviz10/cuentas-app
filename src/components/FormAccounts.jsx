import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentAccount } from '../actions';
import '../assets/styles/components/FormAccounts.css';

import calendarIcon from '../assets/static/icons/calendar-icon.svg';
import commentIcon from '../assets/static/icons/comment-icon.svg';
import priceIcon from '../assets/static/icons/price-icon.svg';
import typeIcon from '../assets/static/icons/type-icon.svg';
import userIcon from '../assets/static/icons/user-icon.svg';


const FormAccounts = ({ togglePopup }) => {
    const [costInput, setCostInput] = useState('')
    
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");

    
    

    const normalizeInput = event  => {
        setCostInput(addCommas(removeNonNumeric(event.target.value)));
    }

    const onSubmit = data => {
        dispatch(setCurrentAccount(data))
    }
    return (
        <form className="new-account-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="new-account-form__title">Adicionar Gastos</h2>
            <label >
                Fecha:
                <span style={{ backgroundImage: `url(${calendarIcon})` }}></span>
                <input {...register('Fecha')} type="date" ></input>
            </label>
            <label >
                Usuario:
                <span style={{ backgroundImage: `url(${userIcon})` }}></span>
                <input {...register('Usuario')} type="text" ></input>
            </label>
            <label >
                Tipo de gasto:
                <span style={{ backgroundImage: `url(${typeIcon})` }}></span>
                <select {...register('Tipo de gasto')} >
                    <option value="Arriendo">Arriendo</option>
                    <option value="Mercado">Mercado</option>
                    <option value="Luz">Luz</option>
                    <option value="Agua">Agua</option>
                    <option value="Gas">Gás</option>
                    <option value="Internet">Internet</option>
                    <option value="Domicilios">Domicilios</option>
                    <option value="Restaurantes">Restaurantes</option>
                    <option value="Gasto casa">Gasto casa</option>
                    <option value="Otros">Otros</option>
                </select>
            </label>
            <label >
                Costo:
                <span style={{ backgroundImage: `url(${priceIcon})` }}></span>
                <input {...register('Costo')} type="text" value={costInput} onInput={normalizeInput}></input>
            </label>
            <label >
                Comentario (opcional):
                <span style={{ backgroundImage: `url(${commentIcon})` }}></span>
                <input {...register('Comentario')}type="text"></input>
            </label>
            <input className="new-account-form__button" type="submit" value="Aceptar" onClick={togglePopup}/>
        </form>
    );
}


export default FormAccounts;