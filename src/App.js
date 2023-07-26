import React, {useState , useEffect} from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import './TransactionTable.css'
import './SearchBar.css'
import './TransactionForm.css'

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the data from db.json using the Fetch API
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    // Add the new transaction to the 'transactions' state
    setTransactions([...transactions, newTransaction]);
  };
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>Bank Transactions</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
