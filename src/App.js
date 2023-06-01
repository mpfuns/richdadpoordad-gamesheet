import './App.css';
import Form  from './Components/form.js';
import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { nanoid } from 'nanoid'




function App() {
  const [formArray, setFormArray] = React.useState([])
  const [currentForm, setCurrentForm] = React.useState()

 
 
 // ADD INPUT 
  function addInputs(formID,sectionId){


const newSection={
name:"", 
id: nanoid(),
value:0
}

// this is  input with 3 of them 
const newbus ={
  name:"", 
id: nanoid(),
value:0,
downPayment:0
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



//ADD FORM

  function addForm(){
      const newForm = {
        id: nanoid(),
        title: 'New',
        update: false,
        income:{
          salary:0,
          interest:[],
          realEstate:[]
        }, 
        expense:{
          taxes:0,
          home:0,
          school:0,
          car:0,
          credit:0,
          bank:0,
          children:0,
          otherExpense:[]

        }, 
        asset:{
          saving:0,
          precious:0,
          stocks:[],
          business:[]
        },
        liabilities:{
          mort:0,
          sLoan:0,
          cLoan:0,
          ccLoan: 0,
          bLoan:0,
          realLiability: [] 
        },
        math:{
          passiveIncome: 0,
          totalIncome:0,
          totalExpense:0,
          monthly:0,
          start: false

        }
        


      }

    return setFormArray(prev => [...prev,newForm])
    
   
   }

  //DELETE FORM
function delForm(event, formID){
    event.stopPropagation();
    setFormArray(oldForm => oldForm.filter(form => form.id!== formID))
    if(formArray.length > 0){
       return setCurrentForm(formArray[0])
    } else {
      return  setCurrentForm()
    }
   

}
console.log(currentForm)
//DELETE INPUT 

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


//CHANGE INPUT

function changeInput(formID, sectionID, inputID,event){
 
if (event !== undefined){
   if(sectionID=== "i-dChange-text"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      income:{...piece.income,
      interest: piece.income.interest.map(part => {
        if(part.id=== inputID){
          return{
            ...part,
            name: event.target.value
          }
        }
        else {
          return part
        }
      })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    
  
  
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

   } else if(sectionID ==="i-dChange-value"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      income:{...piece.income,
      interest: piece.income.interest.map(part => {
        if(part.id=== inputID){
          return{
            ...part,
            value: event.target.value
          }
        }
        else {
          return part
        }
      })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    
  
  
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

   } else  if(sectionID === "r-eChange-text"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      income:{...piece.income,
        realEstate: piece.income.realEstate.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              name: event.target.value
            }
          }
          else {
            return part
          }
        })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])
    
   } else if(sectionID === "r-eChange-value"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      income:{...piece.income,
        realEstate: piece.income.realEstate.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              value: event.target.value
            }
          }
          else {
            return part
          }
        })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

   } else if(sectionID === "o-eChange-text"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      expense:{...piece.expense,
        otherExpense: piece.expense.otherExpense.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              name: event.target.value
            }
          }
          else {
            return part
          }
        })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

   } else if(sectionID=== "o-eChange-value"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      expense:{...piece.expense,
        otherExpense: piece.expense.otherExpense.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              value: event.target.value
            }
          }
          else {
            return part
          }
        })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])



   } else if(sectionID === "s-fChange-text"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      asset:{...piece.asset,
        stocks: piece.asset.stocks.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              name: event.target.value
            }
          }
          else {
            return part
          }
        })
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

   } else  if(sectionID === "s-fChange-downpayment"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      asset:{...piece.asset,
        stocks: piece.asset.stocks.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              downPayment:event.target.value
            }
          }
          else {
            return part
          }
        })
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

   } else if (sectionID=== "s-fChange-value"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      asset:{...piece.asset,
        stocks: piece.asset.stocks.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              value: event.target.value
            }
          }
          else {
            return part
          }
        })
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])
   } else if(sectionID=== "r-bChange-text"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      asset:{...piece.asset,
        business: piece.asset.business.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              name: event.target.value
            }
          }
          else {
            return part
          }
        })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])
   }else if(sectionID=== "r-bChange-downpayment"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      asset:{...piece.asset,
        business: piece.asset.business.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              downPayment: event.target.value
            }
          }
          else {
            return part
          }
        })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])


   }
   else if(sectionID=== "r-bChange-value"){
    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      asset:{...piece.asset,
        business: piece.asset.business.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              value: event.target.value
            }
          }
          else {
            return part
          }
        })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])


   } else if(sectionID=== "r-mChange-text"){

    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      liabilities:{...piece.liabilities,
        realLiability: piece.liabilities.realLiability.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              name: event.target.value
            }
          }
          else {
            return part
          }
        })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])

   } else if(sectionID=== "r-mChange-value"){

    const theMatch = formArray.filter(form => form.id === formID).map(piece => {  return{
      ...piece,
      liabilities:{...piece.liabilities,
        realLiability: piece.liabilities.realLiability.map(part => {
          if(part.id=== inputID){
            return{
              ...part,
              value: event.target.value
            }
          }
          else {
            return part
          }
        })
        
    } 
  
  }})
    
    const notMatch = formArray.filter(form => form.id !== formID)
   
    const newMatch= theMatch.concat(notMatch)
    
    setFormArray(newMatch)
    setCurrentForm(theMatch[0])
   }   
  }
  else{

  }

}



