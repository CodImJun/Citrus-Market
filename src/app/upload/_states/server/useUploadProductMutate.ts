import {
  ProductAPI,
  UploadProductRequest,
  UploadProductResponse,
} from "@/_apis";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useUploadProductMutate = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: UploadProductRequest) => ProductAPI.uploadProduct(data),
    onError: (data: UploadProductResponse) => console.error(data),
    onSettled: () => {},
    onSuccess: () => {
      alert("상품 등록 성공!");
      router.back();
    },
  });
};
