import Table from "react-bootstrap/Table";
import Badge from 'react-bootstrap/Badge'
import transactionService from "../../services/transaction";
import { useState, useEffect } from "react";

const TableItem = ({ transaction }) => {
  const { concept, type, amount } = transaction;
  return (
    <tr>
      <td>{concept}</td>
      <td><Badge bg={type === 'expense' ? 'danger' : 'success'}>{type}</Badge></td>
      <td>{amount}</td>
    </tr>
  );
};

function LastTenTable() {
  const [lastTransactions, setTransactions] = useState([]);

  useEffect(() => {
    transactionService
      .getTransactions(10)
      .then((response) => setTransactions(response));
  }, []);

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
          <th>Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {lastTransactions.map((transaction) => (
          <TableItem  key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
}

export default LastTenTable;
