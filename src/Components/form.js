import React, { useState } from 'react';

function PersonalFinancialStatementForm() {
  const [formData, setFormData] = useState({
    cashAndSavings: 0,
    investments: 0,
    property: 0,
    mortgage: 0,
    creditCardDebt: 0,
    studentLoans: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit formData to server
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cash_and_savings">Cash and Savings:</label><br />
      <input
        type="number"
        id="cash_and_savings"
        name="cashAndSavings"
        value={formData.cashAndSavings}
        onChange={handleChange}
      /><br />
      <label htmlFor="investments">Investments:</label><br />
      <input
        type="number"
        id="investments"
        name="investments"
        value={formData.investments}
        onChange={handleChange}
      /><br />
      <label htmlFor="property">Property:</label><br />
      <input
        type="number"
        id="property"
        name="property"
        value={formData.property}
        onChange={handleChange}
      /><br />
      <hr />
      <label htmlFor="mortgage">Mortgage:</label><br />
      <input
        type="number"
        id="mortgage"
        name="mortgage"
        value={formData.mortgage}
        onChange={handleChange}
      /><br />
      <label htmlFor="credit_card_debt">Credit Card Debt:</label><br />
      <input
        type="number"
        id="credit_card_debt"
        name="creditCardDebt"
        value={formData.creditCardDebt}
        onChange={handleChange}
      /><br />
      <label htmlFor="student_loans">Student Loans:</label><br />
      <input
        type="number"
        id="student_loans"
        name="studentLoans"
        value={formData.studentLoans}
        onChange={handleChange}
      /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PersonalFinancialStatementForm;
