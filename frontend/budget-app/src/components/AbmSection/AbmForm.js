import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

const AbmForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Concept</Form.Label>
        <Form.Control placeholder="Concept"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Type of transaction</Form.Label>
        <div>
          <Form.Check
            inline
            checked="checked"
            type="radio"
            name="group1"
            label="Income"
            id="income-radio"
          />
          <Form.Check
            inline
            type="radio"
            name="group1"
            label="Expense"
            id="expense-radio"
          />
        </div>
      </Form.Group>
      <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control placeholder="Amount" type="number"></Form.Control>
      </Form.Group>
      <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date"></Form.Control>
      </Form.Group>
      <Button variant="primary" className="mt-2" size="md">Add Transaction</Button>
    </Form>
  );
};

export default AbmForm;
