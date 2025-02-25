import { api } from "./api";

export const getAllActivitiesByUser = async (userId) => {
  try {
    const response = await api.get(`/GetAllActivitiesByUser/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createActivity = async (animalId, activityData) => {
  try {
    const response = await api.post(`/CreateActivity/${animalId}`, activityData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateActivity = async (medicalServiceId, updateData) => {
  try {
    const response = await api.put(`/UpdateActivity/${medicalServiceId}`, updateData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteActivityById = async (medicalServiceId) => {
  try {
    await api.delete(`/DeleteMedicalServiceById/${medicalServiceId}`);
  } catch (error) {
    throw error;
  }
};
