import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hooksdemo from './hooksdemo';
import StateHook1 from './statehook1';
import Hooksdemo2 from './hooksdemo2';
import Hooksdemo3 from './hooksdemo3';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          Learn React     
    {/*  demo1 -useState hook
       <Hooksdemo />
        <StateHook1 /> */}
   {/* demo2 -useEffect...to bring some side effect outside the component..this hook is 
     used to change the title of document.
        <Hooksdemo2 /> */} 
        <Hooksdemo2 /> 
   {/* demo3 - useEffect ..timer*/}

       <Hooksdemo3 />




      </header>
    </div>
  );
}

export default App;
