import AbmForm from "./AbmForm";
import Stack from 'react-bootstrap/Stack'
import TransactionsTable from "../TransactionsTable/TransactionsTable";

const AbmSection = () => {
  return (
    <Stack gap={5} className='col-md-8 mx-auto' >
      <AbmForm />
      <TransactionsTable editEnabled={true} />
    </Stack>
  );
};

export default AbmSection;
