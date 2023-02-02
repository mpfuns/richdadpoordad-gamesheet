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
        income:{
          salary:"0",
          interest:{

          },
          realEstate:{

          }
        }, 
        expense:{
          taxes:"0",
          home:"0",
          school:"0",
          car:"0",
          credit:"0",
          bank:"0",
          children:"0",
          otherExpense:{}

        }, 
        asset:{
          saving:"0",
          precious:"0",
          stocks:{},
          business:{}
        },
        liabilities:{
          mort:"0",
          sLoan:"0",
          cLoan:"0", 
        }


      }

    setFormArray(prev => [...prev,newForm])
    return console.log(formArray)
   }

function delForm(event, formID){
    event.stopPropagation();
    setFormArray(oldForm => oldForm.filter(form => form.id!== formID))

  return console.log("deleted", formID)
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
