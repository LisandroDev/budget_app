import AbmForm from "./AbmForm";
import Stack from 'react-bootstrap/Stack'
import TransactionsTable from "../TransactionsTable";

const AbmSection = () => {
  return (
    <Stack gap={5} className='col-md-8 mx-auto' >
      <AbmForm />
      <TransactionsTable />
    </Stack>
  );
};

export default AbmSection;
