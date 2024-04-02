"use client";

import { useRef } from "react";
import { PostContentTextareaProps } from "./PostContentTextarea.types";
import { resizeElementByInput } from "@/app/upload/_utils";

export const PostContentTextarea = ({ register }: PostContentTextareaProps) => {
  const textareaRef: React.MutableRefObject<HTMLTextAreaElement | null> =
    useRef<HTMLTextAreaElement>(null);

  const { ref, onChange, ...rest } = register;

  const contentRef = (e: HTMLTextAreaElement) => {
    ref(e);
    textareaRef.current = e;
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    resizeElementByInput(textareaRef);
    onChange(e);
  };

  return (
    <textarea
      ref={contentRef}
      onChange={handleChangeValue}
      placeholder="게시글 입력하기"
      className="w-full h-auto text-14-400-17.5 text-black overflow-x-hidden resize-none focus:outline-none placeholder:text-grey-500"
      autoComplete="off"
      {...rest}
    />
  );
};
