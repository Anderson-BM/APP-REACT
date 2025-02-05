import React, {useState} from 'react';

// ! podemos utilizar operadores ternarios dentro de nuestro conponentes
//? Estilo para ususario logeado
let red = 0;
let green = 200;
let blue = 150;

// Estilo para usuario logueado
const loggedStyle = {
  backgroundColor: `rgb(${red},${green},${blue})`,
  color: 'white',
  fontWeight: 'bold',
};

//? Estilo para ususario no logeado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'White',
    fontWeight: 'bold'
}


// Login /Logout buttons
const LoginButton = ({loginAction, propStyle}) => { 
  return(
     <button style={propStyle} onClick={loginAction}>Login</button>
  )

}

const LogoutButton = ({LogoutAction, propStyle}) => { 
    return(
       <button style={propStyle} onClick={LogoutAction}>Logout</button>
    )
  
  }



  // ? (Expreciones true) &&  exresion => se renderiza la exresion 
 // ? (Expreciones false) &&  exresion => no se renderiza la exresion 

const OptionalRender = () => {
   
    const [access, setAccess] = useState(false);
    const [nMessages, setNMessage] = useState(0);

   // const  updateAccess = () => {
    //    setAccess(!access);
    //}

    const loginAction = () => {
            setAccess(true)
        }
    const logoutAction = () => {
            setAccess(false)
        }


    let optionalButton;
    //  if (access) {      
      //    optionalButton = <button onClick={updateAccess}>Logout</button>
    //  }else{
     //     optionalButton = <button onClick={updateAccess}>Login</button>
    //  }


    if (access) {    
        optionalButton = <LogoutButton propStyle={unloggedStyle}  LogoutAction={logoutAction} ></LogoutButton> 
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle } loginAction={loginAction} ></LoginButton> 
      }
    
      // 
      let addMessage = () => { 
        setNMessage(nMessages + 1)   
    }






    return (
        <div>
            {/* Optional Button */}     
            {optionalButton}

            {/* N Mesagges unread */}     
             {/*{nMessages > 0 && nMessages === 1 && <p>You have{nMessages} New message...</p>}
            {nMessages > 1 && <p>You have{nMessages} New message...</p>}
            {nMessages === 0 && <p>There are new messages...</p>}*/}

             {/* Ternay Operator */}
             {access ? (<di>
                {nMessages > 0  ? 
             <p>You have{nMessages} New message{nMessages > 1 ? 's': null} ...</p> : 
             <p>There are new messages </p>
             }
            <button onClick={addMessage}>{nMessages  === 0 ? 'Add your first message': 'Add new Message'}</button>
             </di>) : null}
            
        </div>
    );
}

export default OptionalRender;
