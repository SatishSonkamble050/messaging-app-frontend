import React, { useState } from 'react'

function Email(props) {
    const {value} = props
    const [input, setInput] = useState('')
    const [erorr, setError] = useState(null)

    const emailValidation = (input) =>{
        const patter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!patter.test(input)){
            return "Please enter valid email ID"
        }else{
            return null
        }
    }

    const onChanageHanlder = (e)=>{
        setInput(e.target.value)
        const erorrValidation = emailValidation(e.target.value)
        setError(erorrValidation)
    }
  return (
    <>
    <h1>Hello</h1>
    <input  type='text' name ='email' value={input} style={{border : '1px solid black'}} onChange={(e)=>onChanageHanlder(e)}/>
    <div>{erorr}</div>
    </>
  )
}

export default Email