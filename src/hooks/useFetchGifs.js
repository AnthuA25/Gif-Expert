import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  // resumir en un customHook
  const [images, setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // sirve para disparar efectos secundarios
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
