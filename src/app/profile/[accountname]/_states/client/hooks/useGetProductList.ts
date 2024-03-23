import { ProductAPI } from "@/_apis";
import { useQuery } from "@tanstack/react-query";

export const useGetProductList = (accountname: string) => {
  return useQuery({
    queryKey: [],
    queryFn: () => ProductAPI.getProductList({ accountname }),
  });
};
