import axios from "axios";

const API_URL = "http://localhost:8000";

export const getAllRoles = async () => {
  const response = await axios.get(`${API_URL}/api/roles`);
  const roles = await response.data;

  return roles;
}

export const createRole = async (name) => {
  const body = new URLSearchParams();
  body.append("name", name);

  const response = await axios.post(`${API_URL}/api/roles`, body);

  return response;
}

export const deleteRole = async (id) => {
  const response = await axios.delete(`${API_URL}/api/roles/${id}`);

  return response;
}

export const updateRole = async (role) => {
  const body = new URLSearchParams();
  body.append("name" , role.name);

  const response = await axios.put(`${API_URL}/api/roles/${role.id}`, body);

  return response;
}

export const assignRoleToUser = async (user_id, role_id) => {
  const body = new URLSearchParams();
  body.append("roleId", role_id)
  body.append("userId", user_id)

  const response = await axios.post(`${API_URL}/api/roles/assign`, body);

  return response;
}

export const getRoleWithUser = async (userId) => {
  const response = await axios.get(`${API_URL}/api/roles/assign/${userId}`);

  return response;
}