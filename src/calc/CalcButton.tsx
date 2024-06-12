import Button from "@mui/material/Button"
import { FC } from "react"
import { handleClear, handleEventBackSpace, handleResetNumber, handleSetNumber, handleSetOperation } from "./types/FunctionType";

interface CalcButtonProps {
    setNumber: handleSetNumber;
    numberReset: handleResetNumber;
    setOperation: handleSetOperation;
    setClear: handleClear;
    numberBackSpace: handleEventBackSpace;
}

/**
 * 계산기의 버튼
 * @param setNumber 숫자를 저장하는 함수 
 * @param numberRest 현재 입력한 숫자를 초기화하는 함수
 * @returns 
 */
export const CalcButton: FC<CalcButtonProps> = ({ setNumber, numberReset, setOperation, setClear, numberBackSpace }) => {
    return (
        <div className=' grid grid-rows-5 grid-cols-4 gap-2 h-72'>
            <div className='grid grid-cols-subgrid col-span-4'>
                <Button variant='outlined' color='primary' className='col-start-1 text-2xl' onClick={() => setOperation('00F7')}>{'\u00F7'}</Button>
                <Button variant='outlined' color='primary' className='col-start-2' onClick={() => numberReset()}>CE</Button>
                <Button variant='outlined' color='primary' className='col-start-3' onClick={() => setClear()}>C</Button>
                <Button variant='outlined' color='primary' className='col-start-4' onClick={() => numberBackSpace()}>&#8592;</Button>
            </div>
            <div className='grid grid-cols-subgrid col-span-4'>
                <Button variant='outlined' color="primary" onClick={() => setNumber(7)}>7</Button>
                <Button variant='outlined' color="primary" onClick={() => setNumber(8)}>8</Button>
                <Button variant='outlined' color="primary" onClick={() => setNumber(9)}>9</Button>
                <Button variant='outlined' color='primary' onClick={() => setOperation('00D7')}>{'\u00D7'}</Button>
            </div>
            <div className='grid grid-cols-subgrid col-span-4'>
                <Button variant='outlined' color="primary" onClick={() => setNumber(4)}>4</Button>
                <Button variant='outlined' color="primary" onClick={() => setNumber(5)}>5</Button>
                <Button variant='outlined' color="primary" onClick={() => setNumber(6)}>6</Button>
                <Button variant='outlined' color='primary' onClick={() => setOperation('002B')}>{'\u002B'}</Button>
            </div>
            <div className='grid grid-cols-subgrid col-span-4'>
                <Button variant='outlined' color="primary" onClick={() => setNumber(1)}>1</Button>
                <Button variant='outlined' color="primary" onClick={() => setNumber(2)}>2</Button>
                <Button variant='outlined' color="primary" onClick={() => setNumber(3)}>3</Button>
                <Button variant='outlined' color='primary' onClick={() => setOperation('2212')}>{'\u2212'}</Button>
            </div>
            <div className='grid grid-cols-subgrid col-span-4'>
                <Button variant='outlined' color="primary" className='col-start-2' onClick={() => setNumber(0)}>0</Button>
                <Button variant='outlined' color="primary" className='col-start-4' onClick={() => setOperation('003D')}>{'\u003D'}</Button>
            </div>
        </div>
    )
}