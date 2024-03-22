import Image from "next/image";

const ProfilePostsPage = () => {
  return (
    <section className="py-[2rem] pl-[1.6rem]">
      <h2 className="text-16-700-20 text-black mb-[1.6rem]">판매 중인 상품</h2>
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
  );
};

export default ProfilePostsPage;
