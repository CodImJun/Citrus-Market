import { instance } from "@/_states";
import { UploadImageResponse } from "./image.types";

const uploadImage = async (url: string, formData: FormData) => {
  const { data } = await instance.post<UploadImageResponse>(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const ImageAPI = {
  uploadSingleImage: (formData: FormData) => {
    return uploadImage("/image/uploadfile", formData);
  },
  uploadMultipleImage: (formData: FormData) => {
    return uploadImage("/image/uploadfiles", formData);
  },
};
