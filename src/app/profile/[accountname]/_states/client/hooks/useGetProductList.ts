import { ProductAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { useQuery } from "@tanstack/react-query";

export const useGetProductList = (accountname: string) => {
  return useQuery({
    queryKey: [queryKeys.product, accountname],
    queryFn: () => ProductAPI.getProductList({ accountname }),
  });
};
