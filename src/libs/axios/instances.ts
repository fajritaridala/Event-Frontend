import environmet from "@/config/environments";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

// make a req to the API
const instance = axios.create({
  baseURL: environmet.API_URL,
  headers,
  timeout: 60 * 1000,
});

// manipulate req API
instance.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => Promise.reject(error)
);

// manipulate res API
instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default instance;