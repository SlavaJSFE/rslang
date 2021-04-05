import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import useRoutes from './routes';
import theme from './constants/theme';
import useAuth from './hooks/auth';
import Message from './components/Message/Message';

function App() {
  useAuth();
  const routes = useRoutes();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          {routes}
        </Router>
        <Message />
      </div>
    </ThemeProvider>
  );
}

export default App;
