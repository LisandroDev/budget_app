import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";
import TypeDropdownMenu from "./TypeDropdownMenu";
import { useState } from "react";
import "../../styles/TransactionsTable.css";

const TransactionsTable = ({
  limit,
  transactions,
  updateTransactionState,
  deleteTransactionFromState,
}) => {
  const [filter, setFilter] = useState("all");

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
          <TableItem
            key={transaction.id}
            transaction={transaction}
            updateTransactionState={updateTransactionState}
            deleteTransactionFromState={deleteTransactionFromState}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionsTable;
