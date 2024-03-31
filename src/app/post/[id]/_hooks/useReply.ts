"use client";

import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useCreateCommentMutate } from "../_states";
import { yupResolver } from "@hookform/resolvers/yup";

export const useReply = (post_id: string) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      content: "",
    },
    resolver: yupResolver(Yup.object({ content: Yup.string().required() })),
  });
  const { mutate } = useCreateCommentMutate();

  const contentRegister = register("content");

  const handleSubmitComment = handleSubmit((data) =>
    mutate(
      { post_id, content: data.content },
      { onSuccess: () => reset({ content: "" }) }
    )
  );

  return {
    isValid,
    contentRegister,
    handleSubmitComment,
  };
};
