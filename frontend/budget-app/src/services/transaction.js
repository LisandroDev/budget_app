import axios from "axios";

const baseUrl = "http://localhost:3001/api/transactions";

const getBalance = async () => {
  const response = await axios.get(`${baseUrl}/balance`);
  return response.data;
};

const getTransactions = async (limit) => {
  const response = await axios.get(
    limit ? `${baseUrl}?limit=${limit}` : `${baseUrl}`
  );
  return response.data;
};

const transactionService = { getBalance, getTransactions };

export default transactionService;
