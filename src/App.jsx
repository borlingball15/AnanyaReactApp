import React from 'react';

// import Counter from './components/Counter';
import Greeting from './Greeting';
import './App.css';
import Counter from './Counter';
import WeatherComponent from './WeatherComponent';



function App() {
  return (
    <div className="App">
      <Greeting name="Visitor" />
      <Counter></Counter>
      <WeatherComponent></WeatherComponent>
      {/* <WeatherComponent></WeatherComponent> */}
      {/* <Counter />
      <WeatherComponent /> */}
    </div>
  );
}

export default App;