/**
 * Ejemplo de uso de metodo componentDidUpdate en componentes de clase
 * y uso de hook en componenet funcional
 */
import React, { Component, useEffect } from 'react'




/**
 * UTILIZANDO DidUpdate EN UN COMPONENTE DE TIPO CLASE   */
export  class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componenetes recibe nuevos prosp o cambios en sus componenetes privados')

    }

  render() {
    return (
      <div>
       <h1>DidUpdate </h1> 
      </div>
    )
  }
}


/**
 * UTILIZANDO DidUpdate EN UN COMPONENTE DE TIPO FUNCION   */
export const DidUpdateHook = () => {

   useEffect(() => {
    console.log('Comportamiento cuando el componenetes recibe nuevos prosp o cambios en sus componenetes privados')
   }); // -- CUANDO LO EJECUTAMOS SIN CORCHEES INDICA QUE SE EJECUTARA TODAS LAS VECES 
   //--- SI COLOCAMOS LOS CORCHETES INDICA QUE SE EJECUTARA TODAS LAS VECES


    return (
        <div>
        <h1>DidUpdate </h1> 
       </div>
    );
}

