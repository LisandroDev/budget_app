import AbmForm from "./AbmForm";
import Stack from "react-bootstrap/Stack";
import { toast } from "react-toastify";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import Footer from "../Footer";
import Logo from "../Logo";

const AbmSection = ({
  transactions,
  updateTransactionState,
  addTransaction,
  deleteTransactionFromState,
}) => {
  return (
    <Stack gap={5} className="col-md-8 mx-auto">
      <Logo />
      <AbmForm addTransactionToState={addTransaction} />
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
