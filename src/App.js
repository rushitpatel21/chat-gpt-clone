import React from 'react'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

function App() {
  return (
    <>
      <div className="layout-wrapper d-lg-flex">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
