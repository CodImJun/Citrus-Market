import * as Yup from "yup";

const itemImage = Yup.string().required();
const itemName = Yup.string().required();
const price = Yup.number().required();
const link = Yup.string().required();

export const UPLOAD_SCHEMA = {
  product: Yup.object().shape({
    itemImage,
    itemName,
    price,
    link,
  }),
};
