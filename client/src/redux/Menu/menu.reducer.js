import { menuActionTypes } from "./menu.types";
const INITIAL_STATE = {
  show: false,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case menuActionTypes.TOGGLE_MENU:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};

export default menuReducer;
