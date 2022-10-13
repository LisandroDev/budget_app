import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import transactionService from "../services/transaction";
import { useState, useEffect } from "react";
import "../styles/TransactionsTable.css";

const TableItem = ({ transaction }) => {
  const { concept, type, amount } = transaction;
  return (
    <tr>
      <td>{concept}</td>
      <td>
        <Badge bg={type === "expense" ? "danger" : "success"}>{type}</Badge>
      </td>
      <td>{amount}</td>
    </tr>
  );
};

const TypeDropdownMenu = ({ setFilter }) => {
  return (
    <>
      <DropdownButton
        title="Type"
        variant="white"
        id="TypeDropdownMenu"
        align="end"
      >
        <Dropdown.Item onClick={() => setFilter("all")}>Show All</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("expense")}>
          Show Only Expenses
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("income")}>
          Show Only Incomes
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

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
