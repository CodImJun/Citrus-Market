"use client";

import { Button, FormInput, ImageUploadButton } from "@/_components";
import Link from "next/link";
import { useSignUp } from "../_hooks";
import { ProfileImageInput } from "@/_components/ProfileImageInput";
import { useUploadImage } from "@/_hooks";
import Image from "next/image";

const SignUpPage = () => {
  const {
    setValue,
    handleSignUp,
    imageRegister,
    emailRegister,
    passwordRegister,
    usernameRegister,
    accountnameRegister,
    introRegister,
    isValid,
  } = useSignUp();
  const { images, handleChangeImage } = useUploadImage({
    setValue,
  });

  return (
    <>
      <form
        className="flex flex-col w-full gap-y-[1.4rem] mb-[2rem]"
        onSubmit={handleSignUp}
      >
        <div className="relative w-[11rem] h-[11rem] m-auto mb-[1.4rem]">
          <Image
            src={images[0] ? images[0].imageUrl : `/basic-profile-img.png`}
            alt="profile image"
            fill
            sizes="100%"
            priority
          />
          <ImageUploadButton
            position="right-0 bottom-0"
            {...Object.assign(imageRegister, { onChange: handleChangeImage })}
          />
        </div>
        {/* <ProfileImageInput register={imageRegister} setValue={setValue} /> */}
        <FormInput type="email" labelName="email" {...emailRegister} />
        <FormInput
          type="password"
          labelName="password"
          autoComplete="off"
          {...passwordRegister}
        />
        <FormInput type="username" labelName="username" {...usernameRegister} />
        <FormInput
          type="accountname"
          labelName="accountname"
          {...accountnameRegister}
        />
        <FormInput type="introduce" labelName="introduce" {...introRegister} />
        <Button size="L" w="w-full" disabled={!isValid}>
          감귤마켓 시작하기
        </Button>
      </form>
      <Link href="/login" className="text-12-400-15 text-grey-700">
        로그인
      </Link>
    </>
  );
};

export default SignUpPage;
