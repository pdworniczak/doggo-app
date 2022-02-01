import React from "react";

import { LoaderContainer, SpinningDots } from "./styles";

interface LoaderProps {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => (
  <>
    {isLoading && (
      <LoaderContainer>
        <SpinningDots />
      </LoaderContainer>
    )}
  </>
);
