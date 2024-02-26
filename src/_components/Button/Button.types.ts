type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  w: `w-${string}`;
  children: React.PropsWithChildren;
};

type ButtonActiveProps = ButtonBaseProps & {
  size: "M" | "S";
  active: boolean;
};

type ButtonInactiveProps = ButtonBaseProps & {
  size: "L" | "MS";
};

export type ButtonProps = ButtonActiveProps | ButtonInactiveProps;
