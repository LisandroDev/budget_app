import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


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

export default TypeDropdownMenu