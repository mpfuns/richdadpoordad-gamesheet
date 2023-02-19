import React, { useState } from 'react';
export default Sidebar
function Sidebar(props) {
  

  
function activeAndCurrentForm(form) {
   if(props.currentForm.id===form.id){
    
    return "active-form"} else{return "form"}
  
   

}  





  const formElements = props.formArray.map((form) => <div
  className={props.currentForm? activeAndCurrentForm(form) :"form"}
  key={form.id}
   id={form.id}
   onClick={() =>props.setCurrentForm(form)}
  ><h4>{form.title}</h4>  <button onClick={(event)=> props.delForm(event,form.id)} className='trash-sidebar'><i className="fa-solid fa-trash"></i></button>
  </div>)

  



  return (
    <div className="sidebar">
      <button onClick={props.addForm} className='main-plus-sidebar'><i className="fa-solid fa-plus"></i></button>
      {formElements}
    </div>
  );
}

