import React, { useState } from 'react';
export default Sidebar
function Sidebar(props) {
  
  const activeForm= {
    backgroundColor: "#282c34",
  color: "white",
  cursor: "pointer",
  fontFamily: 'Fredericka the Great',
fontStyle: "normal",
fontWeight: 400,
fontSize: "32px"
  }

  const notActiveForm={
  fontFamily: 'Fredericka the Great',
fontStyle: "normal",
fontWeight: 400,
fontSize: "32px",
color: "#000000",
cursor: "pointer"
  }
  
function activeAndCurrentForm(form) {

formElements.map( piece =>{
   if (piece.id=== form.id){
    
    document.getElementById(piece.id).className="active-form"

   } else if (piece.id !== form.id){
    document.getElementById(piece.id).className = "form"
   }
})

  return props.setCurrentForm(form)
}  





  const formElements = props.formArray.map((form) => <div
  className='form'
   id={form.id}
   onClick={() =>activeAndCurrentForm(form)}
  ><h4>{form.title}</h4>  <button onClick={(event)=> props.delForm(event,form.id)} className='trash-sidebar'><i className="fa-solid fa-trash"></i></button>
  </div>)

  



  return (
    <div className="sidebar">
      <button onClick={props.addForm} className='main-plus-sidebar'><i className="fa-solid fa-plus"></i></button>
      {formElements}
    </div>
  );
}

