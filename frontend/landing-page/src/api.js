import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/login`,
      credentials
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getUserDetails = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/users/${userId}`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${API_BASE_URL}/users/${userId}`);
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
