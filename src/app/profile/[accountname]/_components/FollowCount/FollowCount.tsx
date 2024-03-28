import Link from "next/link";
import { FollowCountProps } from "./FollowCount.types";

export const FollowCount = ({ type, count, accountname }: FollowCountProps) => {
  const VARIANT_TO_TYPE = type === "follower" ? "followers" : "followings";

  return (
    <Link
      href={`/profile/${accountname}/${type}`}
      className="flex flex-col gap-y-[0.6rem] items-center"
    >
      <span className="text-18-700-22.5 text-black">{count}</span>
      <span className="text-10-400-12 text-grey-700">{VARIANT_TO_TYPE}</span>
    </Link>
  );
};
