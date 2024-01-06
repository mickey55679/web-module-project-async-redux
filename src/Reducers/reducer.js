import { SET_ERROR, SET_JOKE } from "../actions/Jokes";
const initialState = {
  joke: "",
  error: "",
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOKE:
      return {
        ...state,
        joke: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
