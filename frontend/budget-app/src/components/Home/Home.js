import { useState, useEffect } from "react";
import transactionService from "../../services/transaction";
import LastTenTable from "./LastTenTable";
import Balance from "./Balance";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.styles.css";


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
      <Balance balance={balance} />
      <Row className="pt-5">
        {" "}
        <h5>Your last ten transactions are: </h5>
        <LastTenTable />
      </Row>
    </Container>
  );
};

export default Home;
