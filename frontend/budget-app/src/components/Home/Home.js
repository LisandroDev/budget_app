import { useState, useEffect } from "react";
import transactionService from "../../services/transaction";
import LastTenTable from "./LastTenTable";

const Home = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    transactionService
      .getBalance()
      .then((response) => setBalance(response.balance));
  });

  return (
    <div>
    <h2>Your current balance is: {balance}</h2>
    <h2>Your last ten transactions are: </h2>
      <LastTenTable />
    </div>
  );
};

export default Home;
