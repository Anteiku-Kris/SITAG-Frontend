import { api } from "./api";

export const createExpense = async (financeDto) => {
  try {
    const response = await api.post("/CreateAnExpense", financeDto);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createIncome = async (financeDto) => {
  try {
    const response = await api.post("/CreateAnIncome", financeDto);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getIncomesByUserId = async (userId) => {
  try {
    const response = await api.get(`/GetIncomesByUserId/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getExpensesByUserId = async (userId) => {
  try {
    const response = await api.get(`/GetExpensesByUserId/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserMonthlyBalance = async () => {
  try {
    const response = await api.get(`/GetUserMonthlyBalance`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserPreviousMonthBalance = async () => {
  try {
    const response = await api.get(`/GetUserPreviusMonthBalance`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
