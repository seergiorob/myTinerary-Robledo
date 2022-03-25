import axios from 'axios'

const ciudadesActions = {
  fetchearCiudades: () => {
    return async (dispatch, getState) => {
      const res = await axios.get('http://localhost:4000/api/allcities')
      dispatch({ type: 'ciudades/fetch', payload: res.data.response.ciudades })
    }
  },
  fetchearCiudad: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get('http://localhost:4000/api/allcities/' + id);
      // console.log(res.data.response)
      try{
        dispatch({type: 'ciudad/fetchOne', payload: res.data.response })
      }catch (err) {
        console.log(err)
      }
      
    }
  },
  borrarCiudad: (id) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.delete('http://localhost:4000/api/allcities/' + id)
        dispatch({ type: 'ciudades/delete', payload: res.data.response.ciudad })
      } catch (err) {
        console.log(err)
      }
    }
  },
  filtrar: (value) => {
    return (dispatch, getState) => {
      dispatch({ type: 'ciudades/filtro', payload: value })
    }
  },
  cargarCiudad: (name, image, currency, population, country, timezone) => {
    return async (dispatch, getState) => {
      const respuesta = await axios.post(
        'http://localhost:4000/api/allcities)',
        { name, image, currency, population, country, timezone },
      )
      dispatch({
        type: 'ciudades/cargarCiudad',
        payload: respuesta.data.response.ciudades,
      })
    }
  },
} //termina

export default ciudadesActions
