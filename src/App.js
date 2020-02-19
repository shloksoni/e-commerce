import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

function App() {
  return (
    <div>
      <Route path = '/'  exact component = {Homepage} />
     
    </div>
  );
}

export default App;
