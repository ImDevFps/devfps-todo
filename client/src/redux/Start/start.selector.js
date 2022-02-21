import { createSelector } from "reselect";

const selectStarted = (state) => state.start;

export const IsFirstTimeRun = createSelector(
  [selectStarted],
  (firstTime) => firstTime.started
);
