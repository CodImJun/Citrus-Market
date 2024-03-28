export const NAV_ITEMS = [
  {
    path: "/",
    icon: "/icon-home.png",
    iconActive: "/icon-home-fill.png",
    label: "홈",
  },
  {
    path: "/chat",
    icon: "/icon-message-circle.png",
    label: "채팅",
  },
  {
    path: "/upload/post",
    icon: "/icon-edit.png",
    label: "게시물 작성",
  },
  {
    getPath: (accountname: string) => `/profile/${accountname}`,
    icon: "/icon-user.png",
    iconActive: "/icon-user-fill.png",
    label: "프로필",
    isProfile: true,
  },
];
