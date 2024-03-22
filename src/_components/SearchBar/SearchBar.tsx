"use client";

import { useKeywordStore } from "@/_states";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const { onChangeKeyword } = useKeywordStore();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const handleChangeKeyword = debounce(() => {
      onChangeKeyword(value);
    }, 500);

    handleChangeKeyword();

    return () => handleChangeKeyword.cancel();
  }, [value, onChangeKeyword]);

  return (
    <input
      className="w-[31.6rem] h-[3.2rem] rounded-[3.2rem] px-[1.6rem] placeholder:text-grey-500 bg-grey-100 text-14-400-17.5"
      type="text"
      placeholder="계정 검색"
      value={value}
      onChange={handleChangeValue}
    />
  );
};
