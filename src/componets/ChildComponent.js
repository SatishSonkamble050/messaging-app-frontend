import React from 'react';

const ChildComponent = React.memo(({ onTextChange }) => {
  console.log("Child component rendered");
//   console.log("DISPLAY TEXT : ", text)

  return (
    <div>
      <input type="text" onChange={onTextChange} className='border-2'/>
    </div>
  );
});

export default ChildComponent;
