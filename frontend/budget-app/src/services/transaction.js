import axios from "axios";

const baseUrl = "http://localhost:3001/api/transactions";

const getBalance = async () => {
  const response = await axios.get(`${baseUrl}/balance`);
  return response.data;
};



// eslint-disable-next-line import/no-anonymous-default-export
export default { getBalance }
