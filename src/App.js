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

// this is  input with 3 of them 
const newbus ={
  name:"", 
id: nanoid(),
value:"",
downPayment:""
}




if(sectionId ==="i-dAdd"){
 
  const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
    ...piece,
    income:{...piece.income,
    interest: piece.income.interest? [...piece.income.interest, newSection]:[newSection]
      
  } 

}})
  
  const notMatch = formArray.filter(form => form.id !== formID)
 
  const newMatch= theMatch.concat(notMatch)
  
  


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
      realLiability: piece.liabilities.realLiability? [...piece.liabilities.realLiability, newSection]:[newSection]
      
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
    setCurrentForm(formArray[0])
  return console.log("deleted", formID)
}

function delInput(formID, sectionID, inputID){

  
  if(sectionID ==="i-dDel"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      income:{...piece.income,
      interest: piece.income.interest.filter(interest => interest.id !== inputID)
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    
  
  
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])



  }
   else if(sectionID ==="r-eDel"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      income:{...piece.income,
        realEstate: piece.income.realEstate.filter(part => part.id !== inputID)
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

  } 
  else if(sectionID ==="o-eDel"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      expense:{...piece.expense,
        otherExpense: piece.expense.otherExpense.filter(exp => exp.id !== inputID)
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

    
  }
  else if(sectionID ==="s-fDel"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      asset:{...piece.asset,
        stocks: piece.asset.stocks.filter(stock => stock.id !== inputID)
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

    
  }
  
  else if(sectionID ==="r-bDel"){

    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      asset:{...piece.asset,
        business: piece.asset.business.filter(bus => bus.id !== inputID)
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])
  }
  
  else if(sectionID ==="r-mDel"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      liabilities:{...piece.liabilities,
        realLiability: piece.liabilities.realLiability.filter(liability => liability.id !== inputID)
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

  }


}

function changeInput(formID, sectionID, inputID,event){

   const changeElement = event.target.value

   if(sectionID=== "i-dChange-text"){


   } else if(sectionID ==="i-dChange-value"){


   } else  if(sectionID === "r-eChange-text"){

    
   } else if(sectionID === "r-eChange-value"){


   } else if(sectionID === "o-eChange-text"){


   } else if(sectionID=== "o-eChange-value"){


   } else if(sectionID === "s-fChange-text"){


   } else  if(sectionID === "s-fChange-downpayment"){


   } else if (sectionID=== "s-fChange-value"){
    
   } else if(sectionID=== "s-fChange-value"){

   }


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
       delInput={delInput}
       

      /> :<h1>Please push the Plus button to start </h1>}
    </div>
  );
      }

export default App;
