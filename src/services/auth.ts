import instance from "@/libs/axios/instances";
import endpoint from "./endpoint.constant";
import { IRegister } from "@/types/Auth";

// Auth services
const authServices = {
  register: (payload: IRegister) => instance.post(`${endpoint.AUTH}/register`, payload),
}

export default authServices;