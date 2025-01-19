import React, {useState} from 'react';

// DEFINIENDO ESTILO EN CONTASTE

//? Estilo para ususario logeado
const loggedStyle = {
    color: 'White'
};

//? Estilo para ususario no logeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {
// Generamos un estado para el componenete
// y asi controlar si el usuario esta o no logeado
    const [logged, setLogged] = useState(false);
 

    return (
        <div style={ logged ? loggedStyle : unloggedStyle} >
        { logged ?
         (<p>Hola, {props.name}</p>)
         : 
         (<p>Please loguin</p>)}

            
            <button onClick={() => { 
            console.log('Boton Pulsado');
            setLogged (!logged);   
            }}>
                { logged ? 'Logout' : 'Loguin' }
            </button>
        </div>
    );
}

export default GreetingStyled;
