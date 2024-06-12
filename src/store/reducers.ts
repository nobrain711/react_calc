import { calc } from "../calc/types/ObjectType";
import { CALC_PROCESS, SET_NUMBER, SET_OPERATION } from "./types/Types";
import { CalcActionTypes } from "./action/action";

const initialState: calc = {
  number: 0,
  operation: "",
  result: {
    resultNumber: 0,
    expression: "",
    display: false,
  },
};

export const calcReducer = (
  state = initialState,
  action = calcActionTypes
): calc => {
  switch (action.type) {
    case SET_NUMBER:
      return { ...state, number: action.payload };

    case SET_OPERATION:
      return {
        ...state,
        operation: String.fromCharCode(parseInt(action.payload, 16)),
      };
    case CALC_PROCESS:
      return {
        ...state,
        number: 0,
        operation: "",
        result: {
          resultNumber: action.payload,
          expression: action.payload,
          display: action.payload,
        },
      };

    default:
      return state;
  }
};
