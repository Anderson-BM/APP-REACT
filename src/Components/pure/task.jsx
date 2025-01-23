import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
// importammos la hoja de estilo task,scss
import '../../Styles/task.scss'
import { LEVELS } from "../../models/levels.enunm";

const TaskComponent = ({task, complete, remove }) => {

    useEffect(() => {
        console.log('create Tak')
        return () => {
            console.log(`Task: ${task.name} isgoin to unmount`);
        };
    }, [task]);



    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return( 
                <h6 className='mb-0'>
                <span className="badge bg-primary">
                  {task.level}
                </span>
                </h6>)
         case LEVELS.URGENT:
            return( 
            <h6 className='mb-0'>
            <span className="badge bg-warning">
              {task.level}
            </span>
            </h6>)
                case LEVELS.BLOCKING: // Asegúrate de que esta constante esté correctamente escrita
                return (
                    <h6 className='mb-0'>
                        <span className="badge bg-danger">
                            {task.level}
                        </span>
                    </h6>
                );
            default:
          
                    break;


        }



    }
  // -Anderson

    function taskCompleteIcon() {

        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-acction' style={{color:'green'}}></i>) 

        }else{
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-acction' style={{color:'grey'}}></i>)

        }
    }







    

    return (

        <tr className='fw-normal'> 
        <th>
            <span className='ms-2'>{task.name}</span>
        </th>
         <td className='align-middle'> 
         <span>{task.descrition}</span>
         </td>
         <td className='align-middle'>
         {/* Executions of functions to return badge alement */} 
         {taskLevelBadge()}
         </td>
         <td className='align-middle'> 
         {/*Executions of funtion to return icon deendig on comletion  */}
         {taskCompleteIcon()}
         <i className='bi-trash task-acction' style={{color:'tomato' }} onClick={() => remove (task)}></i>
         </td>
         </tr>

    );
};


TaskComponent.propTypes = { 
    task: PropTypes.instanceOf(Task).isRequired, // instance off es cuando no le especifico si es string o algo asi en este caso quiero que sea una tarea osea task
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
