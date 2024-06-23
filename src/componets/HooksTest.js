import React, { act, useReducer } from 'react'

const reducer = (state, action)=>{
console.log("ACTION : ", action)
return parseInt(state) + 10
}
function HooksTest() {
    const [state, dispatch] = useReducer(reducer, 10)
    
  return (
    <div>
        <h1 className='bg-blue-500 p-2'>HOOKS TEST</h1>
        <div className='m-4'>
            {state}
        </div>
        <div>
            <button className='bg-blue-200 p-4 m-2' onClick={()=>dispatch({type : "INC"})}>INC</button>
            <button className='bg-red-200 p-4 m-2' onClick={()=>dispatch({type : "DEC"})}>DEC</button>
        </div>


    </div>
  )
}

export default HooksTest