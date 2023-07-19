import Home from "./components/Home/Home";
import AbmSection from "./components/AbmSection/AbmSection";
import Login from "./components/Login/Login"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import transactionService from "./services/transaction";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const updateTransactionState = (id, updatedTransaction) => {
    const updatedState = transactions.map((transaction) => {
      if (transaction.id === id) {
        return updatedTransaction;
      }
      return transaction;
    });
    setTransactions(updatedState);
  };

  const deleteTransactionFromState = (id) => {
    const updatedState = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedState);
  };

  useEffect(() => {
    transactionService
      .getTransactions()
      .then((response) => setTransactions(response));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home transactions={transactions} />} />
        <Route
          path="/abm"
          element={
            <AbmSection
              transactions={transactions}
              updateTransactionState={updateTransactionState}
              deleteTransactionFromState={deleteTransactionFromState}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
