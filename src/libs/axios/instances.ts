import environmet from "@/config/environments";
import axios from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface CustomSession extends Session {
  accessToken?: string,
}

const headers = {
  "Content-Type": "application/json",
};

// make a req to the API
const instance = axios.create({
  baseURL: environmet.API_URL,
  headers,
  timeout: 60 * 1000,
});

// handle req API
instance.interceptors.request.use(
  async (request) => {
    const session: CustomSession | null = await getSession();
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
