import Table from "react-bootstrap/Table";
import transactionService from "../../services/transaction";
import { useState, useEffect } from "react";

const TableItem = ({ transaction }) => {
  const { concept, type, amount } = transaction;
  return (
    <tr>
      <td>{concept}</td>
      <td>{type}</td>
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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Concept</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {lastTransactions.map((transaction) => (
          <TableItem transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
}

export default LastTenTable;
