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
        <Dictionary defaultKeyword="Heaven" />
      </main>
      <footer className="App-footer">
        <p>Coded by <a href="linkedin.com/in/dalete-pokrywiesky">Dalete Pokrywiesky</a> and is open-source on <a href="https://github.com/DaleteB/dictionary-react">GitHub</a></p>
      </footer>
      </div>
      
    </div>
  );
}


