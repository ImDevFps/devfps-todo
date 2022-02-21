import React from "react";
import {
  ContactMeContainer,
  InfoContainer,
  InfoText,
  MyLink,
} from "./Info.styles";
import { SiGmail, SiWhatsapp } from "react-icons/si";
const Info = () => {
  return (
    <InfoContainer>
      <InfoText>hi i am ali tayefe (DevFps)</InfoText>
      <InfoText>
        this is a PWA task manager app(todo list) built with react-redux
      </InfoText>
      <InfoText>
        for better experience please install on your mobile device with google
        chrome
      </InfoText>
      <InfoText>
        access more apps on my personal website{" "}
        <MyLink href='https://devfps.netlify.app/'>Click here!</MyLink>
      </InfoText>
      <ContactMeContainer>
        <SiGmail color='tomato' fontSize='1.5rem' /> ali.tayefe1374@gmail.com
      </ContactMeContainer>
      <ContactMeContainer>
        <SiWhatsapp color='green' fontSize='1.5rem' />
        +98 933 6476498
      </ContactMeContainer>
    </InfoContainer>
  );
};

export default Info;
