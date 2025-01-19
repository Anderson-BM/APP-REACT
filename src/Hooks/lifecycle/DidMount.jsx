/**
 * Ejemplo de uso del metodo
 * de ciclo de vida en componente clases y el hook de ciclo de vida
 * en componenetes funcionales
 */
import React, { Component, useEffect } from 'react';



/**
 * UTILIZANDO DIDMOUNT EN UN COMPONENTE DE TIPO CLASE   */
export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de eque el componneet sea añadido al DOM (renderice)')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


/**
 * UTILIZANDO DIDMOUNT EN UN COMPONENTE DE TIPO FUNCION CON 
 * EL USEEFECT DEJANDO LA LISTA VACIA []  */
export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de eque el componneet sea añadido al DOM (renderice)')
        return () => {
            
        };
    }, []); //--- SI COLOCAMOS LOS CORCHETES INDICA QUE SE EJECUTARA TODAS LAS VECES


    return (
        <div>
        <h1>DidMount</h1>
    </div>
    );
}
