export const SET_NUMBER = "SET_NUMBER";
export const SET_OPERATION = "SET_OPERATION";
export const CALC_PROCESS = "CALC_PROCESS";
export const CLEAR = "CLAER";
export const CLEAR_ENTER = "CLEAR_ENTER";
export const BACK_SPACE = "BACK_SPACE";

interface setNumberAciton {
  type: typeof SET_NUMBER;
  payload: {
    currentNumber: number;
  };
}

interface setOperationAciton {
  type: typeof SET_OPERATION;
  payload: {
    operation: string;
  };
}

interface calcProcessAciton {
  type: typeof CALC_PROCESS;
  payload: {
    result: number;
    expression: string;
    display: boolean;
  };
}

interface clearAciton {
  type: typeof CLEAR;
}

interface clearEnterAciton {
  type: typeof CLEAR_ENTER;
}

interface backSpaceAciton {
  type: typeof BACK_SPACE;
  payload: {
    currentNumber: number;
  };
}

export type CalcAcitonTypes =
  | setNumberAciton
  | setOperationAciton
  | calcProcessAciton
  | clearAciton
  | clearEnterAciton
  | backSpaceAciton;
