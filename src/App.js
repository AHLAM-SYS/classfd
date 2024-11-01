

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/rigester';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/rigester' component={Register} />
        <Route path='/login' component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
