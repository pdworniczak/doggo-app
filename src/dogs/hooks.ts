import { useEffect, useState } from "react";

import { breedsApi } from "../api";

export const useBreeds = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const run = async () => {
      try {
        setIsLoading(true);
        const breedListResponse = await breedsApi.getBreedList();
        const breeds = Object.entries(breedListResponse.message).reduce<
          string[]
        >(
          (acc, [breed, subbreeds]) =>
            subbreeds.length
              ? [
                  ...acc,
                  ...subbreeds.map(
                    (subbreed: string) => `${breed} ${subbreed}`
                  ),
                ]
              : [...acc, breed],
          []
        );
        setBreeds(breeds);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    run();
  }, []);

  return { isLoading, breeds, selectedBreed, setSelectedBreed };
};
