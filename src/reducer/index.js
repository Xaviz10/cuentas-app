const initialState = {
    loading: false,
    data_send: false,
    error: null,
    current_account: {
        "Fecha": "",
        "Usuario": "",
        "Tipo de gasto": "Sin datos, actualiza la tabla",
        "Costo": 0,
        "Comentario": ""
    },
    accounts : [{"Fecha": "", "Usuario": "", "Tipo de gasto": `Sin datos, actualiza la tabla`, "Costo": "", "Comentario":""}]
}




const reducer = (state = initialState, action) => {
    console.log('reducer', Boolean(action.payload))
    switch (action.type) {
        case 'RESET_DATA_SEND':
    
            return {
                ...state,
                data_send: false
            }
        case 'SET_CURRENT_ACCOUNT':
            return {
                ...state,
                current_account: action.payload,
            }
        case 'POST_ACCOUNT_REQUESTED':
            
            return {
                ...state,
                loading: true,

            }
        case 'POST_ACCOUNT_DONE':
        
            return {
                ...state,
                loading: false,
                data_send: true
            }
        case 'GET_ACCOUNTS_REQUESTED':
        
            return {
                ...state,
                loading: true,

            }
        case 'GET_ACCOUNTS_DONE':
        
            return {
                ...state,
                loading: false,
                accounts: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;