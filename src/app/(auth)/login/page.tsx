"use client";

import { Button } from "@/_components";
import { Input } from "../_components";
import Link from "next/link";
import { useState } from "react";
import { useInput } from "../_hooks";
import { UserApi } from "@/_apis/user/user";

const LoginPage = () => {
  const [email, handleChangeEmail] = useInput("");
  const [password, handleChangePassword] = useInput("");

  const [error, setError] = useState("");
  const handleSetError = () => setError("");

  const isSubmitEnabled = email && password && !error;

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = UserApi.login({ email, password });
    console.log(res);
  };

  return (
    <main className="flex flex-col w-full items-center">
      <form
        className="flex flex-col w-full gap-y-[1.4rem] mb-[2rem]"
        onSubmit={handleSubmitLogin}
      >
        <Input
          labelName="email"
          type="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <Input
          labelName="password"
          type="password"
          value={password}
          onChange={handleChangePassword}
          error={error}
          setError={handleSetError}
        />
        <Button
          type="submit"
          size="L"
          w="w-full"
          className="mt-[1.4rem]"
          disabled={!isSubmitEnabled}
        >
          로그인
        </Button>
      </form>
      <Link href="/signup" className="text-12-400-15 text-grey-700">
        회원가입
      </Link>
    </main>
  );
};

export default LoginPage;
