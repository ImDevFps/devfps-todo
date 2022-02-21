import styled from "styled-components";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const TasksHeader = styled.span`
  font-size: 1rem;
  text-transform: capitalize;
  text-align: left;
  flex: 100%;
`;

export const TasksBody = styled.div`
  background-color: var(--second-bg-color);
  border-radius: 1rem;
  padding: 0.5rem;
  flex: 100%;
  text-align: left;
  display: flex;
`;

export const AddButton = styled(AddCircleOutlinedIcon)`
  position: fixed;
  bottom: 10vh;
  transform: translateX(-50%);
  left: 50%;
  font-size: 3rem !important;
`;

export const TaskCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
