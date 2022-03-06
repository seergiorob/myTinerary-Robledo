const initialState = {
  todasCiudades: [],
  ciudades: [],
  filtro: '',
  cargado: false,
}

const ciudadesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ciudades/fetch': {
      const cargado = true
      const todasCiudades = action.payload
      const ciudades = todasCiudades.filter((ciudad) =>
        ciudad.name.toLowerCase().startsWith(state.filtro),
      )
      return {
        ...state,
        cargado,
        ciudades,
        todasCiudades,
      }
    }
    case 'ciudades/delete': {
      const todasCiudades = action.payload.filter(
        (ciudad) => ciudad._id !== action.payload._id,
      )
      const ciudades = todasCiudades.filter((ciudad) =>
        ciudad.name.toLowerCase().startsWith(state.filtro),
      )
      return {
        ...state,
        ciudades,
        todasCiudades,
      }
    }
    case 'ciudades/cargarCiudad': {
      const todasCiudades = [...state.todasCiudades, action.payload];
      const ciudades = todasCiudades.filter((ciudad) =>
        ciudad.name.toLowerCase().startsWith(state.filtro),
      )
      return {
        ...state,
        ciudades,
        todasCiudades: ciudades,
      }
    }
    case 'ciudades/filtro': {
        const filtro = action.payload.toLowerCase();
        const ciudades = state.todasCiudades.filter((ciudad) =>
          ciudad.name
            .toLowerCase()
            .startsWith(filtro)
        )
      return {
        ...state,
        filtro,
        ciudades,
      }
    }
    default:
      return state
  }
}
export default ciudadesReducer
