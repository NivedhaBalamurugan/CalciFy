import React from 'react';
import { FaBackspace } from "react-icons/fa";
import CalculatorKey from './CalculatorKey';
import './Calculator.css';
import { useContext } from 'react';
import DataContext from './context/DataContext';


const Calculator = () => {

  const {val,setVal,handleKey,exp} = useContext(DataContext);


  
  return (
    <main className="calculator">
    
      <div>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text"
                className='aftresult'
                readOnly
                value={exp}
            />
            <input 
                type="text" 
                className='result' 
                autoFocus
                value={val}
                onChange={(e) => setVal(e.target.value)}
                onKeyDown={handleKey}
                readOnly
            />
        </form>
      </div>

      <div className='keypad'>
        <CalculatorKey className="ac"  value="AC" />
        <CalculatorKey className="opt" value="+/-" />
        <CalculatorKey className="opt" value="&#37;" />
        <CalculatorKey className="opt" value="/" />
        <CalculatorKey value="7" />
        <CalculatorKey value="8" />
        <CalculatorKey value="9" />
        <CalculatorKey className="opt" value="*" />
        <CalculatorKey value="4" />
        <CalculatorKey value="5" />
        <CalculatorKey value="6" />
        <CalculatorKey className="opt" value="-" />
        <CalculatorKey value="1" />
        <CalculatorKey value="2" />
        <CalculatorKey value="3" />
        <CalculatorKey className="opt" value="&#43;" />
        <CalculatorKey value="0" />
        <CalculatorKey value="." />
        <CalculatorKey value="<FaBackspace />" />
        <CalculatorKey className="opt" value="&#61;" />
      </div>
    </main>
  );
};

export default Calculator;

