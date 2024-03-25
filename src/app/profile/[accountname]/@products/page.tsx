"use client";

import { ProfilePageProps } from "../page.types";
import { useGetProductList } from "../_states";
import { ImageWithFallback } from "@/_components";
import { isNotEmptyArray } from "@/_utils";
import Link from "next/link";

const ProfileProductListPage = ({ params }: ProfilePageProps) => {
  const {
    data: productList,
    isSuccess,
    isError,
    isLoading,
  } = useGetProductList(params.accountname);
  console.log(productList);

  if (isLoading) return null;
  if (isError) return null;
  if (isSuccess)
    return (
      <>
        {isNotEmptyArray(productList) && (
          <>
            <hr className="border-y-[0.3rem] border-grey-100" />
            <section className="py-[2rem] pl-[1.6rem]">
              <h2 className="text-16-700-20 text-black mb-[1.6rem]">
                판매 중인 상품
              </h2>
              <ul className="flex gap-x-[1rem] overflow-x-scroll">
                {productList.map((item) => (
                  <Link key={item.id} href={`/detail/product/${item.id}`}>
                    <li className="w-[14rem]">
                      <article>
                        <ImageWithFallback
                          src={item.itemImage}
                          alt="product image"
                          width={140}
                          height={90}
                          className="rounded-[0.8rem]"
                          fallbackSrc="/icon-delete.png"
                        />
                        <p className="text-14-400-17.5 text-black mt-[0.6rem] mb-[0.4rem]">
                          {item.itemName}
                        </p>
                        <span className="text-12-700-15 text-primary">
                          {item.price.toLocaleString()}원
                        </span>
                      </article>
                    </li>
                  </Link>
                ))}
              </ul>
            </section>
          </>
        )}
      </>
    );
};

export default ProfileProductListPage;
