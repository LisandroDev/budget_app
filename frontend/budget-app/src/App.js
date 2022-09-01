import transactionService from "./services/transaction";
import { useState, useEffect } from "react";

function App() {
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    const data = await transactionService.getBalance();
    setBalance(data.balance);
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {balance}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
