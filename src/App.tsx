import React, {useState} from 'react';
import {LocationSearch} from './LocationSearch';
import {LocationTable} from './LocationTable'
import './App.css';

function App() {
  const [locations, setLocations] = useState<string[]>([]);  
  const addLocation = (location: string) => setLocations([location, ...locations]);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <LocationSearch onSearch={addLocation}/> 
      <LocationTable locations={locations}/>     
    </div>
  );
}

export default App;
