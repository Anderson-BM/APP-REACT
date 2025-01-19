/** ---EJEMPLO DE USOS DEL HOOks  useState  */

/** ---CREAR UN COMPONENETED ETIPO FUNCION Y ACEDER A SU ESTADO PRIVADO ATRAVES DE UN HOOK Y ADEMAS PODER MODIFICARLO  */

/**
 * ejemplo de uso del hook useState
 * 
 * Crear un componente de tipo funcion t acceder a su estado
 * privado a traves de un hook y ademas poder modificarlo
 */
// para usar los hooks primero se importan en este caso useState


import React, {useState}  from 'react';

const Ejemplo1 = () => {
   // VALOR INICIAL ARA UN CONTADOR

   const valorIncial = 0 ;

   // VALOR INICIAL ARA UNA ERSONA
   const personaInicial = {
       nombre : 'Anderson',
       email : 'anderson@gmail.com'
   }

   /** ---Querermos que el valorinicial y ersonainical sean 
    * arte del estado del comonenete ara asi oder gestionar su cambio y que este vea 
    * reflejado en la vista del comonente
    * 
    * const nombreVariable, funcionaraCambiar] = useState (valorIncial)
     */

   const [contador, setContador] = useState(valorIncial)
   const [persona, setPersona] = useState(personaInicial)
   
   /**
    * Funcion para actualizar el estado privado que contiene el contador
    * 
    */
   function incrementarContador(){
       //? funcionParaCambiar(nuevoValor)
       setContador(contador +1);
   }

       /**
     * Funcion para actualizar el estado de la persona en el componente
     */

       function actualizarPersona(){
        setPersona(
            {
                nombre: 'pepe',
                email: 'pepe@imaginagroup.com'
            }
        )
    }



    return (
        <div>
            <h1>ejemplo de useState()</h1>
        <h2>
            contador: {contador}
        </h2>

        <h2>
            Datos de la persona:
        </h2>
        <h3>
            Nombre: {persona.nombre}
        </h3>
        <h4>
            Email: {persona.email}
        </h4>
        {/*botones para cambiar los contadores*/}
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
        {/* asi se llama una funcion a un boton con {}*/}
        </div>
    );
}

export default Ejemplo1;