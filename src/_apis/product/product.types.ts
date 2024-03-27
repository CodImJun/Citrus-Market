import { ProductType } from "@/_types";

export type GetProductListRequest = {
  accountname: string;
};
export type GetProductListResponse = {
  data: number;
  product: ProductType[];
};

export type UploadProductRequest = Pick<
  ProductType,
  "itemImage" | "itemName" | "price" | "link"
>;
export type UploadProductResponse = {
  product: ProductType;
};
