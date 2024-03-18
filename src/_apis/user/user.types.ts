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
