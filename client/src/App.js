import logo from './logo.svg';
import axios from 'axios'
import './App.css';

const appiCall = () => {
  axios.get('http://localhost:3001/todos').then((data)=>
  {
    console.log(data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={appiCall}>Call Api</button>
      </header>
    </div>
  );
}

export default App;
