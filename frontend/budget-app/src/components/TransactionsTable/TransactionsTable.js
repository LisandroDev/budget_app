import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import transactionService from "../../services/transaction";
import { useState, useEffect } from "react";
import "../../styles/TransactionsTable.css";
import { MdEdit } from "react-icons/md";

const TableItem = ({ transaction }) => {
  const [Edit, setEdit] = useState(false);
  const { concept, type, amount, date } = transaction;

  return Edit ? (
    <TableEditItem transaction={transaction} setEdit={setEdit} />
  ) : (
    <tr>
      <td>{concept}</td>
      <td>
        <Badge bg={type === "expense" ? "danger" : "success"}>{type}</Badge>
      </td>
      <td>{amount}</td>
      <td>{date.split("T")[0]}</td>
      <td>
        <Button onClick={() => setEdit(true)} size="sm">
          <MdEdit />
        </Button>
      </td>
    </tr>
  );
};

const TableEditItem = ({ transaction , setEdit }) => {
  const { concept, type, amount, date } = transaction;
  return (
    <tr>
      <td>
        <InputGroup>
          <Form.Control placeholder={concept}></Form.Control>
        </InputGroup>
      </td>
      <td>
        <Badge bg={type === "expense" ? "danger" : "success"}>{type}</Badge>
      </td>
      <td>
        <InputGroup>
          <Form.Control placeholder={amount}></Form.Control>
        </InputGroup>
      </td>
      <td>
        <InputGroup>
          <Form.Control id="date" name="date" type="date"></Form.Control>
        </InputGroup>
      </td>
      <td>
        <Button size="sm">Submit</Button>
        <Button size="sm" onClick={() => setEdit(false)}>Cancel</Button>
      </td>
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
