import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
export default Form;
function Form(props) {





 const interestDiv= props.income.interest.map(input => (
   <div className='input-flip'>
   <div className='input'>
   <input
    type="text"
    placeholder="name"
    
    onChange={(event) =>props.changeInput(props.currentForm.id,"i-dChange-text",input.id, event)}
    id={`${input.id}-text`}
    value={input.name}
/>
<label htmlFor={`${input.id}-text`} >:$ </label>
<input
                type="number"
                placeholder="0"
                onChange={(event)=>props.changeInput(props.currentForm.id,"i-dChange-value",input.id, event)}
                id={`${input.id}-value`}
                value={input.value}
            />
            </div>
<button id="i-dDel" className='input-trash' onClick={() =>props.delInput(props.currentForm.id,"i-dDel", input.id )}><i className="fa-solid fa-trash"></i></button>
</div>


) )


const  realEstateDiv= props.income.realEstate.map(input => (
<div className='input-flip'>
  <div className='input'>
  <input
   type="text"
   placeholder="name"
   onChange={(event)=>props.changeInput(props.currentForm.id,"r-eChange-text",input.id, event)}
   id={`${input.id}-text`}
   value={input.name}
/>
<label htmlFor={`${input.id}-text`} >:$</label>
<input
               type="number"
               placeholder="0"
               
               onChange={(event)=>props.changeInput(props.currentForm.id,"r-eChange-value",input.id,event)}
               id={`${input.id}-value`}
               value={input.value}
           />
        </div>   

<button id="r-eDel" className='input-trash' onClick={()=>props.delInput(props.currentForm.id,"r-eDel", input.id )} ><i className="fa-solid fa-trash"></i></button>

</div>))

const  expenseDiv= props.expense.otherExpense.map(input => (
  <div className='input-flip'>
  <div className='input'>
  <input
   type="text"
   placeholder="name"
   className='input-space'
   onChange={(event)=>props.changeInput(props.currentForm.id,"o-eChange-text",input.id, event)}
   id={`${input.id}-text`}
   value={input.name}
/>
<label htmlFor={`${input.id}-text`} >:$</label>
<input
               type="number"
               placeholder="0"
               onChange={(event)=>props.changeInput(props.currentForm.id,"o-eChange-value",input.id,event)}
               id={`${input.id}-value`}
               value={input.value}
           />
           </div>
<button id="o-eDel" className='input-trash' onClick={()=>props.delInput(props.currentForm.id,"o-eDel", input.id )} ><i className="fa-solid fa-trash"></i></button>
</div>))

const  stockDiv= props.asset.stocks.map(input => (
  <div className='input-flip'>
 <div className='input-3'>
  <input
   type="text"
   placeholder="name"
   onChange={(event)=>props.changeInput(props.currentForm.id,"s-fChange-text",input.id, event)}
   id={`${input.id}-text`}
   value={input.name}
   className='input-space'
/>
<label htmlFor={`${input.id}-text`}>:</label>
<input
               type="number"
               placeholder="0"
               onChange={(event)=>props.changeInput(props.currentForm.id,"s-fChange-downpayment",input.id, event)}
               id={`${input.id}-downPayment`}
               value={input.downPayment}
               className='input-space'
           />
           <label htmlFor={`${input.id}-value`}>:$</label>
<input
               type="number"
               placeholder="0"
               onChange={(event)=>props.changeInput(props.currentForm.id,"s-fChange-value",input.id, event)}
               id={`${input.id}-value`}
               value={input.value}
               className='input-space'
           />
           </div>
<button id="s-fDel" className='input-trash' onClick={()=>props.delInput(props.currentForm.id,"s-fDel", input.id )} ><i className="fa-solid fa-trash"></i></button>
</div>))


const  businessDiv= props.asset.business.map(input => (
  
  <div className='input-flip'>
  <div className='input-3'>
  <input
   type="text"
   placeholder="name"
   onChange={(event)=>props.changeInput(props.currentForm.id,"r-bChange-text",input.id, event)}
   id={`${input.id}-text`}
   value={input.name}
   className='input-space'
/>
<label htmlFor={`${input.id}-text`}>:$</label>
<input
               type="number"
               placeholder="0"
               onChange={(event)=>props.changeInput(props.currentForm.id,"r-bChange-downpayment",input.id, event)}
               id={`${input.id}-downPayment`}
               value={input.downPayment}
               className='input-space'
           />
           <label htmlFor={`${input.id}-value`}>:$</label>
<input
               type="number"
               placeholder="0"
               onChange={(event)=>props.changeInput(props.currentForm.id,"r-bChange-value",input.id, event)}
               id={`${input.id}-value`}
               value={input.value}
               className='input-space'
           />
           </div>
<button id="r-bDel" className='input-trash' onClick={()=>props.delInput(props.currentForm.id,"r-bDel", input.id )} ><i className="fa-solid fa-trash"></i></button>
</div>))

const  liabilitiesDiv= props.liabilities.realLiability.map(input => (
  <div className='input-flip'>
  <div className='input'>
  <input
 
   type="text"
   placeholder="name"
   onChange={(event)=>props.changeInput(props.currentForm.id,"r-mChange-text",input.id, event)}
   id={`${input.id}-text`}
   value={input.name}
/>
<label htmlFor={`${input.id}-text`} >:$</label>
<input
                
               type="number"
               placeholder="0"
               onChange={(event)=>props.changeInput(props.currentForm.id,"r-mChange-value",input.id, event)}
               id={`${input.id}-value`}
               value={input.value}
           />
           </div>
<button id="r-mDel" className='input-trash' onClick={()=>props.delInput(props.currentForm.id,"r-mDel", input.id )}><i className="fa-solid fa-trash"></i></button>
</div>))
  
  return (
    <div className="form-content">
    <div className="income">
      <h2 className='green-title'>Income</h2>
     <div className='sidetoside'>
      <div className='input'>
      <label htmlFor="salary" >Salary: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"income", "salary",event)}
                id="salary"
                value={props.income.salary}
            />
            </div>
            </div>
            <div id="interest">
            <h4>Interest/dividends:</h4>
            <button id="i-dAdd" className="main-button" onClick={() =>props.addInputs(props.currentForm.id,"i-dAdd" )}><i className="fa-solid fa-plus"></i></button>
            {interestDiv}

            </div>
            <div id="two-real">
            <h4>Real Estate/Business</h4>
            <button id="r-eAdd" className="main-button" onClick={() =>props.addInputs(props.currentForm.id,"r-eAdd" )}><i className="fa-solid fa-plus"></i></button>
            {realEstateDiv}


            </div>
    </div>
    <div className='Expenses'>
      <h2 className='red-title'>Expenses</h2>
      <div className='sidetoside'>
      <div className='input'>
      <label htmlFor="Taxes" >Taxes: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"expense", "taxes",event)}
                id="Taxes"
                value={props.expense.taxes}
            />
            </div>
            <div className='input'>
            <label htmlFor="Home-e" >Home Mortgage: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"expense", "home",event)}
                id="Home-e"
                value={props.expense.home}
            />
            </div>
            <div className='input'>
            <label htmlFor="school-p" >School Loan Payment: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"expense", "school",event)}
                id="school-p"
                value={props.expense.school}
            />
            </div>
            <div className='input'>
            <label htmlFor="Car-p">Car Loan Payment: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"expense", "car",event)}
                id="Car-p"
                value={props.expense.car}
            />
            </div>
            <div className='input'>
            <label htmlFor="credit-p">Credit Card Loan Payment: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"expense", "credit",event)}
                id="credit-p"
                value={props.expense.credit}
            /> </div>
            <div className='input'>
            <label htmlFor="bank-p">Bank Loan Payment: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"expense", "bank",event)}
                id="bank-p"
                value={props.expense.bank}
            /> </div>
            <div className='input'>
            <label htmlFor="Childern">Childern Expense: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"expense", "childern",event)}
                id="Childern"
                value={props.expense.childern}
            /> </div>

             </div>
            <div id="other-expense">
            <h4>Other Expense:</h4>
            <button id="o-eAdd" className="main-button" onClick={() =>props.addInputs(props.currentForm.id,"o-eAdd")}><i className="fa-solid fa-plus"></i></button>
            {expenseDiv}
            </div>
           
    </div>
    <div className='Asset'>
      <h2 className='green-title'>Asset</h2>
      <div className='input'>
      <label htmlFor="saving">Savings: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"asset", "saving",event)}
                id="saving"
                value={props.asset.saving}
            />
            </div>
            <div className='input'>
            <label htmlFor="Precious">Precious Metals, etc: $</label>
            
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"asset", "precious",event)}
                id="Precious"
                value={props.asset.precious}
            />
            
            </div>
            <div id="three-share">
            <h4>Stocks/Funds/CDS: # of Share:  Cost/Shares:</h4>
            <div className=''>
            <button id="s-fAdd" className="main-button" onClick={() =>props.addInputs(props.currentForm.id,"s-fAdd" )}><i className="fa-solid fa-plus"></i></button>
            {stockDiv}
            </div>
            </div>
            <div id="three-real">
            <div className=''>
            <h4>Real Estate/Business: Down Payment: Cost:</h4>
            <button id="r-bAdd" className="main-button" onClick={() =>props.addInputs(props.currentForm.id,"r-bAdd" )}><i className="fa-solid fa-plus"></i></button>
            {businessDiv}
            </div>
            </div>
           
    </div>
    <div className='Liabilites'>
      <h2 className='red-title'>Liabilites</h2>
      
      <div className='input'>
      <label htmlFor="Home-l">Home Mortgage: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"liab", "home",event)}
                id="Home-l"
                value={props.liabilities.mort}
            />
            </div>
            <div className='input'>
            <label htmlFor="school-l">School Loan: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"liab", "school",event)}
                id="school-l"
                value={props.liabilities.sLoan}
            />
            </div>
            <div className='input'>
            <label htmlFor="Car-l">Car Loan: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"liab", "car",event)}
                id="Car-l"
                value={props.liabilities.cLoan}
            />
            </div>
            <div className='input'>
            <label htmlFor="credit-l">Credit Card Loan: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputChange(props.currentForm.id,"liab", "credit",event)}
                id="credit-l"
                value={props.liabilities.ccloan}
            />
            </div>
            <div className='input'>
            <label htmlFor="bank-l">Bank Loan: $</label>
      <input
                type="number"
                placeholder="0"
                onChange={(event)=>props.basicInputchange(props.currentForm.id,"liab", "bank",event)}
                id="bank-l"
                value={props.liabilities.bloan}
            />
            </div>
            <div id="two-real-mort">
            <h4>Real Estate/Business: Mortgage/Liability:</h4>
            <button id="r-mAdd" className="main-button" onClick={() =>props.addInputs(props.currentForm.id,"r-mAdd" )}><i className="fa-solid fa-plus"></i></button>
              {liabilitiesDiv}
            </div>
           
    </div>
    <div className='math-section'>
      <div>
      {props.currentForm.update? <input
    type="text"
    placeholder="name"
    onChange={(event)=>props.updateName(props.currentForm.id,event)}
    //id=
    value={props.currentForm.title}
/>:<h2 className='name-title'>{props.currentForm.title}</h2>}
      <button className="main-button" onClick={()=>props.updateButton(props.currentForm.id)} >update</button>
      </div>
      <h1>{props.currentForm.math.start? `$ ${props.income.salary}` : "$ 0" }</h1>
      <h3>Salary</h3>
      <h1><i className="fa-solid fa-plus"></i></h1>
      <h1>{props.currentForm.math.start? `$ ${props.currentForm.math.passiveIncome}` : "$ 0" }</h1>
      <h3>Passive Income</h3>
      <h1><i class="fa-solid fa-equals"></i></h1>
      <h1>{props.currentForm.math.start? `$ ${props.currentForm.math.totalIncome}` : "$ 0" }</h1>
      <h3>Total Income</h3>
      <h1><i class="fa-solid fa-minus"></i></h1>
      <h1>{props.currentForm.math.start? `$ ${props.currentForm.math.totalExpense}` : "$ 0" }</h1>
      <h3>Total Expenses</h3>
      <h1><i class="fa-solid fa-equals"></i></h1>
      <h1>{props.currentForm.math.start? `$ ${props.currentForm.math.monthly}` : "$ 0" }</h1>
      <h3>Monthly Cash Flow</h3>
      <button className="main-button" onClick={()=>props.mathCashFlow(props.currentForm.id, props.income, props.expense)}>Run Calculations</button>
    <div id="fact"> 
    <p > <em><strong>If Passive Income is greater than Total Expenses you’re out of the Rat Race!</strong></em></p>
    </div>
    </div>
    </div>
  );
}


