import styled from "styled-components";
import { COLORS } from "./colors";

export const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 80px;
  font-weight: 100;
  text-transform: uppercase;
  color: ${COLORS.PRIMARY};
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 400;
  text-transform: capitalize;
  margin: 0;
  margin-top: 20px;
  color: ${COLORS.PRIMARY};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.SECONDARY};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 50px;
  height: 400px;
  width: fill-available;
  text-align: center;
  background: #fff;
  background-image: url("https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
  background-position: center -100px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 100px 0;
  min-height: 300px;
`;

export const ButtonNavigation = styled.button`
  align-items: center;
  background-color: ${COLORS.PRIMARY};
  margin: 5px;
  border: 0;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 300;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  text-align: center;
  touch-action: manipulation;
  text-transform: capitalize;

  :hover,
  :focus {
    background-color: ${COLORS.PRIMARY_DARK};
    color: #ffffff;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: inherit;
  border: 0;
  margin: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 900;
`;

export const ButtonTop = styled.a`
  position: sticky;
  bottom: 30px;
  align-self: flex-end;
  margin: 30px;
  width: 40px;
  height: 40px;
  background: ${COLORS.PRIMARY};
  color: ${COLORS.TEXT};
  text-decoration: none;
  line-height: 40px;
  text-align: center;

  :hover {
    background: ${COLORS.PRIMARY_DARK};
  }
`;
