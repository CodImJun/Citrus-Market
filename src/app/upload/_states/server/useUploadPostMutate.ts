import { PostAPI } from "@/_apis";
import { CreatePostRequest, CreatePostResponse } from "@/_apis/post/post.types";
import { useMutation } from "@tanstack/react-query";

export const useUploadPostMutate = () => {
  return useMutation({
    mutationFn: (data: CreatePostRequest) =>
      PostAPI.createPost({ content: data.content, image: data.image }),
    onError: (data: CreatePostResponse) => console.error(data),
    onSettled: () => {},
    onSuccess: () => {},
  });
};
