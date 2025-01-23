//----- AQUI ESTAN LSO IMPOR QU ENECECITAMOS
import React, {useRef,} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enunm';
import { Task } from '../../../models/task.class';


//--- ESTE ESL EL TITULO QU ENOS DICE QUE ES UN FORMULARIO
<h1>Formulario</h1>

//---- ESTE ES UN COMPONENTE EN REACT DE TIPO FUNCION
const TaskForm = ({add}) => {


    //---- AQUI UTILIZAMOS EL HOOK USEREF
    const nameRef = useRef('');
    const descritionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);


    //------ ESTA ES LA FUNCION PARA AGREGAR TAREAS
    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descritionRef.current.value,
            false, 
            levelRef.current.value
        )
        add(newTask);
    }


    // ---- LO QUE NOS RETORNARA SERA ESTE FORMULARIO
    return (
    <form onSubmit={addTask} className='d-flex justity-content-center aling-item-center'>
        <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name' />
        <input ref={descritionRef} id='inputDescrition' type='text' className='form-control form-control-lg' required placeholder='Task Descrition'  />
        <label htmlFor='selectLevel' className='sr-only'>Priority</label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
        <option value={LEVELS.NORMAL}>
            Normal
        </option>
        <option value={LEVELS.URGENT}>
            Urgent
        </option>
        <option value={LEVELS.BLOKING}>
            Bloking
        </option>
        </select>
        </div>
        <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
    </form>
    );
}


// ------ AQUI ESTAN LAS PROPS TYPE
TaskForm.protoTypes = {
    add: PropTypes.func.isRequired
}

//--- ESTO HACE QUE EL IMPORT EN EL APP.JS SE AUTO COMPLETE Y NOS REDERICE EL COMPONENTE
export default TaskForm;
