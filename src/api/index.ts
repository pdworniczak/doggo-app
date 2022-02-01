console.log("Init api");

type SUCCESS = "success";
type ERROR = "error";
type STATUS = SUCCESS | ERROR;

interface BaseResponse {
  status: STATUS;
}
export interface BreedList extends BaseResponse {
  message: Record<string, string[]>;
}
interface BreedImage extends BaseResponse {
  message: string;
}
interface BreedImages extends BaseResponse {
  message: string;
}

const BREEADS_URL = "https://dog.ceo";

const get = async <T>(path: string): Promise<T> => {
  const response = await fetch(
    new URL(concatPaths("/api/", path), BREEADS_URL).toString()
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

export const concatPaths = (path1: string, path2: string) =>
  path1
    .split("/")
    .concat(path2.split("/"))
    .filter((v) => v !== "")
    .join("/");

// 'https://dog.ceo/api/breeds/image/random'
// 'https://dog.ceo/api/breed/hound/images'
// 'https://dog.ceo/api/breed/terrier/westhighland/images/random'

export const breedsApi = {
  getBreedList() {
    return get<BreedList>("breeds/list/all");
  },

  getRandomImage() {
    return get<BreedImage>("breeds/image/random");
  },

  // getBreedImages(breedName: string) {
  //     return get<BreedImages>('breed/hound/images')
  // },

  getRandomBreedImage(breed: string, subreed = "") {
    const breedPath = concatPaths("breed", `${breed}/${subreed}`);

    return get<BreedImage>(concatPaths(breedPath, "images/random"));
  },
};
