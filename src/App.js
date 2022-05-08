import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
       <header className="App-header">
        <h1>Dictionary</h1>
      </header> 
      <main>
        <Dictionary defaultKeyword="God" />
      </main>
      <footer className="App-footer">
        <p>Coded by Dalete Pokrywiesky</p>
      </footer>
      </div>
      
    </div>
  );
}


