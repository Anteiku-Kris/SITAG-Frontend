import { api } from "./api";

export const getAnimalsHistory = async () => {
  try {
    const response = await api.get(`/GetAnimalsHistory`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const attendAnimal = async (animalId, medicalData) => {
  try {
    const response = await api.post(`/AttendAnimal/${animalId}`, medicalData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMedicalService = async (medicalServiceId, updateData) => {
  try {
    const response = await api.put(`/UpdateMedicalService/${medicalServiceId}`, updateData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMedicalServiceById = async (medicalServiceId) => {
  try {
    await api.delete(`/DeleteMedicalServiceById/${medicalServiceId}`);
  } catch (error) {
    throw error;
  }
};
