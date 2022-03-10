import axios from 'axios'

const itineraryActions = {
  fetchearItineraries: () => {
    return async (dispatch, getState) => {
      const res = await axios.get('http://localhost:4000/api/allitineraries')
      dispatch({ type: 'itineraries/fetch', payload: res.data.response })
    }
  },
  fetchearItinerary: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get('http://localhost:4000/api/allitineraries/' + id);
      if (res.data.sucess) {
        dispatch({type: 'itineraries/fetchOne', payload: res.data.response })
      }
    }
  },
  fetchearItinerarioPorCiudad: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get('http://localhost:4000/api/allitineraries/city/' + id);
      // console.log(res.data)
      dispatch({type: 'itineraryCiudad/fetch', payload: res.data})
    }
  }
}
export default itineraryActions;