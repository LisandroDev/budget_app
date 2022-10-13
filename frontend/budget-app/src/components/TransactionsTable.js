import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'
import transactionService from "../services/transaction";
import { useState, useEffect } from "react";
import '../styles/TransactionsTable.css'

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

const TypeDropdownMenu = () => {
  return <>
    <DropdownButton title='Type' variant='white' id="TypeDropdownMenu" align='end'> 
      <Dropdown.Item>Show All</Dropdown.Item>
      <Dropdown.Item>Show Only Expenses</Dropdown.Item>
      <Dropdown.Item>Show Only Incomes</Dropdown.Item>
    </DropdownButton>
  </>;
};

const TransactionsTable = ({ limit }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    transactionService
      .getTransactions(limit ? limit : 0)
      .then((response) => setTransactions(response));
  }, [limit]);

  return (
    <Table
      borderless
      hover
      className="rounded"
      style={{ backgroundColor: "#EAEAEA" }}
    >
      <thead>
        <tr>
          <th >Concept</th>
          <th> <TypeDropdownMenu /> </th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TableItem key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionsTable;
