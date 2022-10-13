import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";
import transactionService from "../../services/transaction";
import TypeDropdownMenu from "./TypeDropdownMenu";
import { useState, useEffect } from "react";
import "../../styles/TransactionsTable.css";

const TransactionsTable = ({ limit }) => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    transactionService
      .getTransactions(limit ? limit : 0)
      .then((response) => setTransactions(response));
  }, [limit]);

  const filterTransactions = () => {
    if (filter !== "all") {
      return transactions.filter((transaction) => transaction.type === filter);
    } else {
      return transactions;
    }
  };

  return (
    <Table
      borderless
      hover
      className="rounded"
      style={{ backgroundColor: "#EAEAEA" }}
    >
      <thead>
        <tr>
          <th>Concept</th>
          <th>
            {" "}
            <TypeDropdownMenu setFilter={setFilter} />{" "}
          </th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {filterTransactions().map((transaction) => (
          <TableItem key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionsTable;
