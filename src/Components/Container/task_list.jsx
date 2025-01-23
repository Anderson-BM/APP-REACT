import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enunm';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';


const TaskList = () => {

    const desfaulTask1 = new Task('Programacion WEB', 'APP clon de Uber', true, LEVELS.NORMAL );
    const desfaulTask2 = new Task('Electva', 'Ensayo', true, LEVELS.URGENT );
    const desfaulTask3 = new Task('Electronica', 'Investigacion', true, LEVELS.URGENT );
    const desfaulTask4 = new Task('Laboratorio', 'nose', true, LEVELS.NORMAL );
    const desfaulTask5 = new Task('Ingles Tecnico', 'Entrevista Tecnca', false, LEVELS.NORMAL );
    const desfaulTask6= new Task('Programacion 2', 'C# .NET', true, LEVELS.URGENT );
    




     // ESTADO DE EL COMPONENETE
      const [tasks, setTasks] = useState([desfaulTask1,desfaulTask2,desfaulTask3,desfaulTask4,desfaulTask5,desfaulTask6]);
      const [loandig, setLoandig] = useState(true);


     // CONTROL DE EL CICLO DE VIDA DE EL COMPONENETE
    useEffect(() => {
    console.log('Task State has been componente')
    setLoandig(false)
    return () => {
        console.log('TaskList componet is goin to unmount...')

    };
}, [tasks]);


        // Esta es una Funcion para Completar Tareas
        function completeTask(task){
        console.log('Complete this Task:', task)
        const index = tasks.indexOf(task);
        const temTasks = [...tasks];
        temTasks[index].completed = ! temTasks[index].completed
        // we update the satte oh the componen with the new list of task and it will ipdate the Iteration of tasks in 
        // orde to show the task update
        setTasks(temTasks)
      }


        // Esta es una Funcion para eliminar Tareas
        function deletTask(task){
        console.log('Delete this Task:', task)
        const index = tasks.indexOf(task);
        const temTasks = [...tasks];
        temTasks.splice(index,1);
        setTasks(temTasks)

    }


    // Esta es una Funcion para eliminar Tareas
    function addTask(task){
        console.log('Add this Task:', task)
        const index = tasks.indexOf(task);
        const temTasks = [...tasks];
        temTasks.push(task)
        setTasks(temTasks)

    }

    return (
        <div>
            <div className='col-12'>

              <div className='card'>
                 {/* Card Body (title) */}
              <div className='card-header p-3'>
                <h5>
                  Your Task: 
              </h5>
              </div>
                  {/* Card Body (content) */}
                  <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'}}>
                  <table>
                    <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Descrition</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    { tasks.map((task, index) => {
                    return  (
                        <TaskComponent
                         key={index}
                         task={task}
                         complete={completeTask}
                         remove={deletTask}

                         >
                         </TaskComponent>
                        )
                        }
                        )}

                    </tbody>

                  </table>
                  </div>
                  
               </div>


              
            </div>
            
          {/*   <TaskComponent task={desfaulTask} ></TaskComponent>*/}
          <TaskForm add={addTask}></TaskForm>
        </div>
    );
};


export default TaskList;
