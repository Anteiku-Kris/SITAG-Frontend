import { api } from "./api";

export const loginUser = async (email, password) => {
    try {
      const response = await api.post("/Login", { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
 
  export const registerUser = async (userData) => {
    try {
      const response = await api.post("/Register", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };