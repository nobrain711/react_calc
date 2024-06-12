import {
  BACK_SPACE,
  CALC_PROCESS,
  CLEAR,
  CLEAR_ENTER,
  SET_NUMBER,
  SET_OPERATION,
} from "../types/Types";

interface setNumber {
  type: typeof SET_NUMBER;
  payload: number;
}

interface setOperation {
  type: typeof SET_OPERATION;
  payload: string;
}

interface calcProcess {
  type: typeof CALC_PROCESS;
}

interface clear {
  type: typeof CLEAR;
}

interface clearEnter {
  type: typeof CLEAR_ENTER;
}

interface backSpace {
  type: typeof BACK_SPACE;
}

export type CalcActionTypes =
  | setNumber
  | setOperation
  | calcProcess
  | clear
  | clearEnter
  | backSpace;
