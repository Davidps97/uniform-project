import axios from "axios";

const API_URL = "http://localhost:8000";

export const getAllApplication = async () => {
  const response = await axios.get(`${API_URL}/api/applications`);
  const application = await response.data;

  return application;
}

export const createApplication = async (name) => {
  const body = new URLSearchParams();
  body.append("name", name);

  const response = await axios.post(`${API_URL}/api/applications`, body);

  return response;
}

export const deleteApplication = async (id) => {
  const response = await axios.delete(`${API_URL}/api/applications/${id}`);

  return response;
}

export const updateApplication = async (application) => {
  const body = new URLSearchParams();
  body.append("name" , application.name);

  const response = await axios.put(`${API_URL}/api/applications/${application.id}`, body);

  return response;
}