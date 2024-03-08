export interface PostProps {
  postListType: "default" | "album";
  username: string;
  accountname: string;
  content: string;
  heartCount: number;
  commentCount: number;
  createdAt: Date;
  profileImage: string;
  contentImage: string;
}
