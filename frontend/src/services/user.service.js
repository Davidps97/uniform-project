import axios from "axios";

const API_URL = "http://localhost:8000";

export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/api/users`);
  const users = await response.data;

  return users;
}

export const getOneUser = async (id) => {
  const response = await axios.get(`${API_URL}/api/users/${id}`);

  return response;
}

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/api/users/${id}`);

  return response;
}

export const updateUser = async (user) => {
  const body = new URLSearchParams();
  body.append("name" , user.name);
  body.append("email" , user.email);

  const response = await axios.put(`${API_URL}/api/users/${user.id}`, body);

  return response;
}