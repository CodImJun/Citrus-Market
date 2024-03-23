import { instance } from "@/_states";
import { GetProductListRequest, GetProductListResponse } from "./product.types";

export const ProductAPI = {
  getProductList: async ({ accountname }: GetProductListRequest) => {
    const { data } = await instance.get<GetProductListResponse>(
      `/product/${accountname}`
    );
    return data.product;
  },
};
