import React, { useState } from 'react';
import './TransactionForm.css'
function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique id (not required for db.json, but useful for this example)
    const id = new Date().getTime();
    const newTransaction = { ...formData, id };
    onAddTransaction(newTransaction);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='TransactionFormContainer'>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
