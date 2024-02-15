import Image from "next/image";

export const MoreIcon = () => {
  return (
    <button>
      <Image
        src="/icon-more-vertical.png"
        alt="더보기 아이콘"
        width={24}
        height={24}
        priority
      />
    </button>
  );
};
