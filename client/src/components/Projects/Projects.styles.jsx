import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const ProjectsTitle = styled.span`
  text-align: left;
  font-size: 1.25rem;
  flex: 100%;
`;

export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex: 38%;
  background-color: var(--second-bg-color);
  border-radius: 10px;
  height: 170px;
  padding: 1rem;
  gap: 10px;
`;

export const CircularProgressBar = styled(CircularProgress)`
  position: absolute;
  color: #37373a !important;
  bottom: -1rem;
`;

export const ProjectsTitleSpan = styled.span`
  color: grey;
  text-transform: uppercase;
  font-size: small;
`;

export const ProjectsSubject = styled.span`
  color: var(--main-text-color);
  font-size: 1rem;
  text-transform: capitalize;
  text-align: left;
  max-width: 80%;
  height: 2.75rem;
  line-height: 1.35rem;
  overflow: hidden;
`;

export const ProjectsDate1 = styled.span`
  color: #ea6262;
  font-size: 0.65rem;
  background-color: #8e434338;
  padding: 0.5rem 0.75rem;
  border-radius: 1.5rem;
  text-transform: uppercase;
`;

export const ProjectsDate2 = styled.span`
  color: cyan;
  font-size: 0.65rem;
  background-color: #64969652;
  padding: 0.5rem 0.75rem;
  border-radius: 1.5rem;
  text-transform: uppercase;
`;
