import { LikeAPI, PostLikeRequest } from "@/_apis";
import { queryKeys } from "@/_states";
import { PostType } from "@/_types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLiked = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      post_id,
      liked,
    }: {
      post_id: PostLikeRequest["post_id"];
      liked: boolean;
    }) => {
      if (liked) return LikeAPI.postUnLike({ post_id });
      else return LikeAPI.postLike({ post_id });
    },
    onSuccess: (_, variables) => {
      const { liked, post_id } = variables;

      const handleLikeUpdate = () => {
        const currentData = queryClient.getQueryData<PostType>(
          queryKeys.post.getPostDetail({ post_id })
        );
        if (currentData) {
          const newData = {
            ...currentData,
            hearted: !currentData.hearted,
            heartCount: liked
              ? currentData.heartCount - 1
              : currentData.heartCount + 1,
          };

          queryClient.setQueryData(
            queryKeys.post.getPostDetail({ post_id }),
            newData
          );
        }
      };

      handleLikeUpdate();

      queryClient.refetchQueries({
        queryKey: queryKeys.post.getFollowingPostList(),
        exact: true,
      });
    },
    onError: () => {},
  });
};
