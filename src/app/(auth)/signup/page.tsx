"use client";

import { Button, FormInput } from "@/_components";
import Link from "next/link";
import { useSignUp } from "../_hooks";

const SignUpPage = () => {
  const {
    handleSignUp,
    imageRegister,
    emailRegister,
    passwordRegister,
    usernameRegister,
    accountnameRegister,
    introduceRegister,
    isValid,
  } = useSignUp();

  return (
    <>
      <form
        className="flex flex-col w-full gap-y-[1.4rem] mb-[2rem]"
        onSubmit={handleSignUp}
      >
        {/* TODO: Add Image File Code - can't change image value */}
        <FormInput type="image" labelName="image" {...imageRegister} />
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
        <FormInput
          type="introduce"
          labelName="introduce"
          {...introduceRegister}
        />
        <Button
          type="submit"
          size="L"
          w="w-full"
          className="mt=[1.4rem]"
          disabled={!isValid}
        >
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
