import React, {useState} from 'react';
import './App.css';

function App() {
  const [locationSearch, setLocationSearch] = useState('');
  const [locations, setLocations] = useState<string[]>([]);

  const disableSearch = locationSearch.trim() === "";

  const addLocation = () => {
    setLocations([locationSearch, ...locations]);
    setLocationSearch("");
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <label>
          Add Location <input type="text" value={locationSearch} onChange={e => setLocationSearch(e.target.value)} />
        </label>
        <button onClick={() => setLocations([locationSearch, ...locations])}>Search</button>
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
