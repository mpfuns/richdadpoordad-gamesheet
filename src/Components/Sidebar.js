import React, { useState } from 'react';
export default Sidebar
function Sidebar() {
  
  const [thingArray, setThingArray] = React.useState(["thing1","thing2"])
   
  function addForm(){


    setThingArray(prev => [...prev, `thing${prev.length + 1}`])
    return console.log(thingArray)
   }

function delForm(){


  return console.log(thingArray)
}


  return (
    <div className="sidebar">
      <button onClick={addForm} className='main-plus-sidebar'><i class="fa-solid fa-plus"></i></button>
      <button onClick={delForm} className='main-trash-sidebar'><i class="fa-solid fa-trash"></i></button>
    </div>
  );
}

