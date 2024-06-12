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
  number: number;
  operation: string;
  result: result;
}
