import instance from "@/libs/axios/instances";
import endpoint from "./endpoint.constant";

const categoryService = {
  getCategories: (params?: string) =>
    instance.get(`${endpoint.CATEGORY}?${params}`),
};

export default categoryService;
