export type SignUpRequest = {
  user: string;
  email: string;
  password: string;
  accountname: string;
  intro: string;
  image: string;
};
export type SignUpResponse = {
  message: "회원가입 성공";
  user: {
    _id: string;
    username: string;
    email: string;
    accountname: string;
    intro: string;
    image: string;
  };
};

export type LoginRequest = {
  email: string;
  password: string;
};
export type LoginResponse =
  | {
      user: {
        _id: string;
        username: string;
        email: string;
        accountname: string;
        image: string;
        token: string;
      };
    }
  | { message: string; status: 422 };

export type GetProfileResponse = {
  user: {
    _id: string;
    username: string;
    accountname: string;
    image: string;
    isfollow: boolean;
    following: string[];
    follower: string[];
    follwerCount: number;
    follwingCount: number;
  };
};

export type EmailValidRequest = string;
export type EmailValidResponse = { message: string };

export type AccountValidRequest = string;
export type AccountValidResponse = { message: string };
