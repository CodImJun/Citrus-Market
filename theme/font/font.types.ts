export type TailWindFontStyleType = Record<
  string,
  | string
  | [
      string,
      { lineHeight: string; letterSpacing?: string; fontWeight?: string }
    ]
>;
