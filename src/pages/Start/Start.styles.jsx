import styled from "styled-components";

export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

export const StartTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: capitalize;
  text-align: start;
  margin-bottom: 20px;
`;

export const StartImg = styled.img`
  width: auto;
  max-height: 55vh;
  /* margin: 5vw; */
`;

export const StartDescription = styled.div`
  font-size: 1rem;
  text-transform: capitalize;
  text-align: start;
`;

export const StartButton = styled.button`
  background-image: linear-gradient(to right, #2f80ed, #2948ff);
  width: 100%;
  border: none;
  outline: none;
  height: 5vh;
  border-radius: 14px;
  color: white;
  font-size: 1.25rem;
`;
