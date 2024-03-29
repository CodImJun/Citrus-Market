import { useGetCommentList } from "../../_states/client/hooks/useGetCommentList";
import { Comment } from "../Comment/Comment";
import { CommentListProps } from "./CommentList.types";

export const CommentList = ({ post_id }: CommentListProps) => {
  const {
    data: commentList,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  } = useGetCommentList(post_id);

  if (isLoading) return null;
  if (isError) return null;
  if (isFetching) return null;
  if (isSuccess)
    return (
      <ul className="flex flex-col gap-y-[1.6rem]">
        {commentList.map((comment) => (
          <li key={comment.id}>
            <Comment
              postId={post_id}
              commentId={comment.id}
              commentAuthorId={comment.author._id}
              profileImage={comment.author.image}
              username={comment.author.username}
              content={comment.content}
              createdAt={new Date(comment.createdAt)}
            />
          </li>
        ))}
      </ul>
    );
};
