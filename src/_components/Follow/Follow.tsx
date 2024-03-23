import { FollowProps } from "./Follow.types";

export const Follow = ({ type, count }: FollowProps) => {
  const VARIANT_TO_TYPE = type === "follower" ? "followers" : "followings";

  return (
    <div className="flex flex-col gap-y-[0.6rem] items-center">
      <span className="text-18-700-22.5 text-black">{count}</span>
      <span className="text-10-400-12 text-grey-700">{VARIANT_TO_TYPE}</span>
    </div>
  );
};
