import axios from "axios";
const uploadImagesToImgbb = async (image) => {
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    image
  );

  return data;
};

export default uploadImagesToImgbb;
