/**
 * Ejemplo de uso de el comoponenete WillUnMount para componenete de clase
 * Ejemplo de uso del hooks para componente funcional 
 * (Cuando el componente va a desaparecer)
 */
import React, { Component, useEffect } from 'react';


/**
 * UTILIZANDO WillUnMount EN UN COMPONENTE DE TIPO CLASE   */
export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que le componenete desaparesca')
    }

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    }
}

/**
 * UTILIZANDO WillUnMount EN UN COMPONENTE DE TIPO CLASE   */
const WillUnMountHook = () => {

    useEffect(() => {
        
        return () => {
            console.log('Comportamiento antes de que le componenete desaparesca') 
        };
    }, []);


    return (
        <div>
                <h1>WillUnMount</h1>
        </div>
    );
}

export default WillUnMount;


/**SI ESTAMOS BUSCANDO DOCUMENTACION Y VEMOS UN PROYECTO O ALGO
 * PODEMOS COPIAR EL COMPONENETE Y TRASFORMALO EN NUESTRO COMPONENETE FUNCIONALES
 * ATRAVES DEL HOOKS USEEFECT 
 */