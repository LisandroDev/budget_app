import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import transactionService from "../../services/transaction";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { toast } from "react-toastify";

const AbmForm = ({ addTransactionToState }) => {
  const [formState, setFormState] = useState({
    concept: "",
    amount: 0,
    type: "income",
    date: new Date(),
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const addTransaction = () => {
    transactionService
      .addTransaction(formState)
      .then((newTransaction) => {
        addTransactionToState(newTransaction.data);
      })
      .then(() => toast.success("Transaction added"))
      .catch(() => toast.error("Fail at add transaction"));
  };

  return (
    <Form
      className="pt-4"
      onSubmit={(e) => {
        e.preventDefault();
        addTransaction();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Concept</Form.Label>
        <Form.Control
          placeholder="Concept"
          name="concept"
          id="concept"
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Type of transaction</Form.Label>
        <div>
          <Form.Check
            inline
            defaultChecked
            type="radio"
            value="income"
            name="type"
            onChange={handleChange}
            label="Income"
            id="income"
          />
          <Form.Check
            inline
            type="radio"
            name="type"
            value="expense"
            label="Expense"
            onChange={handleChange}
            id="expense"
          />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label>Amount</Form.Label>
        <Form.Control
          placeholder="Amount"
          onChange={handleChange}
          id="amount"
          name="amount"
          type="number"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control
          onChange={handleChange}
          id="date"
          name="date"
          type="date"
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2" size="md">
        Add Transaction
      </Button>
    </Form>
  );
};

export default AbmForm;
