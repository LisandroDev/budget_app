import AbmForm from "./AbmForm";
import Stack from "react-bootstrap/Stack";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import Footer from "../Footer";

const AbmSection = ({
  transactions,
  updateTransactionState,
  deleteTransactionFromState,
}) => {
  return (
    <Stack gap={5} className="col-md-8 mx-auto">
      <div className="text-center ">
        <h1>Budget App</h1>
      </div>
      <AbmForm  />
      <TransactionsTable
        transactions={transactions}
        updateTransactionState={updateTransactionState}
        deleteTransactionFromState={deleteTransactionFromState}
        editEnabled={true}
      />
      <Footer />
    </Stack>
  );
};

export default AbmSection;
