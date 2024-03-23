import { instance } from "@/_states";
import {
  GetPersonalProfileRequest,
  GetPersonalProfileResponse,
} from "./profile.types";

export const ProfileAPI = {
  getPersonalProfile: async ({ accountname }: GetPersonalProfileRequest) => {
    const { data } = await instance.get<GetPersonalProfileResponse>(
      `/profile/${accountname}`
    );
    return data.profile;
  },
};