/*

CHANGE EVENT FOR OTHER BASIC INPUT IN FORM  


*/

function basicInputChange (formID,bigSection,interName, event){
  
   if (bigSection==="income"){
    const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
      ...part, 
      income:{
        ...part.income,
        salary: event.target.value
       
       
      }
    }})
    
    
    const notSelectedForm=formArray.filter(form => form.id !== formID)
    const newSelectedForm=selectedForm.concat(notSelectedForm)
    setFormArray(newSelectedForm)
    setCurrentForm(selectedForm[0])


   }
   else if(bigSection==="expense"){
    if(interName === "taxes"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        expense:{
          ...part.expense,
          taxes: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])

    } else if(interName === "home"){

      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        expense:{
          ...part.expense,
          home: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])
    } else if(interName=== "school"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        expense:{
          ...part.expense,
          school: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])

    }else if(interName=== "car"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        expense:{
          ...part.expense,
          car: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])

    }else if(interName=== "credit"){

      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        expense:{
          ...part.expense,
          credit: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])
    }else if(interName=== "bank"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        expense:{
          ...part.expense,
          bank: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])

    }else if(interName=== "childern"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        expense:{
          ...part.expense,
          children: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])
    }

   }
   else if(bigSection=== "asset"){
    if(interName === "saving"){

      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        asset:{
          ...part.asset,
          saving: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])
    } else if(interName === "precious"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        asset:{
          ...part.asset,
          precious: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])

    }
   } else if(bigSection === "liab"){
    if(interName === "home"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        liabilities:{
          ...part.liabilities,
          mort: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])
    } else if(interName === "school"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        liabilities:{
          ...part.liabilities,
          sLoan: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])


    }else if(interName === "car"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        liabilities:{
          ...part.liabilities,
          cLoan: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])

    }else if(interName === "credit"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        liabilities:{
          ...part.liabilities,
          ccLoan: event.target.value
          
         
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])
    }else if(interName === "bank"){
      const selectedForm= formArray.filter(form => form.id === formID).map(part =>{ return {
        ...part, 
        liabilities:{
          ...part.liabilities,
          bLoan: event.target.value
          
        }
      }})
  
      const notSelectedForm=formArray.filter(form => form.id !== formID)
      const newSelectedForm=selectedForm.concat(notSelectedForm)
      setFormArray(newSelectedForm)
      setCurrentForm(selectedForm[0])
    }
   }
}

function updateButton (formID){
  const selectedFormB= formArray.filter(form => form.id === formID).map(part =>{ return {
    ...part, 
    update:!part.update
    
  }})

  const notSelectedFormB=formArray.filter(form => form.id !== formID)
  const newSelectedFormB=selectedFormB.concat(notSelectedFormB)
  setFormArray(newSelectedFormB)
  setCurrentForm(selectedFormB[0])

}

function updateName(formID,event){

  const selectedFormN= formArray.filter(form => form.id === formID).map(part =>{ return {
    ...part, 
    title: event.target.value
    
  }})

  const notSelectedFormN=formArray.filter(form => form.id !== formID)
  const newSelectedFormN=selectedFormN.concat(notSelectedFormN)
  setFormArray(newSelectedFormN)
  setCurrentForm(selectedFormN[0])

}

function mathCashFlow (formID,income,expense ){
 //math 
const interestPart= income.interest.reduce((acc,cur) => {return parseInt(acc) + parseInt(cur.value)},0)
const realPart= income.realEstate.reduce((acc,cur) => {return parseInt(acc) + parseInt(cur.value)},0)
const otherExpense= expense.otherExpense.reduce((acc,cur) => {return parseInt(acc) + parseInt(cur.value)},0)

const totalPassiveIncome= parseInt(interestPart) + parseInt(realPart)

const totalIncomeMath = parseInt(income.salary)+ totalPassiveIncome
const expensePart= parseInt(expense.bank) + parseInt(expense.car)+ parseInt(expense.children)+ parseInt(expense.credit)+ parseInt(expense.home) + parseInt(expense.school) +parseInt(expense.taxes)     
const totalExpenseMath=  expensePart + otherExpense
const monthlyMath= totalIncomeMath - totalExpenseMath

//put in state
const currentOne=formArray.filter(form => form.id === formID).map(part =>{
  return{
    ...part, 
    math:{
      passiveIncome:totalPassiveIncome,
      totalIncome:totalIncomeMath,
      totalExpense: totalExpenseMath,
      monthly:monthlyMath,
      start: true

    }
  }
})
console.log(currentOne)
const NotCurrectone= formArray.filter(form => form.id !== formID)
const  newCurrectArray= currentOne.concat(NotCurrectone)
setFormArray(newCurrectArray)
setCurrentForm(newCurrectArray[0])


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
       changeInput={changeInput}
       basicInputChange={basicInputChange}
       updateButton={updateButton}
       updateName={updateName}
       mathCashFlow={mathCashFlow}

      /> :<h1>Please push the Plus button to start </h1>}
    </div>
  );
      }

export default App;
