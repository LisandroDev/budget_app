import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {
    createTransaction(state, action) {
      const newTransaction = action.payload;
      state.push(newTransaction);
    },
    setTransactions(state, action) {
      return action.payload;
    },
  },
});

export const { createTransaction, setTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
