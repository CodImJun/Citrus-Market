"use client";

import {
  FormInput,
  Header,
  ImageUploadButton,
  MainLayout,
} from "@/_components";
import { useEditProfileForm } from "./_hooks";
import { useUploadImage } from "@/_hooks";
import { useAuthStore } from "@/_states";

const EditProfilePage = () => {
  const image = useAuthStore((state) => state.loginInfo.image);
  const {
    isValid,
    setValue,
    imageRegister,
    usernameRegister,
    accountnameRegister,
    introRegister,
    handleUpdateProfile,
  } = useEditProfileForm();

  const { images, handleChangeImage } = useUploadImage({
    setValue,
  });

  return (
    <>
      <Header isValid={!isValid} uploadEvent={handleUpdateProfile} />
      <MainLayout>
        <form className="flex flex-col w-full gap-y-[1.4rem] mb-[2rem] px-[3.4rem] py-[3rem]">
          <div
            className="relative w-[11rem] h-[11rem] rounded-full m-auto mb-[1.4rem]"
            style={{
              backgroundImage: images[0]
                ? `url(${images[0].imageUrl})`
                : `url(${process.env.NEXT_PUBLIC_API_URL}/${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <ImageUploadButton
              position="right-0 bottom-0"
              {...Object.assign(imageRegister, {
                ...imageRegister,
                onChange: handleChangeImage,
              })}
            />
          </div>
          <FormInput
            type="username"
            labelName="username"
            {...usernameRegister}
          />
          <FormInput
            type="accountname"
            labelName="accountname"
            {...accountnameRegister}
          />
          <FormInput
            type="introduce"
            labelName="introduce"
            {...introRegister}
          />
        </form>
      </MainLayout>
    </>
  );
};

export default EditProfilePage;
