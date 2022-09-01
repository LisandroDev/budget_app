import { useEffect, useState } from 'react'
import transactionService from './services/transaction'
import { useDispatch } from 'react-redux'

function App() {

const [balance, setBalance] = useState(0)
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    transactionService.getBalance().then( balance => setBalance(balance.balance))
  })

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
