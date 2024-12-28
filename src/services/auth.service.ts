import instance from "@/libs/axios/instances";
import endpoint from "./endpoint.constant";
import { IActivation, IRegister } from "@/types/Auth";

// Auth services
const authServices = {
  register: (payload: IRegister) => instance.post(`${endpoint.AUTH}/register`, payload),
  activation: (payload: IActivation) => instance.post(`${endpoint.AUTH}/activation`, payload),
}

export default authServices;