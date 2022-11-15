import React from 'react'

function Greeting(props) {
    console.log(props.lang)
    let theGreeting = "";
    props.lang === "de" ? theGreeting = "Hallo"
        : props.lang === "fr" ? theGreeting = "Bonjour" 
        : props.lang === "es" ? theGreeting = "Hola" 
        : props.lang === "es" ? theGreeting = "Hola" 
        : theGreeting = "Hello";
        
  return (
    <div className='greeting'>
        <p> {theGreeting} {props.children}</p>
    </div>
  )
}

export default Greeting