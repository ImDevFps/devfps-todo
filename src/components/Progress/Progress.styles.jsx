import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20vh;
  background-color: var(--second-bg-color);
  border-radius: 15px;
`;

export const CircularContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const CircularProgressBar1 = styled(CircularProgress)`
  position: absolute;
`;

export const CircularProgressBar2 = styled(CircularProgress)`
  position: absolute;
  color: #ff7a00 !important;
`;

export const CircularProgressBar3 = styled(CircularProgress)`
  position: absolute;
  color: cyan !important;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 40%;
  height: 100%;
  text-transform: capitalize;
  margin: 0 5%;
`;

export const ProgressSpan1 = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;

  &:before {
    content: "•";
    color: #1976d2;
    font-weight: bold;
    display: inline-block;
    width: 20%;
    margin-left: -15%;
    font-size: 2em;
  }
`;

export const ProgressSpan2 = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;

  &:before {
    content: "•";
    color: #ff7a00;
    font-weight: bold;
    display: inline-block;
    width: 20%;
    margin-left: -15%;
    font-size: 2em;
  }
`;

export const ProgressSpan3 = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;

  &:before {
    content: "•";
    color: cyan;
    font-weight: bold;
    display: inline-block;
    width: 20%;
    margin-left: -15%;
    font-size: 2em;
  }
`;

export const ProgressPercentage = styled.span`
  color: grey;
  margin-left: auto;
`;
