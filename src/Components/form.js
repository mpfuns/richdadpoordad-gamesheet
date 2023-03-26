import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
export default Form;
function Form(props) {





 const interestDiv= props.income.interest.map(input => (
   <div className='input'>
   <input
    type="text"
    placeholder="name of interest/dividends"
    onChange={props.changeInput(props.currentForm.id,"i-dChange-text",input.id)}
    id={`${input.id}-text`}
    value={input.name}
/>
<label htmlFor={`${input.id}-text`}>: $</label>
<input
                type="number"
                placeholder="0"
                onChange={props.changeInput(props.currentForm.id,"i-dChange-value",input.id)}
                id={`${input.id}-value`}
                value={input.value}
            />
<button id="i-dDel" className='input-trash' onClick={() =>props.delInput(props.currentForm.id,"i-dDel", input.id )}><i className="fa-solid fa-trash"></i></button>
</div>


) )


const  realEstateDiv= props.income.realEstate.map(input => (
  <div className='input'>
  <input
   type="text"
   placeholder="name of interest/dividends"
   onChange={props.changeInput(props.currentForm.id,"r-eChange-text",input.id)}
   id={`${input.id}-text`}
   value={input.name}
/>
<label htmlFor={`${input.id}-text`}>: $</label>
<input
               type="number"
               placeholder="0"
               onChange={props.changeInput(props.currentForm.id,"r-eChange-value",input.id)}
               id={`${input.id}-value`}
               value={input.value}
           />
<button id="r-eDel" className='input-trash' onClick={()=>props.delInput(props.currentForm.id,"r-eDel", input.id )} ><i className="fa-solid fa-trash"></i></button>
</div>))

const  expenseDiv= props.expense.otherExpense.map(input => (
  <div className='input'>
  <input
   type="text"
   placeholder="name of interest/dividends"
   onChange={props.changeInput(props.currentForm.id,"o-eChange-text",input.id)}
   id={`${input.id}-text`}
   value={input.name}
/>
<label htmlFor={`${input.id}-text`}>: $</label>
<input
               type="number"
               placeholder="0"
               onChange={props.changeInput(props.currentForm.id,"o-eChange-value",input.id)}
               id={`${input.id}-value`}
               value={input.value}
           />
<button id="o-eDel" className='input-trash' onClick={()=>props.delInput(props.currentForm.id,"o-eDel", input.id )} ><i className="fa-solid fa-trash"></i></button>
</div>))

const  stockDiv= props.asset.stocks.map(input => (
  <div className='input'>
  <input
   type="text"
   placeholder="name of interest/dividends"
   onChange={props.changeInput(props.currentForm.id,"s-fChange-text",input.id)}
   id={`${input.id}-text`}
   value={input.name}
/>
<label htmlFor={`${input.id}-text`}>: </label>
<input
               type="number"
               placeholder="0"
               onChange={props.changeInput(props.currentForm.id,"s-fChange-downpayment",input.id)}
               id={`${input.id}-downPayment`}
               value={input.downPayment}
           />
           <label htmlFor={`${input.id}-value`}>: $ </label>
<input
               type="number"
               placeholder="0"
               onChange={props.changeInput(props.currentForm.id,"s-fChange-value",input.id)}
               id={`${input.id}-value`}
               value={input.value}
           />
<button id="s-fDel" className='input-trash' onClick={()=>props.delInput(props.currentForm.id,"s-fDel", input.id )} ><i className="fa-solid fa-trash"></i></button>
</div>))


const  businessDiv= props.asset.business.map(input => (
  <div className='input'>
  <input
   type="text"
   placeholder="name of interest/dividends"
   onChange={props.changeInput(props.currentForm.id,"r-bChange-text",input.id)}
   id={`${input.id}-text`}
   value={input.name}
/>
<label htmlFor={`${input.id}-text`}>: $</label>
<input
               type="number"
               placeholder="0"
               onChange={props.changeInput(props.currentForm.id,"r-bChange-downpayment",input.id)}
               id={`${input.id}-downPayment`}
               value={input.downPayment}
           />
           <label htmlFor={`${input.id}-value`}>: $ </label>
<input
               type="number"
               placeholder="0"
               onChange={props.changeInput(props.currentForm.id,"r-bChange-value",input.id)}
               id={`${input.id}-value`}
               value={input.value}
           />
<button id="r-bDel" className='input-trash' onClick={()=>props.delInput(props.currentForm.id,"r-bDel", input.id )} ><i className="fa-solid fa-trash"></i></button>
</div>))

const  liabilitiesDiv= props.liabilities.realLiability.map(input => (
  <div className='input'>
  <input
   type="text"
   placeholder="name of interest/dividends"
   onChange={props.changeInput(props.currentForm.id,"r-mChange-text",input.id)}
   id={`${input.id}-text`}
   value={input.name}
/>
<label htmlFor={`${input.id}-text`}>: $</label>
<input
               type="number"
               placeholder="0"
               onChange={props.changeInput(props.currentForm.id,"r-mChange-value",input.id)}
               id={`${input.id}-value`}
               value={input.value}
           />
<button id="r-mDel" className='input-trash' onClick={()=>props.delInput(props.currentForm.id,"r-mDel", input.id )}><i className="fa-solid fa-trash"></i></button>
</div>))
  
  return (
    <div className="form-content">
    <div className="income">
      <h2>Income</h2>
      <label htmlFor="salary">Salary: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="salary"
            />
            <div id="interest">
            <h3>Interest/dividends:</h3>
            <button id="i-dAdd" onClick={() =>props.addInputs(props.currentForm.id,"i-dAdd" )}><i className="fa-solid fa-plus"></i></button>
            {interestDiv}

            </div>
            <div id="two-real">
            <h3>Real Estate/Business</h3>
            <button id="r-eAdd" onClick={() =>props.addInputs(props.currentForm.id,"r-eAdd" )}><i className="fa-solid fa-plus"></i></button>
            {realEstateDiv}


            </div>
    </div>
    <div className='Expenses'>
      <h2>Expenses</h2>
      <label htmlFor="Taxes">Taxes: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="Taxes"
            />
            <label htmlFor="Home-e">Home Mortgage: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="Home-e"
            />
            <label htmlFor="school-p">School Loan Payment: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="school-p"
            />
            <label htmlFor="Car-p">Car Loan Payment: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="Car-p"
            />
            <label htmlFor="credit-p">Credit Card Loan Payment: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="credit-p"
            />
            <label htmlFor="bank-p">Bank Loan Payment: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="bank-p"
            />
            <label htmlFor="Childern">Childern Expense: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="Childern"
            />
            <div id="other-expense">
            <h3>Other Expense:</h3>
            <button id="o-eAdd" onClick={() =>props.addInputs(props.currentForm.id,"o-eAdd")}><i className="fa-solid fa-plus"></i></button>
            {expenseDiv}
            </div>
    </div>
    <div className='Asset'>
      <h2>Asset</h2>
      <label htmlFor="saving">Savings: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="saving"
            />
            <label htmlFor="Precious">Precious Metals, etc: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="Precious"
            />
            <div id="three-share">
            <h3>Stocks/Funds/CDS: # of Share:  Cost/Shares:</h3>
            <button id="s-fAdd"  onClick={() =>props.addInputs(props.currentForm.id,"s-fAdd" )}><i className="fa-solid fa-plus"></i></button>
            {stockDiv}
            </div>
            <div id="three-real">
            <h3>Real Estate/Business: Down Payment: Cost:</h3>
            <button id="r-bAdd" onClick={() =>props.addInputs(props.currentForm.id,"r-bAdd" )}><i className="fa-solid fa-plus"></i></button>
            {businessDiv}
            </div>
    </div>
    <div className='Liabilites'>
      <h2>Liabilites</h2>
      <label htmlFor="Home-l">Home Mortgage: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="Home-l"
            />
            <label htmlFor="school-l">School Loan: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="school-l"
            />
            <label htmlFor="Car-l">Car Loan: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="Car-l"
            />
            <label htmlFor="credit-l">Credit Card Loan: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="credit-l"
            />
            <label htmlFor="bank-l">Bank Loan: $</label>
      <input
                type="number"
                placeholder="0"
                //onChange={handleChange}
                id="bank-l"
            />
            <div id="two-real-mort">
            <h3>Real Estate/Business:  Mortgage/Liability:</h3>
            <button id="r-mAdd"  onClick={() =>props.addInputs(props.currentForm.id,"r-mAdd" )}><i className="fa-solid fa-plus"></i></button>
              {liabilitiesDiv}
            </div>
    </div>
    <div className='math-section'>
      <h2>Math</h2>
    </div>
    </div>
  );
}


