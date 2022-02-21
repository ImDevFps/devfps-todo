import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;

export const InfoText = styled.span`
  width: 100%;
  text-align: left;
  text-transform: capitalize;
  line-height: 2rem;
`;

export const MyLink = styled.a`
  color: white;
  all: unset;
  cursor: pointer;
  background-color: tomato;
  padding: 0.5rem;
  border-radius: 0.25rem;
`;

export const ContactMeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
