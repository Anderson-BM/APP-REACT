import React, {useState}  from 'react';
import PropTypes from 'prop-types';

// ESTE ES UN COMPONENETE DE TIPO FUNCION LOS MAS UTILIZADOS POR QUE RETORNAN UN VALOR 
// OSEA RETORNAN UN DIV Y SU ESTRUCTURA ES MAS FACIL
const GretingF = (props) => {

    // BREVE INTRODUCION A USESTATE
    const [age, setate] = useState(19);

    const birthday = () => {
    // actualizamos el state
    setate(age + 1);

    }

    return (
        <div>
        
        <h1>
         Hola { props.name } Apellido { props.lasname } desde componenete Funcional
        </h1>
        <h2>
        Tu edad es de: { age }
        </h2>
        <div>
            <button onClick={birthday}>
                Cumplir Años
            </button>
        </div>
            
        </div>
    );
};

 // ESTO ES VACIMANETE LAS PROPIEDADES Y DE QUE TIPO SON AQUI LAS DEFINIMOS "PROPTYPE"
GretingF.propTypes = {
    name: PropTypes.string

};
GretingF.propTypes = {
    lasname: PropTypes.string

};


export default GretingF;
