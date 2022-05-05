import FontAwesomeIcon from './FontAwesomeIcon';
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
       <header className="App-header">
        <h1>Dictionary</h1>
      </header> 
      <main>
        <Dictionary/>
      </main>
      <footer>
        <p>Coded by Dalete Pokrywiesky</p>
      </footer>
      </div>
      
    </div>
  );
}

export default App;
