import React from "react";

import { Modal } from "./modal";
import { Loader } from "./loader";
import { useBreeds } from "./hooks";
import { Main, Header, Navigation, Button, ButtonTop, H1 } from "./styles";

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
              <Button key={index} onClick={() => setSelectedBreed(breed)}>
                {breed}
              </Button>
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
