import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useRoutes from './routes';
import './App.scss';

import Savanna from './games/Savanna/Savanna';

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
