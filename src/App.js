import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Card from './components/Card';
import Nav from './components/Nav';
import './App.css';
import data from './data'

const cards = data.map(d => {
  return (
    <Card key={d.key} data={d} />
  )
})

function App() {
  return (
    <div className="App">
      <Nav />
      <section className='main-section'>
        {cards}
        <hr />
      </section>
    </div>
  );
}

export default App;
