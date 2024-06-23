import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { RiEditCircleFill } from "react-icons/ri";
import { RiDeleteBin2Fill } from "react-icons/ri";



function TodoTable(props) {
  const { colums, data, doneHandler, editHandler, deleteHandler } = props;
  console.log("DATA : ", data, colums);
  return (
    <>
      <table className="tableMain">
        <tr className="headRow">
          {colums.map((item, index) => (
            <th className="headerCell">{item.columName}</th>
          ))}
        </tr>

        {data.map((item, index) => (
          <tr className={`dataRow ${item.doneFlag === true? '' : ''}`}>
            {colums.map((data, index) => (
              <td className={` ${item.doneFlag === true? 'inlinebox' : 'dataCell'}`}  >
                {data.path === "action" ? (
                  <div className="iconMain">
                    <div className="icon">
                      <IoCheckmarkDoneCircleSharp  onClick={()=>doneHandler(item)}/>
                    </div>{" "}
                    <div className="icon"><RiEditCircleFill onClick={()=>editHandler(item)}/>
                    </div>
                    <div className="icon"><RiDeleteBin2Fill onClick={()=>deleteHandler(item)}/>
                    </div>
                  </div>
                ) : (
                    
                        item[data.path]
                    
                  
                
                )}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
}

export default TodoTable;
