import Home from "./components/Home/Home";
import AbmSection from "./components/AbmSection/AbmSection";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import transactionService from "./services/transaction";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addTransactionToState = (transactionToAdd) => {
    setTransactions((current) => [...current, transactionToAdd]);
  };

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
      (transaction) => transaction.id !== id,
    );
    setTransactions(updatedState);
  };

  useEffect(() => {
    if (isAuthenticated) {
      transactionService
        .getTransactions()
        .then((response) => setTransactions(response));
    }
  }, [isAuthenticated]);

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login setAuth={setIsAuthenticated} />}
          />
          <Route
            path="/"
            element={
              <AuthenticatedRoute
                isAuthenticated={isAuthenticated}
                component={() => <Home transactions={transactions} />}
              />
            }
          />
          <Route
            path="/abm"
            element={
              <AuthenticatedRoute
                path="/abm"
                isAuthenticated={isAuthenticated}
                component={() => (
                  <AbmSection
                    transactions={transactions}
                    addTransaction={addTransactionToState}
                    updateTransactionState={updateTransactionState}
                    deleteTransactionFromState={deleteTransactionFromState}
                  />
                )}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
