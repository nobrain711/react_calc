import { calc } from "../calc/types/objectType";
import {
  BACK_SPACE,
  CALC_PROCESS,
  CLEAR,
  CLEAR_ENTER,
  SET_NUMBER,
  SET_OPERATION,
  CalcAcitonTypes,
} from "./types/calaActionType";

const initialState: calc = {
  currentNumber: 0,
  currentOperation: "",
  result: {
    resultNumber: 0,
    expression: "",
    display: false,
  },
};

export const calcReducer = (
  state: calc = initialState,
  action: CalcAcitonTypes
): calc => {
  switch (action.type) {
    case SET_NUMBER:
      return { ...state, currentNumber: action.payload.currentNumber };

    case SET_OPERATION:
      return {
        ...state,
        currentOperation: String.fromCharCode(
          parseInt(action.payload.operation, 16)
        ),
      };
    case CALC_PROCESS:
      return {
        ...state,
        currentNumber: 0,
        currentOperation: "",
        result: {
          resultNumber: action.payload.result,
          expression: action.payload.expression,
          display: action.payload.display,
        },
      };

    case CLEAR:
      return {
        ...state,
        currentNumber: 0,
      };

    case CLEAR_ENTER:
      return initialState;

    case BACK_SPACE:
      return {
        ...state,
        currentNumber: action.payload.currentNumber,
      };

    default:
      return state;
  }
};
