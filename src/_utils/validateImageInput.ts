import { MAX_IMAGE_SIZE, MAX_IMAGES_COUNT } from "@/_constants";
import { ERROR_MESSAGE } from "@/_constants/validations/message";

export const validateImageInput = (
  files: File[]
): { isValid: boolean; errorMessage?: string } => {
  if (files.length > MAX_IMAGES_COUNT) {
    return {
      isValid: false,
      errorMessage: ERROR_MESSAGE.image.max,
    };
  }

  const isEveryFileValid = files.every((file) => file.size <= MAX_IMAGE_SIZE);
  if (!isEveryFileValid)
    return {
      isValid: false,
      errorMessage: ERROR_MESSAGE.image.size,
    };

  return {
    isValid: true,
  };
};
