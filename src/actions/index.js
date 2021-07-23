import Axios from 'axios';

export const postAccount = () => {
    return async (dispatch, getState) => {
        
        const newAccount = getState().current_account;
        dispatch({
            type: 'POST_ACCOUNT_REQUESTED',
        })
        const billData = await Axios.post('https://sheet.best/api/sheets/985f20ae-8841-4340-bbdb-491b3c707508', newAccount)
        console.log(billData)

        dispatch({
            type: 'POST_ACCOUNT_DONE',
        })
    }
};

export const getAccounts = () => {
    return async (dispatch) => {
        
        dispatch({
            type: 'GET_ACCOUNTS_REQUESTED',
        })
        const accounts = await Axios.get('https://sheet.best/api/sheets/985f20ae-8841-4340-bbdb-491b3c707508')
        console.log("ACCOUNTS",accounts.data)

        dispatch({
            type: 'GET_ACCOUNTS_DONE',
            payload: accounts.data.length ? accounts.data : [{"Fecha": "", "Usuario": "", "Tipo de gasto": `No se obtuvieron datos`, "Costo": "", "Comentario":""}]
        })
    }
};

export const setCurrentAccount = (data) => ({
    type: 'SET_CURRENT_ACCOUNT',
    payload: data,
});

export const resetDataSend = () => ({
    type: 'RESET_DATA_SEND',
})