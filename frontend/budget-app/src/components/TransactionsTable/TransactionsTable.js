import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";
import TypeDropdownMenu from "./TypeDropdownMenu";
import { useState } from "react";
import "../../styles/TransactionsTable.css";

const TransactionsTable = ({
  limitEnabled,
  editEnabled,
  transactions,
  updateTransactionState,
  deleteTransactionFromState,
}) => {
  const [filter, setFilter] = useState("all");

  const filterTransactions = () => {
    let filteredTransactions = transactions;
    if (filter !== "all") {
      filteredTransactions = transactions.filter(
        (transaction) => transaction.type === filter
      );
    }
    if (limitEnabled && transactions.length > 10) {
      filteredTransactions = filteredTransactions.slice(
        transactions.length - 10
      );
    }
    return filteredTransactions;
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
            editEnabled={editEnabled}
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
