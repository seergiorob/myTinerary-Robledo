const initialState = {
    todosItinerarios: [],
    itinerarios: [],
    filtroItinerarios: '',
    cargadoi: false,
  }
  
  const itinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'itineraries/fetch': {
        const cargadoi = true
        const todosItinerarios = action.payload;
        const itinerarios = todosItinerarios.filter((itinerary) =>
        itinerary.name.toLowerCase().startsWith(state.filtroItinerarios),
        )
        return {
          ...state,
          cargadoi,
          itinerarios,
          todosItinerarios,
        }
      }
      case 'itineraries/fetchOne': {
        return{
          ...state,
          cargadoi: true,
          itinerarios: action.payload
        }
      }
    }
}