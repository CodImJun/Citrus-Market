import { UserType } from "./user";

export type ProductType = {
  id: string;
  itemImage: string;
  itemName: string;
  price: number;
  link: string;
  author: UserType;
};
