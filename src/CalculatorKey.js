import React from 'react';
import './CalculatorKey.css';
import { useContext } from 'react';
import DataContext from './context/DataContext';
import { FaBackspace } from 'react-icons/fa';

const CalculatorKey = ({ className, value }) => {

    const {val,setVal,handleSubmit,setExp} =useContext(DataContext);
    const number=value;
      
    const backspace= () => {
      setExp('');
      if(val.length >= 1) 
      {    
        const newval=val.slice(0,-1);
       // console.log(newval);
        setVal(newval);
      }
    }

    const addNumber = (number) => {
      setExp(' ');
      if(val === '0' || val === "Error")
          setVal(number);
      else if(val.length >= 1 && val.slice(0,-1) === '0') 
        setVal(val.slice(0,-1)+number);
      else 
        setVal(val+number);
    }

    const handleNegate = () => {
        const str=val;
        let ind=-1;
        for(let i=str.length-1;i>=0;i--)
        {
            if(str[i]=== '+' || str[i]=== '-' || str[i]=== '/' || str[i]=== '*')
                {
                  ind=i;
                  break;
                }
        }
        if(ind=== -1)
              setVal('-'+val);
        else{
          const result=str.slice(0,ind+1) + '(-' + str.slice(ind+1) + ')';
          setVal(result);
        }
    }

  return (

    <button className={className}
        
        onClick={() => {

            if(value === '=')
                  handleSubmit();
            else if(value === "AC"){
                  setVal("0");
                  setExp('');
            }
            else if(value.slice(0,1) === "<")
                  backspace();
            else if(value === "+/-")
                  handleNegate();
            else  
                addNumber(number);
        }} 

    >
    {
      value.slice(0,1) === '<' ? <FaBackspace /> : `${value}` 
    }</button>
  
  );
};

export default CalculatorKey;
/* */