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
    shopping: {
        data_send: false,
        loading: false,
        shopping_list: [
            // {
            //     Producto: "Café",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // },
            // {
            //     Producto: "Café",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // },
            // {
            //     Producto: "Cafédfsdfsdfsfsdfsdfsdfsdf",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // },
            // {
            //     Producto: "Café",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // },
            // {
            //     Producto: "Café",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // },
            // {
            //     Producto: "Café",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // },
            // {
            //     Producto: "Café",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // },
            // {
            //     Producto: "Chocolate",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // },
            // {
            //     Producto: "Huevos",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // },
            // {
            //     Producto: "Leche",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // },
            // {
            //     Producto: "Panela",
            //     Comprado: "No",
            //     Comentario: "Nada"
            // }
        ]
    }, 
    accounts : [{"Fecha": "", "Usuario": "", "Tipo de gasto": `Sin datos, actualiza la tabla`, "Costo": "", "Comentario":""}]
    // accounts: [
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '26/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Mercado',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     },
    //     {
    //         Fecha: '1/07/2021',
    //         Usuario: 'Javier',
    //         'Tipo de gasto': 'Arriendo',
    //         Costo: ' $600.000',
    //         Comentario: 'rtertet'
    //     }
    // ]
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
        case 'POST_NEW_ITEM_REQUESTED':
    
            return {
                ...state,
                shopping: {
                    ...state.shopping,
                    loading: true}

            }
        case 'POST_NEW_ITEM_DONE':
        
            return {
                ...state,
                shopping: {
                    ...state.shopping,
                    shopping_list: state.shopping.shopping_list.concat(action.payload),
                    loading: false,
                    data_send: true,}
            }
        case 'RESET_DATA_NEW_ITEM_SEND':

            return {
                ...state,
                shopping: {
                    ...state.shopping,
                    data_send: false,}
            }
        
        case 'GET_PRODUCT_LIST_REQUESTED':
    
            return {
                ...state,
                shopping: {
                    ...state.shopping,
                    loading: true,}
            }
        case 'GET_PRODUCT_LIST_DONE':
        
            return {
                ...state,
                shopping: {
                    ...state.shopping,
                    shopping_list: action.payload,
                    loading: false,}
            }
        case 'DELETE_ITEM_REQUESTED':
            return {
                ...state,
                shopping: {
                    ...state.shopping,
                    loading: true,}
            }
        case 'DELETE_ITEM_DONE':
            const deleted = state.shopping.shopping_list.splice(action.payload, 1);
            return {
                ...state,
                shopping: {
                    ...state.shopping,
                    shopping_list: [...state.shopping.shopping_list],
                    loading: false,}
            }
        default:
            return state;
    }
}

export default reducer;