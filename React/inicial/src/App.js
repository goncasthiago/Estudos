import React from 'react';
import logo from './logo.svg';
import './App.css';

function primeiroJSX(){
  return(
    <div>
      <p>Thiago Debia</p>
      <p>Soma: {soma(5,5)}</p>
    </div>

  )
}
function soma(a,b){
  return a+ b;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello World</h1>
       {primeiroJSX()}
      </header>
    </div>
  );
}

export default App;
