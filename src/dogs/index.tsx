import React from "react";

import { Modal } from "./modal";
import { Loader } from "./loader";
import { useBreeds } from "./hooks";
import {
  Main,
  Header,
  Navigation,
  ButtonNavigation,
  ButtonTop,
  H1,
} from "./styles";

function App() {
  const { isLoading, breeds, selectedBreed, setSelectedBreed } = useBreeds();

  return (
    <Main>
      <Header>
        <H1>
          <span>Doggo</span>
          <span>App</span>{" "}
        </H1>
      </Header>
      <>
        <Navigation>
          {!isLoading &&
            breeds.map((breed, index) => (
              <ButtonNavigation
                key={index}
                onClick={() => setSelectedBreed(breed)}
              >
                {breed}
              </ButtonNavigation>
            ))}
          <Loader isLoading={isLoading}></Loader>
        </Navigation>
        <Modal breed={selectedBreed} close={() => setSelectedBreed(null)} />
        <ButtonTop href="#top">TOP</ButtonTop>
      </>
    </Main>
  );
}

export default App;
