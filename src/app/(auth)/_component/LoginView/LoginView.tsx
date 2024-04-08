"use client";

import { Button, FormInput } from "@/_components";
import { useLogin } from "../../_hooks";
import Link from "next/link";

export const LoginView = () => {
  const { handleLogin, emailRegister, passwordRegister, isValid } = useLogin();

  return (
    <>
      <form
        className="flex flex-col w-full gap-y-[1.4rem] mb-[2rem]"
        onSubmit={handleLogin}
      >
        <FormInput type="email" labelName="email" {...emailRegister} />
        <FormInput
          type="password"
          labelName="password"
          autoComplete="off"
          {...passwordRegister}
        />
        <Button size="L" w="w-full" disabled={!isValid}>
          로그인
        </Button>
      </form>
      <Link href="/signup" className="text-12-400-15 text-grey-700">
        회원가입
      </Link>
    </>
  );
};
