import logo from './logo.svg';
import './App.css';

// Añadimos Boostrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
// ! Importante: los estilo propios, deben ir debajo del bootstrap para que no los pise

import GreetingC from './Components/pure/greetingC';
import GretingF from './Components/pure/gretingF';
import TaskListComponent from './Components/Container/task_list';
import Ejemplo1 from './Hooks/Ejemplo1'
import Ejemplo2 from './Hooks/Ejemplo2'; 
import Ejemplo3 from './Hooks/Ejemplo3'
import Ejemplo4 from './Hooks/Ejemplo4'; 
import MiComponenteConContexto from './Hooks/Ejemplo3';
import GreetingStyled from './Components/pure/greetingStyled';
import Fhater  from './Components/Container/fhater';
import OptionalRender from './Components/pure/otionalRender';



// -- AQUI RENDERIZAMOS LOS COMONENTES ARA QUE SE VIZUALICEN EN LA VISTA
// -- AQUI RENDERIZAMOS LOS COMONENTES ARA QUE SE VIZUALICEN EN LA VISTA


// -- ESTE ES UN COMPONENTE, LOS COMPONENTES SOLO RETORNAN UN ELEMENTO 
//-- OSEA SOLO PUEDEN RETORNAR UN DIV
// -- UN COMPONENET ES UN ELEMENTO REUTILIZABLE
function App() {
  return (
    <div className="App">

    {/*   <header className="App-header">*/}
      {/*   <img src={logo} className="App-logo" alt="logo" />
      {/* Compononte propio de tipo clase Greeting.jsx */}
      {/* <GreetingC name="Anderson"></GreetingC>**/}
      {/* Compononte propio de tipo Funcion Greeting.jsx */}
      {/* <GretingF name="Anderson" >  </GretingF> */}


      {/* Compononte de Listado de Tareas */}     
      {/*<TaskListComponent></TaskListComponent>*/}  


      {/* Ejemplo de usos de Hooks */}  
      {/*<Ejemplo1></Ejemplo1>*/}
      {/* <Ejemplo2></Ejemplo2>*/}
        {/* <Ejemplo3></Ejemplo3>*/}
      {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
      {/*Todo lo que hay aqui es tratado como props.children*/}
     {/*<Ejemplo4 nombre="Anderson">
      <h3>
        Contenido del Props.children
      </h3>
      </Ejemplo4>*/}
    {/*   </header>*/}
    {/*   <GreetingStyled></GreetingStyled>*/}
     {/* <Fhater></Fhater>*/}
    {/*  <OptionalRender></OptionalRender>*/}


    
        <TaskListComponent></TaskListComponent>


     
    

    </div>
  );
}

export default App;
