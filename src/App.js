import Calculator from './Calculator';
import React, { useEffect, useState } from 'react';
import { DataProvider } from './context/DataContext';
import Header from './Header';


const App = () => {


  return (
    
    <main>    
        <Header />
        <DataProvider>
            <Calculator  />
        </DataProvider>
    </main>
  )

}
export default App;