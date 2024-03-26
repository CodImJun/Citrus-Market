import * as Yup from "yup";

const itemImage = Yup.mixed()
  .nullable()
  .test("", (value: any) => (value.length === 0 ? false : true));

const itemName = Yup.string().required();
const price = Yup.number().required();
const link = Yup.string().required();
const content = Yup.string().required();

export const UPLOAD_SCHEMA = {
  product: Yup.object().shape({
    itemImage,
    itemName,
    price,
    link,
  }),
  post: Yup.object().shape({
    image: itemImage,
    content,
  }),
};
