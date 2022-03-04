import React, { Component } from 'react'
import ciudadesActions from '../../redux/actions/ciudadesActions'
import {connect} from 'react-redux'


class prova extends Component {

    // state = {
    //     arrayCiudades:[]
    // }
    componentDidMount() {
        this.props.fetchearCiudades()
        // console.log(ciudades)

    }

    render() {

        return (
            <div>
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchearCiudades: ciudadesActions.fetchearCiudades,
    filtrar: ciudadesActions.filtrar,
 }

 const mapStateToProps = (state) =>{
    return {
        ciudades: state.ciudadReducer.ciudades,
        auxiliar: state.ciudadesReducer.auxiliar,
    }
 }


export default connect(mapStateToProps, mapDispatchToProps)(prova);
