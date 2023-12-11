import axios from "axios";
const qs = require("qs");

const API_URL = "http://localhost:8000";

export const register = async (name, email, password) => {
  try {
    let data = qs.stringify({
      email: email,
      c_password: password,
      name: name,
      password: password,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/api/register`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Error registrando usuario", error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error iniciando sesión", error);
    throw error;
  }
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
