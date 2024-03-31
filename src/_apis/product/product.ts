import { instance } from "@/_states";
import {
  GetProductListRequest,
  GetProductListResponse,
  UploadProductRequest,
  UploadProductResponse,
} from "./product.types";

export const ProductAPI = {
  getProductList: async ({
    accountname,
    limit,
    skip,
  }: GetProductListRequest) => {
    const { data } = await instance.get<GetProductListResponse>(
      `/product/${accountname}`,
      {
        params: {
          limit,
          skip,
        },
      }
    );
    return data.product;
  },
  uploadProduct: async ({
    itemImage,
    itemName,
    price,
    link,
  }: UploadProductRequest) => {
    const { data } = await instance.post<UploadProductResponse>("/product", {
      product: {
        itemImage,
        itemName,
        price: +price,
        link,
      },
    });
    return data;
  },
};
