import { useState, useEffect } from "react";
import transactionService from "../../services/transaction";
import Balance from "./Balance";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.styles.css";
import TransactionsTable from "../TransactionsTable";

const Home = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    transactionService
      .getBalance()
      .then((response) => setBalance(response.balance));
  });

  return (
    <Container className="p-3">
      <Row className="justify-content-md-center rounded">
        <Col md="auto">
          {" "}
          <h1>Welcome to Budget App !</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center pt-5">
        <Balance balance={balance} />
      </Row>
      <Row className="pt-5">
        {" "}
        <h5>Your last ten transactions are: </h5>
        <TransactionsTable limit={10} />
      </Row>
      <Row className="pt-5">
        <Button href="/abm" variant="primary" size="lg">
          Add or modify transactions
        </Button>
      </Row>
    </Container>
  );
};

export default Home;
