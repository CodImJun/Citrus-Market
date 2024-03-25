import { instance } from "@/_states";
import { UploadImageResponse } from "./image.types";

const uploadImage = async (url: string, file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const { data } = await instance.post<UploadImageResponse>(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const ImageAPI = {
  uploadSingleImage: async (file: File) => {
    return uploadImage("/image/uploadfile", file);
  },
  uploadMultipleImage: (file: File) => {
    return uploadImage("/image/uploadfiles", file);
  },
};
