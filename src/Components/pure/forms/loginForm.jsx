/**
 * Componeneteque va a contener un formulario para 
 * autentifcacion de usuarios
 */
import React, {useState} from 'react';


    
const LoginForm = () => {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
        ];
    
        const [credentials, setCredentials] = useState(initialCredentials);
    


    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
