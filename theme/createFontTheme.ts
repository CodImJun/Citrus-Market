import { FONT, TailWindFontStyleType } from "./font";

export const createFontTheme = (): TailWindFontStyleType => {
  return FONT.reduce((acc, style) => {
    const [size, weight, lineHeight] = style.split("-");

    acc[style] = [
      `${Number(size) / 10}rem`,
      {
        lineHeight: `${Number(lineHeight) / 10}rem`,
        fontWeight: weight,
      },
    ];

    return acc;
  }, {} as TailWindFontStyleType);
};
