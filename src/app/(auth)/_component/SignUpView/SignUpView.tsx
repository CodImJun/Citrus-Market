"use client";

import { Button, FormInput, ProfileImageInput } from "@/_components";
import { useSignUp } from "../../_hooks";
import Link from "next/link";

export const SignUpView = () => {
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

  return (
    <>
      <form
        className="flex flex-col w-full gap-y-[1.4rem] mb-[2rem]"
        onSubmit={handleSignUp}
      >
        <ProfileImageInput register={imageRegister} setValue={setValue} />
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
