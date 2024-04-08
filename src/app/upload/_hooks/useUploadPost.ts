import { useRegisterFormField } from "@/app/(auth)/_hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UPLOAD_SCHEMA } from "../_constants";
import { ImageAPI } from "@/_apis";
import { useUploadPostMutate } from "../_states/server/useUploadPostMutate";

type UseUploadPostValues = {
  image: File[];
  content: string;
};

export const useUploadPost = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<UseUploadPostValues>({
    mode: "onChange",
    defaultValues: {
      content: "",
      image: undefined,
    },
    resolver: yupResolver<any>(UPLOAD_SCHEMA.post),
  });

  const [imageRegister, contentRegister] = useRegisterFormField(
    register,
    errors,
    ["image", "content"]
  );

  const { mutate } = useUploadPostMutate();

  const handleUploadPost = handleSubmit(async (data) => {
    const imageResponse = await ImageAPI.uploadMultipleImage(data.image);
    let image = "";
    if (Array.isArray(imageResponse)) {
      const ARRAY_SIZE = imageResponse.length - 1;

      imageResponse.forEach((img, idx) => {
        if (idx === ARRAY_SIZE) image += img.filename;
        else image += img.filename + ", ";
      });
    }
    mutate({ content: data.content, image: image });
  });

  return {
    isValid,
    setValue,
    imageRegister,
    contentRegister,
    handleUploadPost,
  };
};
