import React from "react";
import {
  CircularContainer,
  CircularProgressBar1,
  CircularProgressBar2,
  CircularProgressBar3,
  ProgressContainer,
  TitleContainer,
  ProgressSpan1,
  ProgressSpan2,
  ProgressSpan3,
  ProgressPercentage,
} from "./Progress.styles";

const Progress = ({ todos }) => {
  const meetings = todos.filter((todo) => todo.category === "meeting" && todo);
  const inboxs = todos.filter((todo) => todo.category === "inbox" && todo);
  const trips = todos.filter((todo) => todo.category === "trip" && todo);

  const completeTodos = (obj) => {
    const completed = Math.floor(
      (obj.filter((todo) => todo.complete === true && todo).length /
        obj.length) *
        100
    );

    return completed;
  };

  const completeMeetings = completeTodos(meetings);

  const completeInboxs = completeTodos(inboxs);

  const completeTrips = completeTodos(trips);

  return (
    <ProgressContainer>
      <CircularContainer>
        <CircularProgressBar1
          variant='determinate'
          value={100}
          sx={{ color: "rgb(55, 55, 58)" }}
          thickness={1.5}
          size={135}
        />
        <CircularProgressBar1
          variant='determinate'
          value={completeInboxs ? completeInboxs : 0}
          size={140}
          thickness={3}
        />
        <CircularProgressBar1
          variant='determinate'
          value={100}
          sx={{ color: "rgb(55, 55, 58)" }}
          thickness={1.5}
          size={100}
        />
        <CircularProgressBar2
          variant='determinate'
          value={completeMeetings ? completeMeetings : 0}
          size={105}
          thickness={3}
        />
        <CircularProgressBar1
          variant='determinate'
          value={100}
          sx={{ color: "rgb(55, 55, 58)" }}
          thickness={1.5}
          size={70}
        />
        <CircularProgressBar3
          variant='determinate'
          value={completeTrips ? completeTrips : 0}
          size={75}
          thickness={3}
        />
      </CircularContainer>
      <TitleContainer>
        <ProgressSpan1>
          inbox{" "}
          <ProgressPercentage>
            {completeInboxs ? completeInboxs : 0}%
          </ProgressPercentage>
        </ProgressSpan1>
        <ProgressSpan2>
          meeting{" "}
          <ProgressPercentage>
            {completeMeetings ? completeMeetings : 0}%
          </ProgressPercentage>
        </ProgressSpan2>
        <ProgressSpan3>
          trip
          <ProgressPercentage>
            {completeTrips ? completeTrips : 0}%
          </ProgressPercentage>
        </ProgressSpan3>
      </TitleContainer>
    </ProgressContainer>
  );
};

export default Progress;
