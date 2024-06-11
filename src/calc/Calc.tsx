import { Typography } from "@mui/material";
import { memo, useCallback, useState } from "react";
import { CalcButton } from "./CalcButton";
import { CalcHistory } from "./CalcHistory";

const Calc = memo((() => {
    const [number, setNumber] = useState<number>(0);
    const [currentNumber, setCurrentNumber] = useState<number[]>([]);
    const [operation, setOperation] = useState<string>('');

    // const getDigitCount = useCallback((checkNumber: number): boolean => {
    //     return Math.abs(checkNumber).toString().length < 7 ? true : false;
    // }, []);

    const handleEventAC = useCallback(() => {
        setNumber(0);
    }, []);

    const handleEventClear = useCallback(() => {
        setNumber(0);
        setCurrentNumber([]);
        setOperation([]);
    }, [])

    const handleSetOperation = useCallback((inputOperation: string) => {
        setCurrentNumber((currentNumber) => [...currentNumber, number]);
        setNumber(0);

        let tempOperation: string = '';

        switch (inputOperation) {
            case '+':
                tempOperation = '+';
                break;
            case '-':
                tempOperation = '-';
                break;
            case '*':
                tempOperation = '*';
                break;
            case '/':
                tempOperation = '/';
                break
        }

        setOperation(tempOperation)
    }, [number]);

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
                        {!currentNumber
                            ?
                            <>
                                <div className="flex justify-end">
                                    {console.log(...currentNumber)}
                                    <Typography className='grid text-sm ml-1'>{currentNumber}</Typography>
                                    <Typography className='grid text-sm ml-1'>{operation}</Typography>
                                </div>
                                <Typography className='grid justify-end text-4xl'>{number}</Typography>
                            </>
                            :
                            <>
                                <div className="flex justify-end ">
                                    <Typography className='grid text-sm mr-1'>{currentNumber}</Typography>
                                    <Typography className='grid text-sm mr-1'>{operation}</Typography>
                                </div>
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