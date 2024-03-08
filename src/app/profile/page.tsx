"use client";

import Image from "next/image";
import { Follow } from "./_components";
import { Button, Post } from "@/_components";
import { usePostType } from "./_states";

const ProfilePage = () => {
  const { postListType } = usePostType();

  return (
    <>
      <section className="flex flex-col items-center py-[2.8rem]">
        <div className="flex gap-x-[3.8rem] items-center mb-[1.6rem]">
          <Follow type="follower" count={2950} />
          {/* TODO: CHANGE IMAGE SRC */}
          <Image
            src=""
            alt="profile image"
            width={110}
            height={110}
            className="rounded-full"
          />
          <Follow type="following" count={128} />
        </div>
        <p className="text-16-700-20 text-black">애월읍 위니브 감귤농장</p>
        <p className="text-12-400-14 text-grey-700 mt-[0.6rem] mb-[1.6rem]">
          @weniv_Mandarin
        </p>
        <p className="text-14-400-17.5 text-grey-700">
          애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장
        </p>
        <div className="flex gap-x-[1rem] mt-[2.4rem]">
          <button
            type="button"
            className="flex items-center justify-center w-[3.4rem] h-[3.4rem] rounded-full border-[0.1rem] border-solid border-grey-300"
          >
            <Image src="" alt="chat" width={20} height={20} />
          </button>
          <Button size="M" w="w-[12rem]" active={false}>
            팔로우
          </Button>
          <button
            type="button"
            className="flex items-center justify-center w-[3.4rem] h-[3.4rem] rounded-full border-[0.1rem] border-solid border-grey-300"
          >
            <Image src="" alt="share" width={20} height={20} />
          </button>
        </div>
      </section>
      <hr className="border-y-[0.3rem] border-grey-100" />
      <section className="py-[2rem] pl-[1.6rem]">
        <h2 className="text-16-700-20 text-black mb-[1.6rem]">
          판매 중인 상품
        </h2>
        <ul className="flex gap-x-[1rem] overflow-x-scroll">
          <li className="w-[14rem]">
            <article>
              <Image
                src=""
                alt="product image"
                width={140}
                height={90}
                className="rounded-[0.8rem]"
              />
              <p className="text-14-400-17.5 text-black mt-[0.6rem] mb-[0.4rem]">
                애월읍 노지 감귤
              </p>
              <span className="text-12-700-15 text-primary">35,000원</span>
            </article>
          </li>
        </ul>
      </section>
      <hr className="border-y-[0.3rem] border-grey-100" />
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
              postListType="album"
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
    </>
  );
};

export default ProfilePage;
