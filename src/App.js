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
            <div className='calendar'>
              <h2> Calendar </h2>
              <ul className= 'calendar-list'>
                <li> Coffee with Lisa at 11</li>
                <li> Stand up meeting at 12</li>
                <li>Tennis practice at 18</li>
              </ul>
            </div>
            <div className='weather'>
            <h2> Weather</h2>
            </div>
          </div>
        <p>
          Get to know how your future looks for the day!
        </p>

      </div>
    </div>
  );
}

export default App;
