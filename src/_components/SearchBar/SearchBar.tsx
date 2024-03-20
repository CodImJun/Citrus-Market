"use client";

import { useKeywordStore } from "@/_states";

export const SearchBar = () => {
  const { keyword, onChangeKeyword } = useKeywordStore();

  const handleSetKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeKeyword(e.target.value);
  };

  return (
    <input
      className="w-[31.6rem] h-[3.2rem] rounded-[3.2rem] px-[1.6rem] placeholder:text-grey-500 bg-grey-100 text-14-400-17.5"
      type="text"
      placeholder="계정 검색"
      value={keyword}
      onChange={handleSetKeyword}
    />
  );
};
