import React from 'react';
import './TransactionTable.css'; // Import the CSS file for styling

const TransactionTable = ({ transactions }) => {
  return (
    <div className="TransactionTableContainer">
      <table className="TransactionTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td className="TransactionDescription" data-label="Description">
                {transaction.description}
              </td>
              <td data-label="Category">{transaction.category}</td>
              <td data-label="Amount">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
