import './App.css';
import Form  from './Components/form.js';
import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { nanoid } from 'nanoid'



function App() {
  const [formArray, setFormArray] = React.useState([])
  const [currentForm, setCurrentForm] = React.useState()

 function addInputs(event, formID,sectionId){
event.stopPropgation();
const newSection={
name:"", 
id: nanoid(),
value:""
}

if(sectionId ==="i-dAdd"){
 setFormArray(prev => prev.map(form=> {
   if (form.id === formID){
     return {...form,
    income: {...form.income, 
    interest:[...form.interest, newSection]
    }}
   }
   else{
    return {...form}
   }
 }))
}
else if(sectionId==="r-eAdd"){

} 
else if(sectionId==="o-eAdd"){

}
else if(sectionId==="s-fAdd"){

}
else if(sectionId==="r-bAdd"){

}
else if(sectionId==="r-mAdd"){

}





}





  function addForm(){
      const newForm = {
        id: nanoid(),
        title: 'New',
        income:{
          salary:"0",
          interest:[],
          realEstate:[]
        }, 
        expense:{
          taxes:"0",
          home:"0",
          school:"0",
          car:"0",
          credit:"0",
          bank:"0",
          children:"0",
          otherExpense:[]

        }, 
        asset:{
          saving:"0",
          precious:"0",
          stocks:[],
          business:[]
        },
        liabilities:{
          mort:"0",
          sLoan:"0",
          cLoan:"0", 
        }


      }

    return setFormArray(prev => [...prev,newForm])
    
   
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
      {currentForm?<Form  
       currentForm={currentForm}
       setCurrentForm={setCurrentForm}
       addInputs={addInputs}
       income={currentForm.income}
       expense={currentForm.expense}
       asset={currentForm.asset}
       liabilities={currentForm.liabilities}

      /> :<h1>Please push the Plus button to start </h1>}
    </div>
  );
}

export default App;
