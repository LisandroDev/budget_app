import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import InputGroup from "react-bootstrap/InputGroup";
import transactionService from "../../services/transaction";
import { MdEdit } from "react-icons/md";
import { useState } from "react";

const TableItem = ({ transaction }) => {
  const [Edit, setEdit] = useState(false);
  const { concept, type, amount, date } = transaction;

  return Edit ? (
    <TableItemOnEdit transaction={transaction} setEdit={setEdit} />
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

const TableItemOnEdit = ({ transaction, setEdit }) => {
  const { concept, type, amount } = transaction;
  const [modifiedTransaction, setModifiedTransaction] = useState(transaction);

  const handleChange = (event) => {
    setModifiedTransaction({
      ...modifiedTransaction,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = () => {
    transactionService.updateTransaction(modifiedTransaction, transaction.id);
  };

  return (
    <tr>
      <td>
        <InputGroup>
          <Form.Control
            onChange={handleChange}
            name="concept"
            placeholder={concept}
          ></Form.Control>
        </InputGroup>
      </td>
      <td>
        <Badge bg={type === "expense" ? "danger" : "success"}>{type}</Badge>
      </td>
      <td>
        <InputGroup>
          <Form.Control
            onChange={handleChange}
            name="amount"
            placeholder={amount}
          ></Form.Control>
        </InputGroup>
      </td>
      <td>
        <InputGroup>
          <Form.Control
            onChange={handleChange}
            name="date"
            id="date"
            type="date"
          ></Form.Control>
        </InputGroup>
      </td>
      <td>
        <Stack gap={2}>
          <Button
            size="sm"
            onClick={() => {
              onSubmit();
              setEdit(false);
            }}
          >
            {" "}
            Submit
          </Button>
          <Button size="sm" onClick={() => setEdit(false)}>
            Cancel
          </Button>
        </Stack>
      </td>
    </tr>
  );
};

export default TableItem;
