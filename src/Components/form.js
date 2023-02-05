import React, { useState } from 'react';
export default Form;
function Form() {
  
   

  return (
    <div className="content">
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
            <button><i class="fa-solid fa-plus"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
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
            <button><i class="fa-solid fa-plus"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
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
            <button><i class="fa-solid fa-plus"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div id="three-real">
            <h3>Real Estate/Business: Down Payment: Cost:</h3>
            <button><i class="fa-solid fa-plus"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
            </div>
    </div>
    <div className='Libilites'>
      <h2>Libilites</h2>
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
            <button><i class="fa-solid fa-plus"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
            </div>
    </div>
    <div className='math-section'>
      <h2>Math</h2>
    </div>
    </div>
  );
}


