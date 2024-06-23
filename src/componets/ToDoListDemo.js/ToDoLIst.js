import React, { useCallback, useEffect, useState } from "react";
import TodoTable from "./TodoTable";
import "./todo.css";

function ToDoLIst() {
  const colums = [
    {
      id: 0,
      columName: "S.NO",
      path: "id",
    },
    {
      id: 1,
      columName: "Task Name",
      path: "taskName",
    },
    {
      id: 2,
      columName: "Action",
      path: "action",
    },
  ];

  let demoData = [
    {
      id: 1,
      taskName: "item 1",
      action: "View",
    },
    {
      id: 2,
      taskName: "item 2",
      action: "View",
    },
    {
      id: 3,
      taskName: "item 3",
      action: "View",
    },
  ];

 

  const localData = localStorage.getItem("data");
  const finalData = JSON.parse(localData != undefined && localData);
  const [data, setData] = useState(finalData);
  const [taskName, settaskName] = useState("");
  const [flagDone, setDoneFlag] = useState(false)
  const [editItem, setEditItem] = useState(null)

  // useEffect(()=>{
  //   const localData = localStorage.getItem("data");
  //   const finalData = JSON.parse(localData != undefined && localData);
  //   setData(finalData)
  // },[flagDone])

  const localStorageSetHandlet = (data) =>{
      localStorage.setItem('data', JSON.stringify(data))
  }

  const saveHandler = () => {
    let randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    let uniqid = randLetter;
    const dataInput = {
      id: Date.now(),
      taskName: taskName,
      action: "view",
      doneFlag : false
    };
    if(editItem){
      // const index = data.findIndex(ele => ele.id === editItem.id)
      // data[index].taskName = taskName
      // localStorageSetHandlet(data)
      // setDoneFlag(!flagDone)
      // setEditItem(null)

      setData(data.map(data => data.id === editItem.id? {...data, taskName : taskName} : data))
      setEditItem(null)
    }else{
      setData(!data? [dataInput] : [...data, dataInput])
    }
    
    
    settaskName("");
  };

  


  //doneHandler, editHandler, deleteHandler

  // task is finsied function -------------------------------
  const doneHandler = useCallback((item)=>{
    // let objIndex = data.findIndex(obj => obj.id === item.id)
    // data[objIndex].doneFlag = true
    // setData(data)
    // localStorageSetHandlet(data)
    // setDoneFlag(!flagDone)

    setData(data.map(data => data.id === item.id? {...data, doneFlag : !data.doneFlag} : data))
    
  },[data])

  // Edit the task name -----------------------------
  const editHandler = useCallback((item)=>{
     setEditItem(item)
     settaskName(item.taskName)

    //setData(data.map(data => data.id === item.id? ))
  },[data])

  // Delete the Task -----------------------------------------
  const deleteHandler = useCallback((item)=>{
    setData(data.filter(data => data.id != item.id))
  },[data])


  useEffect(() => {
    localStorageSetHandlet(data)
  }, [data]);

  


  return (
    <div className="toDoMainContainer">
      <div className="innerContainer">
        <h1>TO DO LIST </h1>
        <div className="addFiled">
          <input
            type="text"
            className="inputField"
            onChange={(e) => settaskName(e.target.value)}
            value={taskName}
          />
          <button className="saveButton" onClick={saveHandler}>
            Save
          </button>
        </div>
        <div>TASKS : </div>
        <hr></hr>
        <div className="tableContainer">
          <TodoTable colums={colums} data={data? data : []} editHandler ={editHandler} doneHandler = {doneHandler} deleteHandler = {deleteHandler}/>
        </div>
      </div>
    </div>
  );
}

export default ToDoLIst;
