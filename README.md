# 프로젝트 코드 point
추가 예정.

<br /><br /><br />

# 프로젝트 소개
### 감귤마켓 - 마켓 겸 SNS 서비스

감귤마켓 서비스는 자신의 스토어에서 판매하고 있는 상품을 등록하여 홍보할 수 있는 SNS입니다.<br />
상품을 등록하지 않아도 일상을 공유하며 즐거운 SNS 활동을 할 수 있고, 글과 사진과 함께 게시물을 작성하여 자신의 일상을 공유할 수 있습니다.<br />
다른 사용자를 팔로우하면 유저가 올린 게시물을 홈 피드에서 소식을 확인할 수도 있습니다.<br />
또한 다른 사용자와 메시지를 주고 받을 수 있습니다.<br />
피드를 구경하다가 마음에 드는 게시물을 발견했다면 좋아요를 누를 수 있고 댓글을 남기거나 공유를 할 수도 있습니다.<br />

<br />

## 개발 인원
### FE : [1인 구현]
BE : [테킷 프론트엔드 스쿨 API 사용]

<br />

## 배포링크
링크 : 배포 예정

<br />

## 개발환경  
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge)<br />
![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)<br />
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge)<br />
<img src="https://img.shields.io/badge/Zustand-orange?style=for-the-badge" /><br />
![React Query Badge](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff&style=for-the-badge)<br/>
![React Hook Form Badge](https://img.shields.io/badge/React%20Hook%20Form%20+%20Yup-EC5990?logo=reacthookform&logoColor=fff&style=for-the-badge)<br />
![Immer Badge](https://img.shields.io/badge/Immer-00E7C3?logo=immer&logoColor=000&style=for-the-badge)<br />
![Lodash Badge](https://img.shields.io/badge/Lodash-3492FF?logo=lodash&logoColor=fff&style=for-the-badge)<br />
![Axios Badge](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=for-the-badge)

<br />

## 주요 기능
- 인증
  - 로그인 / 회원가입
  - 유효성 검사
- 게시물
  - 게시물 타입 (리스트 / 앨범)
  - 페이지네이션
  - CRUD
- 유저 검색
- 채팅
  - 채팅 리스트
  - 채팅방
- 상품
  - CRUD
- 프로필
  - 로그아웃
  - 상품 등록
  - 팔로우, 팔로잉

## 폴더구조
```bash
├── 📁 _apis # api files
├── 📁 _components # global component files
├── 📁 _constants # constant files
├── 📁 _hooks # custom hook files
├── 📁 _states # client / server state files
├── 📁 _types # global type files
├── 📁 _utils # utils files
└── 📁 app
     ├── 📁 (auth)
     │    ├── 📁 (login)
     │    │    └── page.tsx # Login Page
     │    └── 📁 (signup)
     │         └── page.tsx # SignUp Page
     ├── 📁 (main)
     │    └── page.tsx # Main Page (Followed User Post List)
     ├── 📁 chat
     │    ├── 📁 list
     │    │    └── page.tsx # Chatting List Page
     │    └── 📁 room
     │            └── page.tsx # Chatting Room Page
     ├── 📁 post
     │   ├── page.tsx # Post List Page
     │   └── 📁 [id]
     │        └── page.tsx # Post Detail Page
     ├── 📁 profile
     │    └── 📁 [accountname]
     │         ├── page.tsx # Profile Info Page
     │         └── 📁 (follow)
     │              ├── 📁 follower
     │              │    └── page.tsx # Follower List Page
     │              └── 📁 following
     │                   └── page.tsx # Following List Page
     ├── 📁 search
     │    └── page.tsx # User Search Page
     └── 📁 upload
     │    ├── 📁 post
     │    │    └── page.tsx # Post Upload Page
     │    └── 📁 product
     │         └── page.tsx # Product Upload Page
     └── 📁 theme # custom tailwind theme files
```

<br />
