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

const addTransaction = async (formData) => {
  const transaction = formData
  const response = await axios.post(baseUrl, transaction)
  return response
}

const updateTransaction = async (updatedTransaction, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedTransaction)
  return response
}

const deleteTransaction = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response
}

const transactionService = { getBalance, getTransactions, addTransaction, updateTransaction, deleteTransaction };

export default transactionService;
