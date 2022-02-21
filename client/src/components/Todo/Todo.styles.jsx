import styled from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  background-color: var(--second-bg-color);
  flex: 100%;
  padding: 2rem;
  border-radius: 0.25rem 1rem 1rem 0.25rem;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const TodoSpan = styled.span`
  flex: 100%;
  text-align: left;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
`;
