import { useEffect, useState } from "react";
import { breedsApi } from "../api";
import { Modal } from "./Modal";

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [breeds, setBreeds] = useState<string[]>([]);
  useEffect(() => {
    const run = async () => {
      try {
        const breedImage = await breedsApi.getRandomImage();

        setBackgroundImage(breedImage.message);

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
      }
    };

    run();
  }, []);
  const [selectedBreed, setSelectedBreed] = useState<null | string>(null);

  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header>Doggo App</header>
      <nav>
        <ul>
          {breeds.map((breed, index) => (
            <button key={index} onClick={() => setSelectedBreed(breed)}>
              {breed}
            </button>
          ))}
        </ul>
      </nav>
      <Modal breed={selectedBreed} close={() => setSelectedBreed(null)} />
    </main>
  );
}

export default App;
