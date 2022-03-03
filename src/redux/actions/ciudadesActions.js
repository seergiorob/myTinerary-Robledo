import axios from 'axios'

const ciudadesActions = {

    fetchearCiudades: () => {
        return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/allcities')
            dispatch({type:'fetch', payload: res.data.respuesta})
        }
    },
    borrarCiudad: (id)=>{
        return async(dispatch, getState) => {
            try{
                const res = await axios.delete('http://localhost:4000/api/allcities/'+id)
            
            dispatch({type:'delete', payload: res.data.respuesta})
        }
        catch(err){
            console.log(err)
        }
    }
    },
    filtrar: (ciudades, value)=>{
        return (dispatch, getState)=>{
            dispatch({type:'filtro', payload:{ciudades, value}})
        }
    },
    cargarCiudad: (name, image, currency, population, country, timezone)=>{
        return async(dispatch, getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/allcities)',{name,image,currency,population,country,timezone})
            dispatch({type:'cargarCiudad', payload:respuesta.data.respuesta})
        }
    }



}//termina

export default ciudadesActions;