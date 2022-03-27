import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
 var times= new Date().toLocaleTimeString()
 const [count,setCount] =useState(times)
 const Incvalue = ()=> {
  var times= new Date().toLocaleTimeString()
  
 setCount(times)
 };
 setInterval(Incvalue,1000);
  return (
    <div className="App">
      <h1 className='count'>{count}</h1>
     
      
    </div>
  );
}

export default App;
