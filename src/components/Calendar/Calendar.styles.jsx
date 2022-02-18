import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

export const CalendarContainer = styled.div`
  width: 100vw;
  height: 15vh;
  background-color: var(--main-bg-color);
  margin-left: -5vw;
`;

export const CalendarHeader = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--second-bg-color);
  height: 13vh;
  border-radius: 0 0 3rem 3rem;
  color: var(--main-text-color);
  align-items: flex-end;
  justify-content: center;
`;

export const CalendarHeaderText = styled.span`
  color: var(--main-text-color);
  text-transform: capitalize;
  font-size: 1.15rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
`;

export const CalendarHeaderArrow = styled(BsArrowLeft)`
  padding: 2rem;
  margin-top: 3rem;
  font-size: 1.25rem;
  position: absolute;
  left: 0;
  top: -2%;
`;

export const CalenderArrows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
`;

export const CalendarDays = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  width: 100%;
  margin: 2rem 0;
  padding: 1rem 0;
  justify-content: flex-start;
  overflow-x: scroll;
  flex-wrap: nowrap;
  gap: 1rem;
  --ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Days = styled.span`
  min-width: 60px;
  height: 80px;
  background-color: var(--second-bg-color);
  color: var(--main-text-color);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    margin-left: 1rem;
  }
  &:last-child {
    margin-right: 1rem;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export const DayActive = styled.span`
  background-color: #1976d2;
  min-width: 60px;
  height: 80px;
  color: var(--main-text-color);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const TodosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
`;
