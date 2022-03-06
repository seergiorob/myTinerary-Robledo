import React, { Component } from 'react'
import ciudadesActions from '../../redux/actions/ciudadesActions'
import {connect} from 'react-redux'


class prova extends Component {

    // state = {
    //     arrayCiudades:[]
    // }
    componentDidMount() {
        this.props.fetchearCiudades()
        

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
        ciudades: state.ciudadesReducer.ciudades,
        auxiliar: state.ciudadesReducer.auxiliar,
    }
 }


export default connect(mapStateToProps, mapDispatchToProps)(prova);
