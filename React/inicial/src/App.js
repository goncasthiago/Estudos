import React from 'react';
import './App.css';
import Button from '../src/Button'
import AppNew from './AppNew'

function primeiroJSX(){
  return(
    <div>
      <p>Thiago Debia</p>
      <p>Soma: {soma(5,5)}</p>
      <Button onClick={()=> soma(5,5)} name={'Soma'}/>
    </div>

  )
}
function soma(a,b){
  console.log("clicou")
  return a+ b;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello World</h1>
       {primeiroJSX()}

      <AppNew />
      </header>
    </div>
  );
}

export default App;
