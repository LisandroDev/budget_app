import Card from "react-bootstrap/Card";

const Balance = ({ balance }) => {
  return (
    <Card
      className="rounded p-2"
      style={{ width: "18rem", backgroundColor: "#646BE7", color: "#F6F6F6" }}
    >
      <Card.Title>Balance</Card.Title>
      <Card.Text className="lead">
        {" "}
        Your current balance is{" "}
        <p className="text-center" style={{ color: "#FFFF" }}>
          {balance}
        </p>{" "}
      </Card.Text>
    </Card>
  );
};

export default Balance;
