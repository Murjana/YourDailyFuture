import sun from './sun.svg';
import './App.css';
import rainy from './rainy.svg';
import React, {Component } from 'react';


class CalendarEntry {
  constructor (description, date) {
  this.description = description;
  this.date = date;
}
}

class App extends Component {

  render (){
  var temperature = Math.round(Math.random()* 30);
  var image;
  // todo: use this array directly in html
  var events = [
   new CalendarEntry('Coffee with Lisa', '11'),
   new CalendarEntry('Stand up meeting', '12'),
   new CalendarEntry('Tennis practice', '18'),
]

  if (temperature > 20) {
    image = sun;
  }
  else {
    image = rainy;

  }
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
                {
                 events.map( entry =>
                     (
                     <li> {entry.description} at {entry.date} </li>
                  )
                 )
                }``
              </ul>
            </div>
            <div className='weather'>
            <h2> Weather</h2>
            <img className ="weather-image" src ={image}/>
            <h3 className='temperature'> {temperature} degrees </h3>
            </div>
          </div>
        <p>
          Get to know how your future looks for the day!
        </p>

      </div>
    </div>
);
}}

export default App;
