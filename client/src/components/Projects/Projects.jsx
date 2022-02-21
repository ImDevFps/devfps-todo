import React from "react";
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsSection,
  ProjectsTitleSpan,
  ProjectsSubject,
  ProjectsDate1,
  ProjectsDate2,
} from "./Projects.styles";
import { CircularProgressBar } from "./Projects.styles";
import Box from "@mui/material/Box";

const Projects = ({ todos }) => {
  const options = { weekday: "short" };
  const today = new Date().toLocaleDateString("en-us", options);

  const projects = todos
    .filter((item) => item.complete === false)
    .sort(function (a, b) {
      return (
        Math.floor(new Date(a.date).getTime() / 1000) -
        Math.floor(new Date(b.date).getTime() / 1000)
      );
    });
  const meetings = projects.filter((item) => item.category === "meeting");
  const trips = projects.filter((item) => item.category === "trip");
  const inboxs = projects.filter((item) => item.category === "inbox");

  const weekDayFunc = (date) => {
    return new Date(date).toLocaleDateString("en-us", options) === today
      ? "today"
      : new Date(date).toLocaleDateString("en-us", options);
  };

  const projectProgress = (date) => {
    const tenDays = 86400 * 10;
    const remainingTime = Math.floor(
      (new Date(date).setHours(23, 59, 59) - new Date()) / 1000
    );
    const percentage = 100 - Math.floor((remainingTime / tenDays) * 100);

    return percentage >= 100 ? 100 : percentage;
  };

  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsSection>
        <Box sx={{ position: "relative", marginBottom: "1.5rem" }}>
          <CircularProgressBar variant='determinate' value={100} size={40} />
          <CircularProgressBar
            variant='determinate'
            sx={{ color: "#FF7A00 !important" }}
            value={
              meetings.length > 0
                ? projectProgress(meetings[0].date)
                : inboxs.length > 0
                ? projectProgress(inboxs[0].date)
                : 100
            }
          />
        </Box>

        <ProjectsTitleSpan>
          {meetings.length > 0 ? "meeting" : inboxs.length > 0 ? "inboxs" : ""}
        </ProjectsTitleSpan>
        <ProjectsSubject>
          {meetings.length > 0
            ? meetings[0].title
            : inboxs.length > 0
            ? inboxs[0].title
            : ""}
        </ProjectsSubject>
        <ProjectsDate1>
          {meetings.length > 0
            ? weekDayFunc(meetings[0].date)
            : inboxs.length > 0
            ? weekDayFunc(inboxs[0].date)
            : "no date"}
        </ProjectsDate1>
      </ProjectsSection>
      <ProjectsSection>
        <Box sx={{ position: "relative", marginBottom: "1.5rem" }}>
          <CircularProgressBar variant='determinate' value={100} />
          <CircularProgressBar
            variant='determinate'
            sx={{ color: "cyan !important" }}
            value={
              trips.length > 0
                ? projectProgress(trips[0].date)
                : inboxs.length > 0
                ? projectProgress(inboxs[0].date)
                : 100
            }
          />
        </Box>

        <ProjectsTitleSpan>
          {trips.length > 0 ? "trips" : inboxs.length > 0 ? "inboxs" : ""}
        </ProjectsTitleSpan>
        <ProjectsSubject>
          {trips.length > 0
            ? trips[0].title
            : inboxs.length > 0
            ? inboxs[0].title
            : ""}
        </ProjectsSubject>
        <ProjectsDate2>
          {trips.length > 0
            ? weekDayFunc(trips[0].date)
            : inboxs.length > 0
            ? weekDayFunc(inboxs[0].date)
            : "no date"}
        </ProjectsDate2>
      </ProjectsSection>
    </ProjectsContainer>
  );
};

export default Projects;
