import React, {useRef} from 'react';

// ! TODOS LOS EVENTOS EMPIEZAN OR (on) IMORTANTE
// ! SI NECECITAMOS ARSA ARAMETROS DEBEMOS DE HACERLO CON UNA FUNCION ANONIMA


const Child = ( {name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')



    function PressButton(){
        const text = messageRef.current.value;
        alert(`Text in Imput: ${text}`);
    }
    
    function PressButtonParams(text){
        alert(` Text: ${text}`);
    }

    
    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }
    
    
    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log("On Mouse Over")}>
            Hello, {name}
            </p>
            <button onClick={() => console.log("Boton 1 Pulsado")} >
                Boton 1
            </button>
            <button onClick={PressButton} >
                Boton 2
            </button>
            <button onClick={PressButtonParams} >
                Boton 3
            </button>
            <input
            placeholder='Send a to your Father'
            onFocus={() => console.log("Input Focused")}
            onChange={(e) => console.log('Imput changed:' , e.target.value)}
            onCopy={() => console.log('Copied text from Input')}
            ref = {messageRef}
            >
            </input>
            <button onClick={() => send(messageRef.current.value)} > 
                Send Message
            </button>
            <div style={{marginTop: '20px'}}>

            <form onSubmit={submitName}>
                <input ref={nameRef} placeholder='New name' />
                <button type='submit'> Update Name</button>
            </form>


            </div>
        </div>
    );
}

export default Child;
