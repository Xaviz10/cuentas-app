import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccounts } from '../actions';
import '../assets/styles/components/TableViewer.css';

import loadingIcon from '../assets/static/icons/loading-icon.gif';
import refreshIcon from '../assets/static/icons/refresh-icon.svg';


const TableViewer = ({dateHourFormater}) => {
    const [lastUpdate, setLastUpdate] = useState("Nunca")

    const loading = useSelector(state => state.loading);
    const table = useSelector(state => state.accounts);
    const dispatch = useDispatch();


    const handleGetAccounts = () => {
        dispatch(getAccounts())
        setLastUpdate(dateHourFormater());
    }

    return (
        <div className="table-outer-container">
            <h2 className="table-accounts-title">Tabla de Gastos</h2>

            <p className="table-last-update">Última actualización: <span> { lastUpdate } </span> </p>
            {loading ?
                <button className="get-table-button">
                    <span className="get-table-button--loading-icon" style={{ backgroundImage: `url(${loadingIcon})` }}></span>
                </button>
                :
                <button className="get-table-button" onClick={handleGetAccounts}>
                    <span className="get-table-button--refresh-icon" style={{ backgroundImage: `url(${refreshIcon})` }}></span>
                    Actualizar Tabla
                </button>
            }

            <div className="table-inner-container">

                <table className="table-accounts">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Usuario</th>
                            <th>Tipo de gasto</th>
                            <th>Costo</th>
                            <th>Comentario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading ? table.slice(0).reverse().map((row,index) => {
                            return (
                                <tr key={index}>
                                    <th>{row['Fecha']}</th>
                                    <th>{row['Usuario']}</th>
                                    <th>{row['Tipo de gasto']}</th>
                                    <th>{row['Costo']}</th>
                                    <th>{row['Comentario']}</th>
                                </tr>
                            );
                        })
                        : <tr className="table-accounts--row-loading-icon"><span className="table-accounts__loading-icon" style={{ backgroundImage: `url(${loadingIcon})` }}></span></tr> 
                        }
                    </tbody>

                </table>
            </div>
            
            <a className="table-accounts__link" target="_blank" href="https://docs.google.com/spreadsheets/d/175BoIJSFiQmeLXf3goVCcUeWnYjEt9QdIzUYcFyLnRQ/edit?usp=sharing" rel="noreferrer">Ir a tabla en Excel</a>
        </div>
    );
}

export default TableViewer;