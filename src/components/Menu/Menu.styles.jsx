import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  z-index: 100;
  height: 100vh;
  background-color: #38484c;
  width: 70vw;
  gap: 1rem;
  flex-wrap: wrap;
  left: ${({ showMenu }) => (showMenu ? "0" : "-70vw")};
  transition: left 0.35s ease-in;
`;

export const EmptyBlock = styled.div`
  padding: 1.75rem 1.75rem 0 1.5rem;
  height: 4vh;
  display: flex;
  align-items: center;
  font-size: 2rem;

  span {
    font-size: 1.25rem;
    margin-left: 0.5rem;
  }
`;

export const MenuItems = styled.div`
  padding: 0.5rem 1.75rem;
  display: flex;
  align-items: center;
  font-size: 1.15rem;
`;

export const Items = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: capitalize;
`;

export const CopyRight = styled.div`
  padding: 1rem 0;
  margin-top: auto;
  width: 100%;
`;
