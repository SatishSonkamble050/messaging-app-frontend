import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

function UseCallBackFun() {
    //console.log("PARENT CLASS =-================")
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const increment = useCallback(()=>{
        console.log("INCREAMENT -----------------")
        setCount(count+1)
    },[count])

    const handleTextChange = useCallback((e)=>{
        console.log("ON CHANGE ---------------------")
        setText(e.target.value)
    },[])

    // const handleTextChange =(e)=>{
    //     console.log("ON CHANGE ---------------------")
    //     setText(e.target.value)
    // }


  return (
    <div>
      <h1>Count: {count}{text}</h1>
      <button onClick={increment} className='p-2 bg-blue-400 m-4'>Increment</button>
      <div></div>
      <input type="text" value={text} onChange={handleTextChange}  className='border-2'/>
      <ChildComponent onTextChange={handleTextChange} />
    </div>
  )
}

export default UseCallBackFun