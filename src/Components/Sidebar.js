import React, { useState } from 'react';
export default Sidebar
function Sidebar(props) {
  
  
   
  const formElements = props.formArray.map((form) => <div
   className={`title ${form.id=== props.currentForm? 'active-form' : 'form'}`}
   onClick={() => props.setCurrentForm(form.id)}
  ><h4>{form.title}</h4>  <button onClick={props.delForm} className='trash-sidebar'><i class="fa-solid fa-trash"></i></button>
  </div>)

  



  return (
    <div className="sidebar">
      <button onClick={props.addForm} className='main-plus-sidebar'><i class="fa-solid fa-plus"></i></button>
      {formElements}
    </div>
  );
}

