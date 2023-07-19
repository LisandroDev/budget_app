import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import transactionService from "../../services/transaction";
import Balance from "./Balance";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.styles.css";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import Footer from "../Footer";
import Logo from "../Logo";

const Home = ({ transactions }) => {
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
          <Logo />
        </Col>
      </Row>
      <Row className="justify-content-md-center pt-5">
        <Balance balance={balance} />
      </Row>
      <Row className="pt-5">
        {" "}
        <h5>Your last ten transactions are: </h5>
        <TransactionsTable
          transactions={transactions}
          editEnabled={false}
          limitEnabled={true}
        />
      </Row>
      <Link to="/abm">
        <Row className="pt-5">
          <Button variant="primary" size="lg">
            Add or modify transactions
          </Button>
        </Row>
      </Link>
      <Row className="pt-5">
        <Footer />
      </Row>
    </Container>
  );
};

export default Home;
