import React from "react";

import { useModal } from "./hooks";
import { ModalContainer, ModalBox, ModalHeader, ModalContent } from "./styles";
import { H2, Button, ButtonClose } from "../styles";
import { Loader } from "../loader";

interface ModalProps {
  breed: null | string;
  close: () => void;
}

export const Modal = ({ breed, close }: ModalProps) => {
  const { isLoading, backgroundImage, setBackgroundImage, getNext } =
    useModal(breed);

  return (
    <ModalContainer isVisible={breed != null}>
      <ModalBox>
        <ButtonClose
          onClick={() => {
            close();
            setBackgroundImage("");
          }}
        >
          x
        </ButtonClose>
        <ModalHeader>
          <H2>{breed}</H2>
        </ModalHeader>
        <Loader isLoading={isLoading} />
        {backgroundImage && (
          <ModalContent backgroundImage={backgroundImage}>
            <Button onClick={getNext}>Next</Button>
          </ModalContent>
        )}
      </ModalBox>
    </ModalContainer>
  );
};
