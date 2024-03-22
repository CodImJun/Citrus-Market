"use client";

import { useKeywordStore } from "@/_states";
import { useSearchUser } from "./_states";
import { usePagination } from "@/_hooks";
import Link from "next/link";
import { highlightMatch } from "./_utils";
import { ImageWithFallback } from "@/_components";

// TODO: Think about turning an event into a scrolling event
const SearchPage = () => {
  const keyword = useKeywordStore((state) => state.keyword);
  const { data: userList = [], isSuccess } = useSearchUser(keyword);
  const { paginationedList: users, handleLoadMore } = usePagination({
    data: userList,
    isSuccess,
    itemsPerPage: 5,
  });

  return (
    <>
      {keyword && (
        <>
          <ul className="flex flex-col gap-y-[1.6rem] py-[2rem] items-center">
            {users.map((item) => (
              <li key={item._id} className="list-none">
                <Link
                  href={`/profile/${item.accountname}`}
                  className="flex gap-x-[1.2rem] items-center w-[35.8rem] h-[5rem]"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt="profile image"
                    width={50}
                    height={50}
                    className="rounded-full w-[5rem] h-[5rem]"
                    fallbackSrc="/basic-profile-img.png"
                  />
                  <div className="flex flex-col gap-y-[0.6rem] flex-1">
                    <p className="text-14-500-17.5 text-black">
                      {highlightMatch(item.username, keyword)}
                    </p>
                    <p className="text-12-400-15 text-grey-700">
                      @{item.accountname}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {userList.length > users.length && (
            <button
              type="button"
              onClick={handleLoadMore}
              className="text-12-500-17.5 text-grey-700 py-[1.2rem]"
            >
              검색 결과 더보기
            </button>
          )}
        </>
      )}
    </>
  );
};

export default SearchPage;
