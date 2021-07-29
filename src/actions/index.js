import Axios from 'axios';

export const postAccount = () => {
    return async (dispatch, getState) => {
        
        const newAccount = getState().current_account;
        console.log('newAccount',newAccount)
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

export const postNewItem = (newItem) => {
    return async (dispatch) => {
        
        console.log('newItem',newItem)
        dispatch({
            type: 'POST_NEW_ITEM_REQUESTED',
        })

        const newItemData = await Axios.post('https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122', newItem)
        console.log(newItemData)

        dispatch({
            type: 'POST_NEW_ITEM_DONE',
            payload: newItem,
        })
    }
};

export const resetDataNewItemSend = () => ({
    type: 'RESET_DATA_NEW_ITEM_SEND',
})

export const deleteItem = (itemName) => {
    return async (dispatch, getState) => {
        
        const itemIndex = getState().shopping.shopping_list.findIndex(item => {
            return (item.Producto === itemName);
        })
        console.log(itemIndex)
        dispatch({
            type: 'DELETE_ITEM_REQUESTED',
        })
        const deletedItem = await Axios.delete(`https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122/Producto/*${itemName}*`)
        console.log("deletedItem",deletedItem)

        dispatch({
            type: 'DELETE_ITEM_DONE',
            payload: itemIndex
        })
    }
}
export const getProductList = () => {
    return async (dispatch) => {
        
        dispatch({
            type: 'GET_PRODUCT_LIST_REQUESTED',
        })
        const productList = await Axios.get('https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122')
        console.log("productList",productList.data)

        dispatch({
            type: 'GET_PRODUCT_LIST_DONE',
            payload: productList.data.length ? productList.data : []
        })
    }
};

