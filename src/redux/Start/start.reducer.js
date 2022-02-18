import { StartActionTypes } from "./start.type";
const INITIAL_STATE = {
  started: false,
};

const StartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StartActionTypes.INITIATE_APP:
      return {
        ...state,
        started: true,
      };
    default:
      return state;
  }
};

export default StartReducer;
