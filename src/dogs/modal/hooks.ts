import { useState, useEffect } from "react";

import { breedsApi } from "../../api";

export const useModal = (breed: string | null) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        if (breed) {
          const [b, subb] = breed.split(" ");
          const breedRandomImageResponse = await breedsApi.getRandomBreedImage(
            b,
            subb
          );
          setBackgroundImage(breedRandomImageResponse.message);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [breed]);

  return { isLoading, backgroundImage, setBackgroundImage };
};
