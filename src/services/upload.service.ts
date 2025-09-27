import instance from "@/libs/axios/instances";
import { IFileUrl } from "@/types/File";
import endpoint from "./endpoint.constant";

const formdataHeader = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const uploadService = {
  uploadFile: (payload: FormData) =>
    instance.post(`${endpoint.MEDIA}/upload-single`, payload, formdataHeader),
  deleteFile: (payload: IFileUrl) =>
    instance.delete(`${endpoint.MEDIA}/remove`, payload),
};

export default uploadService;
