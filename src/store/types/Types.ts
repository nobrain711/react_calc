export const SET_NUMBER = "SET_NUMBER";
export const SET_OPERATION = "SET_OPERATION";
export const CALC_PROCESS = "CALC_PROCESS";
export const CLEAR = "CLAER";
export const CLEAR_ENTER = "CLEAR_ENTER";
export const BACK_SPACE = "BACK_SPACE";

export interface result {
  resultNumber: number;
  exprssion: string;
  display: boolean;
}

export interface calc {
  number: number;
  operation: string;
  result: result;
}
