import { instance } from "@/_states";
import { UploadImageResponse } from "./image.types";

const uploadImage = async (url: string, file: File | File[]) => {
  const formData = new FormData();

  if (Array.isArray(file)) {
    file.forEach((item) => formData.append("image", item));
  } else {
    formData.append("image", file);
  }

  const { data } = await instance.post<
    UploadImageResponse | UploadImageResponse[]
  >(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const ImageAPI = {
  uploadSingleImage: async (file: File) => {
    return await uploadImage("/image/uploadfile", file);
  },
  uploadMultipleImage: async (files: File[]) => {
    return await uploadImage("/image/uploadfiles", files);
  },
};
