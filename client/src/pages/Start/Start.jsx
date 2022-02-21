import React from "react";
import { connect } from "react-redux";
import { InitiateApp } from "./../../redux/Start/start.actions";
import {
  StartContainer,
  StartImg,
  StartTitle,
  StartDescription,
  StartButton,
} from "./Start.styles";

const Start = ({ InitiateApp }) => {
  return (
    <StartContainer>
      <StartImg src='./todo.png' />
      <StartTitle>Smart Task Management</StartTitle>
      <StartDescription>
        this tool designed to help you mange your tasks easy. please use it on
        mobile devices
      </StartDescription>
      <StartButton onClick={InitiateApp}>Get Started</StartButton>
    </StartContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  InitiateApp: () => dispatch(InitiateApp()),
});

export default connect(null, mapDispatchToProps)(Start);
