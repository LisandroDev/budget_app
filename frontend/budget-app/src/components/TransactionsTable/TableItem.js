import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import transactionService from "../../services/transaction";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

const DeleteButton = ({ id, deleteTransactionFromState }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteTransaction = () => {
    transactionService.deleteTransaction(id);
    deleteTransactionFromState(id);
    handleClose();
  };

  return (
    <>
      {" "}
      <Button onClick={handleShow} size="md">
        <AiOutlineDelete />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteTransaction}>
            Delete Transaction
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const TableItem = ({
  transaction,
  updateTransactionState,
  deleteTransactionFromState,
}) => {
  const [Edit, setEdit] = useState(false);
  const { concept, type, amount, date } = transaction;

  return Edit ? (
    <TableItemOnEdit
      transaction={transaction}
      setEdit={setEdit}
      updateTransactionState={updateTransactionState}
    />
  ) : (
    <tr>
      <td>{concept}</td>
      <td>
        <Badge bg={type === "expense" ? "danger" : "success"}>{type}</Badge>
      </td>
      <td>{amount}</td>
      <td>{date.split("T")[0]}</td>
      <td>
        <Stack gap={2} direction="horizontal" className="col-md-8 mx-auto">
          <Button onClick={() => setEdit(true)} size="md">
            <MdEdit />
          </Button>
          <DeleteButton
            id={transaction.id}
            deleteTransactionFromState={deleteTransactionFromState}
          >
            {" "}
          </DeleteButton>
        </Stack>
      </td>
    </tr>
  );
};

const TableItemOnEdit = ({ transaction, setEdit, updateTransactionState }) => {
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
    updateTransactionState(transaction.id, modifiedTransaction);
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
            variant="success"
            onClick={() => {
              onSubmit();
              setEdit(false);
            }}
          >
            {" "}
            Submit
          </Button>
          <Button size="sm" variant="danger" onClick={() => setEdit(false)}>
            Cancel
          </Button>
        </Stack>
      </td>
    </tr>
  );
};

export default TableItem;
