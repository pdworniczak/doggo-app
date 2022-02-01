import styled from "styled-components";
import { COLORS } from "../colors";

interface ModalContentProps {
  backgroundImage: string;
}

interface ModalContainerProps {
  isVisible: boolean;
}

export const ModalBox = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  min-width: 300px;
  height: 80%;
  width: 80%;
  top: 50px;
  box-shadow: 0px 0px 10px ${COLORS.SHADOW};
  background: ${COLORS.SECONDARY};
`;

export const ModalContent = styled.div<ModalContentProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: ${COLORS.TEXT};
  text-align: center;
  background: #fff;
`;
