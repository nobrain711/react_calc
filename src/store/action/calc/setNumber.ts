import { Dispatch } from "redux";
import { CalcAcitonTypes, SET_NUMBER } from "../../types/calaActionType";
import { RootState } from "../../rootReduce";
import { ThunkAction } from "redux-thunk";

export const setNumber = (
  inputNumber: number
): ThunkAction<void, RootState, unknown, CalcAcitonTypes> => {
  return (
    dispatch: Dispatch<CalcAcitonTypes>,
    getState: () => RootState
  ): void => {
    const state = getState();
    const { currentNumber } = state.calc;
    setTimeout(() => {
      dispatch({
        type: SET_NUMBER,
        payload: {
          currentNumber: currentNumber
            ? currentNumber * 10 + inputNumber
            : inputNumber,
        },
      });
    });
  };
};
