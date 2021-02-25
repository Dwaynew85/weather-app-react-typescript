import React, {useState} from 'react';
import './App.css';

function App() {
  const [locationSearch, setLocation] = useState('Paris');
  const [locations, setLocations] = useState(['Belfast', 'Dublin']);
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <label>
          Add Location <input type="text" value={locationSearch} onChange={e => setLocation(e.target.value)} />
        </label>
        <button>Search</button>
      </div>

      <div>
        <h2>Locations</h2>
        <table>
          <thead>
          <tr>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => <tr key={index}><td>{location}</td></tr>)}
            <tr><td>Belfast</td></tr>
            <tr><td>New York</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
