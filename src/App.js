import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your daily future!</h1>
      </header>
      <div className="App-body">
        <div className= 'flex-container'>
          <div className='calendar'></div>
          <div className='weather'></div>
        </div>
        <p>
          Get to know how your future looks for the day!
        </p>

      </div>
    </div>
  );
}

export default App;
