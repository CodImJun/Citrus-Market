"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateQuery } from "@/_hooks";
import { isEnterPress, isEmptyString } from "@/_utils";

export const SearchBar = () => {
  const router = useRouter();
  const { pathname, createQuery } = useCreateQuery();
  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = () => {
    const query = createQuery("word", searchWord);
    isEmptyString(searchWord) ? router.push(pathname) : router.push(query);
  };

  const handleChangeSearchWord = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchWord(e.target.value);

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) =>
    isEnterPress(e) && handleSubmit();

  return (
    <input
      className="w-[31.6rem] h-[3.2rem] rounded-[3.2rem] px-[1.6rem] placeholder:text-grey-500 bg-grey-100 text-14-400-17.5"
      type="text"
      placeholder="계정 검색"
      value={searchWord}
      onChange={handleChangeSearchWord}
      onKeyDown={handleEnterPress}
    />
  );
};
