import instance from "@/libs/axios/instances";
import { ICategory } from "@/types/Category";
import endpoint from "./endpoint.constant";

const categoryService = {
  getCategories: (params?: string) =>
    instance.get(`${endpoint.CATEGORY}?${params}`),
  addCategory: (payload: ICategory) =>
    instance.post(`${endpoint.CATEGORY}`, payload),
};

export default categoryService;
