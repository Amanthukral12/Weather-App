import React from 'react';
import './App.css';

const api = {
  key: process.env.WEATHER_APP_API_KEY,
  base: process.env.WEATHER_APP_BASE
}

function App() {

  const dateBuilder = (e) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[e.getDay()];
    let date = e.getDate();
    let month = months[e.getMonth()];
    let year = e.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
        <div className="location-box">
          <div className="location">New Delhi, India</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
