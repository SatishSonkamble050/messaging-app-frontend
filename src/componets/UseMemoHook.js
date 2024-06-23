import React, { useMemo, useRef, useState } from 'react'


const numd = new Array(10000000).fill(0).map((_, i)=> i)
function UseMemoHook() {

    const [num, setNum] = useState(0)
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(numd)
    const inputRef = useRef()

    const functionForUseMemo = useMemo(()=> number.find(item=> item === 9999999), [])
    
    //const functionForUseMemo = number.find(item=> item === 9999999)

    const onfocusHandler = ()=>{
        inputRef.current.focus()
    }
  return (
    <>
        <div>UseMemoHook</div>
        <div>{functionForUseMemo}</div>
        <div>{count}</div>
        <div>
            <button className='bg-blue-500 p-2' onClick={()=>setCount(count+1)}>INC++</button>
        </div>
        <div>
            <h1>+++++++++++ USE REF ++++++++++++++</h1>
            <div>
                <input ref = {inputRef} type='text' ></input>
                <button className='bg-red-200 p-4' onClick={onfocusHandler}>CLICK TO FOCUS</button>
            </div>
        </div>
    </>
    
  )
}

export default UseMemoHook