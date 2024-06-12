import { Divider, Typography } from "@mui/material";
import { memo, useCallback, useRef, useState } from "react";
import { CalcButton } from "./CalcButton";
import { CalcHistory } from "./CalcHistory";
import { CalaHistoryType } from "./types/ObjectType";

const Calc = memo((() => {
    const [number, setNumber] = useState<number>(0);
    const resultRef = useRef<number>(0);
    const [operation, setOperation] = useState<string>('');
    const [displayEquals, setDisplayEquals] = useState<boolean>(false);
    const [history, setHistory] = useState<CalaHistoryType>();

    const handleEventBackSpace = useCallback(() => {
        if (number !== 0) {
            setNumber(prevNumber => {
                const tempNumber: number = parseInt(prevNumber.toString().slice(0, -1));
                return !Number.isNaN(tempNumber) ? tempNumber : 0;
            });
        }
    }, [number]);

    const handleEventAC = useCallback(() => {
        setNumber(0);
    }, []);

    const handleEventClear = useCallback(() => {
        setNumber(0);
        resultRef.current = 0;
        setOperation('');
        setDisplayEquals(false);
    }, []);

    const handleSetOperation = useCallback((inputOperation: string) => {
        if (resultRef.current === 0) {
            resultRef.current += number;
            setNumber(0);
            setOperation(String.fromCharCode(parseInt(inputOperation, 16)));
            setDisplayEquals(false);
        } else {
            let tempResult: number = 0;
            let tempExprssion: string = '';
            let tempHistory: CalaHistoryType = {
                expression: tempExprssion,
                result: tempResult
            };
            if (!displayEquals) {
                switch (operation) {
                    case '+':
                        tempResult = resultRef.current + number;
                        tempExprssion = `${resultRef.current} + ${number} =`;
                        tempHistory = {
                            expression: tempExprssion,
                            result: tempResult
                        };
                        break;

                    case '−':
                        tempResult = resultRef.current - number;
                        tempExprssion = `${resultRef.current} - ${number} =`;
                        tempHistory = {
                            expression: tempExprssion,
                            result: tempResult
                        };
                        break;

                    case '×':
                        tempResult = resultRef.current * number;
                        tempExprssion = `${resultRef.current} × ${number} =`;
                        tempHistory = {
                            expression: tempExprssion,
                            result: tempResult
                        };
                        break;

                    case '÷':
                        tempResult = resultRef.current / number;
                        tempExprssion = `${resultRef.current} ÷ ${number} =`;
                        tempHistory = {
                            expression: tempExprssion,
                            result: tempResult
                        };
                        break;
                }
                resultRef.current = tempResult;
                setHistory(tempHistory);
            } else {
                setNumber(0);
            }

            if (inputOperation === '003D') {
                setDisplayEquals(true);
                setNumber(resultRef.current);
                setOperation('');
            } else {
                setOperation(String.fromCharCode(parseInt(inputOperation, 16)));
                setDisplayEquals(false);
            }
        }
    }, [displayEquals, number, operation])

    const handleSetNumber = useCallback((inputNumber: number): void => {
        if (number) {
            return setNumber(number * 10 + inputNumber);

        }
        setNumber(inputNumber);
    }, [number]);

    return (
        <div className='flex flex-col items-center'>
            <div className='flex mt-10 w-10/12'>
                <div className='flex-1initial w-80 mx-5 p-1 border-2 rounded-lg border-sky-400 bg-sky-200'>
                    <div className="grid w-full my-4 rounded-lg border-2 bg-white">
                        {!resultRef.current
                            ?
                            <>
                                <Typography className='grid justify-end text-4xl mt-5'>{number}</Typography>
                            </>
                            :
                            <>
                                {displayEquals
                                    ?
                                    <div className="flex justify-end ">
                                        <Typography className='text-sm mr-1'>{history?.expression}</Typography>
                                    </div>
                                    :
                                    <div className="flex justify-end ">
                                        <Typography className='text-sm mr-1'>{resultRef.current}</Typography>
                                        <Typography className='text-sm mr-1'>{operation}</Typography>
                                    </div>
                                }
                                <Typography className='grid justify-end text-4xl'>{number}</Typography>
                            </>
                        }
                    </div>
                    <Divider className="mb-1" />
                    <CalcButton
                        setNumber={handleSetNumber}
                        numberReset={handleEventAC}
                        setOperation={handleSetOperation}
                        setClear={handleEventClear}
                        numberBackSpace={handleEventBackSpace} />
                </div>
                <CalcHistory />
            </div>
        </div >
    );
}));

export default Calc;