import Axios from 'axios';

export const postAccount = () => {
    return async (dispatch, getState) => {
        
        const newAccount = getState().current_account;

        dispatch({
            type: 'POST_ACCOUNT_REQUESTED',
        })

        const billData = await Axios.post('https://sheet.best/api/sheets/985f20ae-8841-4340-bbdb-491b3c707508', newAccount);

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

        const accounts = await Axios.get('https://sheet.best/api/sheets/985f20ae-8841-4340-bbdb-491b3c707508');

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
        
        dispatch({
            type: 'POST_NEW_ITEM_REQUESTED',
        })

        const newItemData = await Axios.post('https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122', newItem);

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
        });

        dispatch({
            type: 'DELETE_ITEM_REQUESTED',
        });

        const deletedItem = await Axios.delete(`https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122/Producto/*${itemName}*`);

        dispatch({
            type: 'DELETE_ITEM_DONE',
            payload: itemIndex
        });
    }
}
export const getProductList = () => {
    return async (dispatch) => {
        
        dispatch({
            type: 'GET_PRODUCT_LIST_REQUESTED',
        });
        const productList = await Axios.get('https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122');

        dispatch({
            type: 'GET_PRODUCT_LIST_DONE',
            payload: productList.data.length ? productList.data : []
        });
    }
};

export const patchItemBuy = (data, item) => {
    return async (dispatch) => {
        
        console.log('itemPatch', item)
        const itemName = item.Producto;

        dispatch({
            type: 'PATCH_ITEM_BUY_REQUESTED',
        });
        const billData = await Axios.patch(`https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122/Producto/*${itemName}*`, data)
        console.log(billData)

        dispatch({
            type: 'PATCH_ITEM_BUY_DONE',
        });
    }
};

export const editProduct = (item) => ({
    type: 'EDIT_PRODUCT',
    payload: item,
})

export const resetEditProduct = () => ({
    type: 'RESET_EDIT_PRODUCT'
})
