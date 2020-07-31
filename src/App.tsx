import React from 'react';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UsersContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
