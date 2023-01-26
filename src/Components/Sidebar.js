import React, { useState } from 'react';
export default Sidebar
function Sidebar(props) {
  
  
   
  const formElements = props.formArray.map((form) => <div
   className={`title ${form.id=== props.}`}
  
  >{form.title}</div>)

  



  return (
    <div className="sidebar">
      {formElements}
      <button onClick={props.addForm} className='main-plus-sidebar'><i class="fa-solid fa-plus"></i></button>
      <button onClick={props.delForm} className='main-trash-sidebar'><i class="fa-solid fa-trash"></i></button>
    </div>
  );
}

