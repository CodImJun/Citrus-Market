import { instance } from "@/_states";
import {
  GetProductListRequest,
  GetProductListResponse,
  UploadProductRequest,
  UploadProductResponse,
} from "./product.types";

export const ProductAPI = {
  getProductList: async ({ accountname }: GetProductListRequest) => {
    const { data } = await instance.get<GetProductListResponse>(
      `/product/${accountname}`
    );
    return data.product;
  },
  uploadProduct: async ({
    itemImage,
    itemName,
    price,
    link,
  }: UploadProductRequest) => {
    const { data } = await instance.post<UploadProductResponse>("/post", {
      product: {
        itemImage,
        itemName,
        price,
        link,
      },
    });
    return data;
  },
};
