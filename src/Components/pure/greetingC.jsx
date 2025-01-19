//------ EXINTEN 2 TIPOS DE COMPONENTES DE TIPO:
//-- CLASE Y DE TIPO FUNTION
// -- NO SE PUEDE RETORNAR 2 COMPONENTES ANIDADOS OSEA 2 DIV
import React, { Component } from 'react';
import PropTypes from 'prop-types';




// -- LOS COMPONENTES DE TIPO CLASE TIENEN, CONTRCTOR, METODOS Y DEMAS
// -- ESTE ES UN COMPONENTE DE TIPO CLASE SU ESTRUCTURA Y COMO FUNCIONA
class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 29
        }
    }

    render() {
        return (
            <div>
            <h1>
             Hola {this.props.name} 
            </h1>
            <h2>
            Tu edad es de: { this.state.age }
            </h2>
            <div>
                <button onClick={this.birthday}>
                    Cumplir Años
                </button>
            </div>
                
            </div>
        );
    }



    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string
};


export default Greeting;
