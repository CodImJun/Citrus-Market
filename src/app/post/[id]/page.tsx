import { Post } from "@/_components";
import { Comment } from "./_components";

const PostDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <section className="px-[1.6rem] py-[2rem]">
        <Post
          postListType="default"
          username="애월읍 위니브 감귤농장"
          accountname="weniv_Mandarin"
          content="옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다."
          heartCount={58}
          commentCount={12}
          createdAt={new Date()}
          profileImage=""
          contentImage=""
        />
      </section>
      <hr className="border-grey-300" />
      <section className="flex flex-col gap-y-[1.6rem] px-[1.6rem] py-[2rem]">
        <ul>
          <li>
            <Comment
              profileImage=""
              username="서귀포시 무슨 농장"
              content="게시글 답글 ~~ !! 최고최고"
              createdAt={new Date()}
            />
          </li>
        </ul>
      </section>
    </>
  );
};

export default PostDetailPage;
