// import axios from "axios";
// // const qs = require("qs");

// export const getAllUsers = () => {
//   // let data = qs.stringify({});
//   let config = {
//     method: "get",
//     maxBodyLength: Infinity,
//     url: "http://localhost:8000/api/users",
//     headers: {},
//     // data: data,
//   };

//   // let response = null;

//   return axios
//     .request(config)
//     .then((response) => {
//       console.log("llegó la información");
//       console.log(JSON.stringify(response.data));
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//       return null;
//     });
// };

// export const deleteUser = (id) => {
//   axios
//     .delete("http://localhost:8000/api/users/" + id)
//     .then((response) => {
//       return response;
//     })
//     .catch((error) => {
//       console.log(error);
//       return null;
//     });
// };

import axios from "axios";

const API_URL = "http://localhost:8000";

export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/api/users`);
  const users = await response.data;

  return users;
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