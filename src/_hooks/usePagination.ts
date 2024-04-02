"use client";

import { UseQueryResult } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type UsePaginationProps<T> = {
  data: T[];
  isSuccess: UseQueryResult["isSuccess"];
  itemsPerPage: number;
};

export const usePagination = <T>({
  data,
  isSuccess,
  itemsPerPage,
}: UsePaginationProps<T>) => {
  const [paginationedList, setPaginationedList] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    isSuccess && setPaginationedList(data.slice(0, itemsPerPage));
  }, [data, isSuccess, itemsPerPage]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;

    setCurrentPage(nextPage);
    setPaginationedList((prevList) => [
      ...prevList,
      ...data.slice(
        nextPage * itemsPerPage,
        nextPage * itemsPerPage + itemsPerPage
      ),
    ]);
  };

  return { paginationedList, handleLoadMore };
};
