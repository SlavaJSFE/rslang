import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import useRoutes from './routes';
import './App.scss';
import theme from './constants/theme';

function App() {
  const routes = useRoutes();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          {routes}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
