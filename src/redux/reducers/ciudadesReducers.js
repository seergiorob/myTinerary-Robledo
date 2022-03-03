
const initialState = {
    ciudades:[],
    auxiliares:[]
}

const ciudadesReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'fetch':
            return{
            ...state,
            ciudades: action.payload,
            auxiliar: action.payload,
            }
        case 'delete':
            return{
                ...state,
                ciudades: action.payload,
            }
        case 'cargarCiudad':
            let ciudades = [...state.ciudades]
            ciudades.push(action.payload)
            return{
                ...state,
                ciudades,
                auxiliar: [...ciudades]
            }
        case 'filtro':
            const filtrado = action.payload.ciudades.filter((ciudad) => ciudad.name.toLowerCase().startsWith(action.payload.value.toLowerCase()))
            return {
                ...state,
                ciudades: filtrado
            }
        default:
            return state
    }
}
export default ciudadesReducer