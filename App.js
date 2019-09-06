import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
