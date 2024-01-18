import { createContext, useState, useEffect } from 'react';
import * as math from 'mathjs';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    
    const [val,setVal] = useState('');
    const [exp,setExp] = useState('');
    
    useEffect(() => {
        setVal("0");
        setExp(' ');
    },[])


    const handleKey = (e) =>{
        setExp(' ');
        if(val === '0' || val === "Error")
            setVal(e.key);
        else if(val.length >= 1 && val.slice(0,-1) === '0') 
            setVal(val.slice(0,-1)+e.key);
        else
            setVal(val+e.key);

        if(e.key === 'Enter')
            handleSubmit();
    }

      const handlePercent = () => {
        const result=val.replace(/%/, '/100');
        setVal(result);
    }

    const handleSubmit = () => {
        try{
            //console.log(val);
            const expression=val;
            if(val.includes('%'))
                handlePercent();
            const result=math.evaluate(val);
            //console.log(result);
            setVal(result.toString());
            setExp(expression);
        }   catch(err)  {
            //console.log("error");
            setVal("Error");
            setExp('');
        }        
    }


    return (
        <DataContext.Provider value={{
                val,setVal,handleKey,handleSubmit,exp,setExp
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;