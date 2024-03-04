"use client";

import { Button } from "@/_components";
import Link from "next/link";
import { useInput } from "../_hooks";
import { Input } from "../_components";
import Image from "next/image";

const SignUpPage = () => {
  const [email, handleChangeEmail] = useInput("");
  const [password, handleChangePassword] = useInput("");
  const [username, handleChangeUsername] = useInput("");
  const [accountname, handleChangeAccountname] = useInput("");
  const [introduce, handleChangeIntroduce] = useInput("");

  return (
    <>
      <form className="flex flex-col w-full gap-y-[1.4rem] mb-[2rem]">
        <button type="button" className="relative w-fit mx-auto mb-[1.6rem]">
          <Image
            src="/basic-profile-img.png"
            alt="basic profile image"
            width={110}
            height={110}
          />
          <Image
            src="/upload-file.png"
            alt="profile upload image"
            width={36}
            height={36}
            className="absolute right-0 bottom-0"
          />
        </button>
        <Input
          labelName="email"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="이메일 주소를 입력해 주세요."
        />
        <Input
          labelName="password"
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="비밀번호를 설정해주세요."
        />
        <Input
          labelName="username"
          type="text"
          value={username}
          onChange={handleChangeUsername}
          placeholder="2~10자 이내여야 합니다."
        />
        <Input
          labelName="accountname"
          type="email"
          value={accountname}
          onChange={handleChangeAccountname}
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
        <Input
          labelName="introduce"
          type="email"
          value={introduce}
          onChange={handleChangeIntroduce}
          placeholder="자신과 판매할 상품에 대해 소개해주세요!"
        />
        <Button type="submit" size="L" w="w-full" className="mt=[1.4rem]">
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
