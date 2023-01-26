import './App.css';
import Form  from './Components/form.js';
import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { nanoid } from 'nanoid'



function App() {
  const [formArray, setFormArray] = React.useState([])
  const [currentForm, setCurrentForm] = React.useState((formArray[0] && formArray[0].id) || "")



  function addForm(){
      const newForm = {
        id: nanoid(),
        title: 'New',

      }

    setFormArray(prev => [...prev,newForm])
    return console.log(formArray)
   }

function delForm(){
    setFormArray()

  return console.log(formArray)
}
function findCurrentForm(){
 return formArray.find(form => {
  return form.id ===currentForm
 })
}




  return (
    <div className="App">
     <Sidebar  
     formArray={formArray}
     delForm={delForm} 
     addForm={addForm}
     setCurrentForm={setCurrentForm}
     currentForm={currentForm}
     />  
      <Form />
    </div>
  );
}

export default App;
