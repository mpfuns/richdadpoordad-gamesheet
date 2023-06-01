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
  ><h3>{form.title}</h3>  <button  onClick={(event)=> props.delForm(event,form.id)} className='trash-sidebar'><i className="fa-solid fa-trash"></i></button>
  </div>)

  


  return (
 <div>
    <div className="sidebar">
      <button id="sidebutton" className="main-button" onClick={props.addForm} ><i className="fa-solid fa-plus"></i></button>
      {formElements}
      </div>
    </div>
  );
}

