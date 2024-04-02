import { DeletePostRequest, DeletePostResponse, PostAPI } from "@/_apis";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const usePostDelete = ({ post_id }: DeletePostRequest) => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => PostAPI.deletePost({ post_id }),
    onSuccess: (data: DeletePostResponse) => {
      router.back();
    },
    onError: () => {},
  });
};
