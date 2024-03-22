import { Post } from "@/_components";
import Image from "next/image";

const ProfileProductsPage = () => {
  return (
    <section>
      <div className="flex justify-end gap-x-[1.6rem] px-[1.6rem] py-[1rem] border-b-[0.05rem] border-solid border-grey-300">
        <button type="button">
          <Image
            src="/icon-post-list-on.png"
            alt="post list"
            width={26}
            height={26}
          />
        </button>
        <button type="button">
          <Image
            src="/icon-post-album-off.png"
            alt="post album"
            width={26}
            height={26}
          />
        </button>
      </div>
      <ul className="flex flex-col gap-y-[1.6rem] p-[1.6rem]">
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </section>
  );
};

export default ProfileProductsPage;
