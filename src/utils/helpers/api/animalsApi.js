import { api } from "./api";

export const getAllUserAnimals = async (userId) => {
  try {
    const response = await api.get(`/GetAllUserAnimals/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAnimalInformationById = async (animalId) => {
  try {
    const response = await api.get(`/GetAnimalInformationById/${animalId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAnimalDataById = async (animalId) => {
  try {
    const response = await api.get(`/GetAnimalDataByAnimalId/${animalId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addAnimalData = async (animalId, data) => {
  try {
    const response = await api.post(`/AddDataByAnimalId/${animalId}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAnimalData = async (animalDataId) => {
  try {
    await api.delete(`/DeleteAnimalDataById/${animalDataId}`);
  } catch (error) {
    throw error;
  }
};

export const switchAnimalDivision = async (animalId, divisionId) => {
  try {
    const response = await api.put(`/SwitchAnimalDivision/${animalId}/${divisionId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
