import React, {useEffect} from 'react';

const AllCycle = () => {
// -- SOLO SE PUEDE TENER UN SOLO USEEFECT DENTRO DE NUESTROS COMPONNETES 
// OSEA UN SOLOS POR COMPONENETES NO MAS DE 2
    useEffect(() => {
        console.log('Componente creado')
        document.title = `${new Date () }`
        const intervalID = setInterval( () => {
            console.log('Actualizacion de el componente')
        }, 1000)

        return () => {
            console.log('Componente va a desaparecer')
            document.title = 'Tiempo detenido'
            clearInterval(intervalID)
        };
    }, []);



// --- ESTO ES  LO QUE DEVOLVERA ESTE COMPONENETE DE TIPO FUNCION 
//--- SIEMPRE RETORNA UN DIV SOLO 1 NO MAS DE 1
    return (
        <div>
            
        </div>
    );
}

export default AllCycle;
