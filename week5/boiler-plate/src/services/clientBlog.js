import axios from "axios";

const ApiService = axios.create({
  baseURL: process.env.REACT_APP_API_REGISTER_URL,
  withCredentials: true,
  timeout: 12000,
  // headers: {
  //   "Access-Control-Allow-Credentials": true,
  //   "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  //   Origin: "http://127.0.0.1:3000",
  //   "Content-Type": "application/json",
  // },
});

export default ApiService;
