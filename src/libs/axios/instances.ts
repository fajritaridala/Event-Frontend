import environment from "@/config/environments";
import { SessionExtended } from "@/types/Auth";
import axios from "axios";
import { getSession } from "next-auth/react";

// set headers
const headers = {
  "Content-Type": "application/json", // application/json is the default content type
};

// make a req to the API
const instance = axios.create({
  baseURL: environment.API_URL_DEV,
  headers,
  timeout: 60 * 1000, // 60s
});

// handle req API
instance.interceptors.request.use(
  async (request) => {
    const session: SessionExtended | null = await getSession();
    if (session && session.accessToken) {
      request.headers.Authorization = `Bearer ${session.accessToken}`
    }

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
