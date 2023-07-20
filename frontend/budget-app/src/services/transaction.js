import axios from "axios";

const baseUrl = "/api/transactions";

const getBalance = async () => {
  const response = await axios.get(`${baseUrl}/balance`, {
    withCredentials: true,
  });
  return response.data;
};

const getTransactions = async (limit) => {
  const response = await axios.get(
    limit ? `${baseUrl}?limit=${limit}` : `${baseUrl}`,
    { withCredentials: true },
  );
  return response.data;
};

const addTransaction = async (formData) => {
  const transaction = formData;
  const response = await axios.post(baseUrl, transaction, {
    withCredentials: true,
  });
  return response;
};

const updateTransaction = async (updatedTransaction, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedTransaction, {
    withCredentials: true,
  });
  return response;
};

const deleteTransaction = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, {
    withCredentials: true,
  });
  return response;
};

const transactionService = {
  getBalance,
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
};

export default transactionService;
