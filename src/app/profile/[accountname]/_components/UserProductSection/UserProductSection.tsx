"use client";

import { isNotEmptyArray } from "@/_utils";
import Link from "next/link";
import { ImageWithFallback } from "@/_components";
import { UserProductSectionProps } from "./UserProductSection.types";

export const UserProductSection = ({
  productList,
}: UserProductSectionProps) => {
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
              {productList.map((product) => (
                <Link key={product.id} href={`/detail/product/${product.id}`}>
                  <li className="w-[14rem]">
                    <article>
                      <ImageWithFallback
                        src={product.itemImage}
                        alt="product image"
                        width={140}
                        height={90}
                        className="rounded-[0.8rem] w-auto h-auto"
                        fallbackSrc="/icon-delete.png"
                        priority
                      />
                      <p className="text-14-400-17.5 text-black mt-[0.6rem] mb-[0.4rem]">
                        {product.itemName}
                      </p>
                      <span className="text-12-700-15 text-primary">
                        {product.price.toLocaleString()}원
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
