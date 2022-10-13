import AbmForm from "./AbmForm";
import Stack from 'react-bootstrap/Stack'
import TransactionsTable from "../TransactionsTable/TransactionsTable";

const AbmSection = ({transactions, updateTransactionState, deleteTransactionFromState}) => {
  return (
    <Stack gap={5} className='col-md-8 mx-auto' >
      <AbmForm />
      <TransactionsTable transactions={transactions} updateTransactionState={updateTransactionState} deleteTransactionFromState={deleteTransactionFromState}/>
    </Stack>
  );
};

export default AbmSection;
