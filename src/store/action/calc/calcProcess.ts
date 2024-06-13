// import { Dispatch } from "redux";
// import {
//   CALC_PROCESS,
//   CalcAcitonTypes,
//   SET_NUMBER,
//   SET_OPERATION,
// } from "../../types/calaActionType";
// // import { history } from "../../../calc/types/objectType";
// import { RootState } from "../../rootReduce";
// import { setNumber } from "./setNumber";
// import { setOperation } from "../setOperation";

// export const calcProcess =
//   (inputDisplay: boolean, getState: () => RootState) =>
//   (dispatch: Dispatch<CalcAcitonTypes>): void => {
//     const state = getState();
//     const { currentNumber, currentOperation, result } = state.calc;
//     const { resultNumber, display } = result;

//     let tempResult: number = 0;
//     let tempExpression: string = 0;
//     // let temphistory: history = {};

//     if(currentNumber){
//       tempResult =
//     }
//     // if (display) {
//     //   dispatch({ type: SET_NUMBER, payload: { currentNumber: 0 } });
//     // } else {
//     //   switch (currentOperation) {
//     //     case "+":
//     //       tempResult = currentNumber + resultNumber;
//     //       tempExpression = `${currentNumber} + ${resultNumber} =`;
//     //       // temphistory = { expression: tempExpression, result: tempResult };
//     //       break;
//     //     case "−":
//     //       tempResult = currentNumber - resultNumber;
//     //       tempExpression = `${currentNumber} − ${resultNumber} =`;
//     //       // temphistory = { expression: tempExpression, result: tempResult };
//     //       break;
//     //     case "×":
//     //       tempResult = currentNumber * resultNumber;
//     //       tempExpression = `${currentNumber} × ${resultNumber} =`;
//     //       // temphistory = { expression: tempExpression, result: tempResult };
//     //       break;
//     //     case "÷":
//     //       tempResult = currentNumber / resultNumber;
//     //       tempExpression = `${currentNumber} ÷ ${resultNumber} =`;
//     //       // temphistory = { expression: tempExpression, result: tempResult };
//     //       break;
//     //   }
//     // }
//     // if (inputDisplay) {
//     //   dispatch({ type: SET_NUMBER, payload: { currentNumber: tempResult } });
//     //   dispatch(setOperation(""));
//     //   dispatch({
//     //     type: CALC_PROCESS,
//     //     payload: {
//     //       result: tempResult,
//     //       expression: tempExpression,
//     //       display: inputDisplay,
//     //     },
//     //   });
//     // }
//   };
