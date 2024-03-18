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
        refreshToken: string;
      };
    }
  | {
      message: string;
      status: number;
    };

export type SignUpRequest = {
  image?: string;
  intro?: string;
  email: string;
  password: string;
  accountname: string;
  username: string;
};
export type SignUpResponse = {
  message: string;
  user: {
    __id: string;
    username: string;
    email: string;
    accountname: string;
    intro: string;
    image: string;
  };
};
