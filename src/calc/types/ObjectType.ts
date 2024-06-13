export interface CalaHistoryType {
  expression: string;
  result: number;
}

export interface result {
  resultNumber: number;
  expression: string;
  display: boolean;
}

export interface calc {
  currentNumber: number;
  currentOperation: string;
  result: result;
}

export interface history {
  expression: string;
  result: number;
}
