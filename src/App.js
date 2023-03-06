import './App.css';
import Form  from './Components/form.js';
import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { nanoid } from 'nanoid'



function App() {
  const [formArray, setFormArray] = React.useState([])
  const [currentForm, setCurrentForm] = React.useState()

 
 
 
  function addInputs(formID,sectionId){


const newSection={
name:"", 
id: nanoid(),
value:""
}

const newbus ={
  name:"", 
id: nanoid(),
value:"",
downPayment:""
}




if(sectionId ==="i-dAdd"){
  console.log(`${formID}`)
 //WORKING HERE TO FIX BUG
  const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
    ...piece,
    income:{...piece.income,
    interest: piece.income.interest? [...piece.income.interest, newSection]:[newSection]
      
  } 

}})
  
  const notMatch = formArray.filter(form => form.id !== formID)
 
  const newMatch= theMatch.concat(notMatch)
  
  console.log(theMatch)


  setFormArray(newMatch)
  setCurrentForm(theMatch[0])
}
else if(sectionId==="r-eAdd"){
  const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
    ...piece,
    income:{...piece.income,
      realEstate: piece.income.realEstate? [...piece.income.realEstate, newSection]:[newSection]
      
  } 

}})
  
  const notMatch = formArray.filter(form => form.id !== formID)
 
  const newMatch= theMatch.concat(notMatch)
  
  setFormArray(newMatch)
  setCurrentForm(theMatch[0])
} 
else if(sectionId==="o-eAdd"){
  const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
    ...piece,
    expense:{...piece.expense,
      otherExpense: piece.expense.otherExpense? [...piece.expense.otherExpense, newSection]:[newSection]
      
  } 

}})
  
  const notMatch = formArray.filter(form => form.id !== formID)
 
  const newMatch= theMatch.concat(notMatch)
  
  setFormArray(newMatch)
  setCurrentForm(theMatch[0])

}
else if(sectionId==="s-fAdd"){
  const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
    ...piece,
    asset:{...piece.asset,
      stocks: piece.asset.stocks? [...piece.asset.stocks, newbus]:[newbus]
      
  } 

}})
  
  const notMatch = formArray.filter(form => form.id !== formID)
 
  const newMatch= theMatch.concat(notMatch)
  
  setFormArray(newMatch)
  setCurrentForm(theMatch[0])


}
else if(sectionId==="r-bAdd"){

  const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
    ...piece,
    asset:{...piece.asset,
      business: piece.asset.business? [...piece.asset.business, newbus]:[newbus]
      
  } 

}})
  
  const notMatch = formArray.filter(form => form.id !== formID)
 
  const newMatch= theMatch.concat(notMatch)
  
  setFormArray(newMatch)
  setCurrentForm(theMatch[0])

}
else if(sectionId==="r-mAdd"){

  const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
    ...piece,
    liabilities:{...piece.liabilities,
      realLiability: piece.liabilities.realLiability? [...piece/liabilities.realLiability, newSection]:[newSection]
      
  } 

}})
  
  const notMatch = formArray.filter(form => form.id !== formID)
 
  const newMatch= theMatch.concat(notMatch)
  
  setFormArray(newMatch)
  setCurrentForm(theMatch[0])

}





}

console.log(formArray)



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
          bLoan:"0",
          realLiability: [] 
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
