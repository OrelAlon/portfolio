import './App.css';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';

import React from 'react';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Portfolio />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
