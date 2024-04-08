"use client";

import { Header, MainLayout, PreviewImageUpload } from "@/_components";
import { useUploadProduct } from "../../_hooks";
import { Controller } from "react-hook-form";
import { forwardRef } from "react";

export const UploadProductView = () => {
  const {
    setValue,
    control,
    isValid,
    itemImageRegister,
    itemNameRegister,
    linkRegister,
    handleUploadProduct,
  } = useUploadProduct();

  return (
    <>
      <Header isValid={!isValid} uploadEvent={handleUploadProduct} />
      <MainLayout>
        <form className="flex flex-col gap-y-[1.4rem] px-[3.4rem] py-[3rem]">
          <div className="flex flex-col gap-y-[1.8rem] text-12-500-15 text-grey-700">
            이미지 등록
            <PreviewImageUpload
              layout="product"
              register={itemImageRegister}
              setValue={setValue}
            />
          </div>

          <ProductInput
            labelName="상품명"
            minLength={2}
            maxLength={15}
            placeholder="2~15자 이내여야 합니다."
            {...itemNameRegister}
          />
          <Controller
            control={control}
            name="price"
            render={({ field, fieldState, formState, ...rest }) => (
              <ProductInput
                labelName="가격"
                placeholder="숫자만 입력 가능합니다."
                value={field.value ? field.value.toLocaleString() : ""}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  field.onChange(value ? parseInt(value, 10) : "");
                }}
                {...rest}
              />
            )}
          />
          <ProductInput
            labelName="판매 링크"
            placeholder="URL을 입력해 주세요."
            {...linkRegister}
          />
        </form>
      </MainLayout>
    </>
  );
};

type ProductInputProps = {
  labelName: "상품명" | "가격" | "판매 링크";
} & React.InputHTMLAttributes<HTMLInputElement>;

const ProductInput = forwardRef<HTMLInputElement, ProductInputProps>(
  ({ labelName, ...props }, ref) => {
    return (
      <label className="relative flex flex-col gap-y-[0.2rem] text-12-500-15 text-grey-700">
        {labelName}
        <input
          ref={ref}
          type="text"
          className="text-14-400-14 text-black border-b-[0.1rem] border-solid border-grey-300 py-[0.8rem] placeholder:text-grey-300"
          autoComplete="off"
          {...props}
        />
      </label>
    );
  }
);

ProductInput.displayName = "ProductInput";
