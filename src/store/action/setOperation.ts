import { Dispatch } from "redux";
import { CalcAcitonTypes, SET_OPERATION } from "../types/calaActionType";
import { calcProcess } from "./calc/calcProcess";

export const setOperation =
  (inputOperation: string) =>
  (dispatch: Dispatch<CalcAcitonTypes>): void => {
    if (inputOperation === "003D") {
      dispatch(calcProcess(true));
    } else {
      dispatch({
        type: SET_OPERATION,
        payload: {
          operation: String.fromCharCode(parseInt(inputOperation, 16)),
        },
      });
    }
  };
