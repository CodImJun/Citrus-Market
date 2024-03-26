import { RefObject } from "react";

export const resizeElementByInput = (elementRef: RefObject<HTMLElement>) => {
  const element = elementRef.current;

  if (element) {
    element.style.height = "inherit";
    element.style.height = `${element.scrollHeight / 10}rem`;
  }
};
