


import React from 'react';
import Header from './components/Header'; // Correct the import statement here
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './contast/GlobalState';
import './App.css';

function App() {
  return ( 
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance /> 
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

