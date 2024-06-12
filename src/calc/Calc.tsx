import { Typography } from "@mui/material";
import { memo, useCallback, useEffect, useState } from "react";
import { CalcButton } from "./CalcButton";
import { CalcHistory } from "./CalcHistory";
import { CalaHistoryType } from "./types/ObjectType";

const Calc = memo((() => {
    const [number, setNumber] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [operation, setOperation] = useState<string>('');
    const [displayEquals, setDisplayEquals] = useState<boolean>(false);
    const [history, setHistory] = useState<CalaHistoryType>({});
    const [histories, setHistories] = useState<CalaHistoryType[]>([]);

    // const getDigitCount = useCallback((checkNumber: number): boolean => {
    //     return Math.abs(checkNumber).toString().length < 7 ? true : false;
    // }, []);

    const handleEventAC = useCallback(() => {
        setNumber(0);
    }, []);

    const handleEventClear = useCallback(() => {
        setNumber(0);
        setResult(0);
        setOperation('');
    }, []);

    const handleSetOperation = useCallback((inputOperation: string) => {
        if (result === 0) {
            setResult(number);
            setNumber(0);

            console.log('not input: =');
            const unicodeString = `\\u${inputOperation}`;
            const unicodeChar = JSON.parse(`"${unicodeString}"`);
            setOperation(unicodeChar);
            setDisplayEquals(false);
        } else {
            let tempResult: number = 0;
            let tempExprssion: string = '';
            let tempHistory: CalaHistoryType = {
                expression: tempExprssion,
                result: tempResult
            };

            switch (operation) {
                case '+':
                    console.log(`plus: ${result + number}`);
                    tempResult = result + number;
                    tempExprssion = `${result} + ${number} =`;
                    tempHistory = {
                        expression: tempExprssion,
                        result: tempResult
                    };
                    break;

                case '-':
                    console.log(`sub: ${operation}`);
                    tempResult = result - number;
                    tempExprssion = `${result} - ${number} =`;
                    tempHistory = {
                        expression: tempExprssion,
                        result: tempResult
                    };
                    break;

                case '×':
                    console.log(`mul: ${result * number}`);
                    tempResult = result * number;
                    tempExprssion = `${result} × ${number} =`;
                    tempHistory = {
                        expression: tempExprssion,
                        result: tempResult
                    };
                    break;

                case '÷':
                    console.log(`div: ${result / number}`);
                    tempResult = result / number;
                    tempExprssion = `${result} ÷ ${number} =`;
                    tempHistory = {
                        expression: tempExprssion,
                        result: tempResult
                    };
                    break;
            }
            console.log(tempResult);
            setResult(tempResult);
            setHistory(tempHistory);
            console.log(result);

            if (inputOperation === '003D') {
                console.log('input: =');
                setDisplayEquals(true);
                setNumber(result);
                setOperation('');
                console.log(number);
            } else {
                console.log('not input: =');
                const unicodeString = `\\u${inputOperation}`;
                const unicodeChar = JSON.parse(`"${unicodeString}"`);
                setOperation(unicodeChar);
                setDisplayEquals(false);
            }
        }
    }, [number, operation, result])

    const handleSetNumber = useCallback((inputNumber: number): void => {
        if (number) {
            return setNumber(number * 10 + inputNumber);

        }
        setNumber(inputNumber);
    }, [number]);

    return (
        <div className='flex flex-col items-center'>
            <div className='flex mt-10 w-10/12'>
                <div className='flex-1initial w-80 mx-5'>
                    <div className="grid w-full my-5">
                        {!result
                            ?
                            <>
                                <Typography className='grid justify-end text-4xl'>{number}</Typography>
                            </>
                            :
                            <>
                                {displayEquals
                                    ?
                                    <div className="flex justify-end ">
                                        <Typography className='text-sm mr-1'>{history.expression}</Typography>
                                    </div>
                                    :
                                    <div className="flex justify-end ">
                                        <Typography className='text-sm mr-1'>{result}</Typography>
                                        <Typography className='text-sm mr-1'>{operation}</Typography>
                                    </div>
                                }
                                <Typography className='grid justify-end text-4xl'>{number}</Typography>
                            </>
                        }
                    </div>
                    <CalcButton
                        setNumber={handleSetNumber}
                        numberReset={handleEventAC}
                        setOperation={handleSetOperation}
                        setClear={handleEventClear} />
                </div>
                <CalcHistory />
            </div>
        </div>
    );
}));

export default Calc;