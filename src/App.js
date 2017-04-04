import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from './Button';
import Avatar from './Avatar';
import SimpleAppBar from './SimpleAppBar';

import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <SimpleAppBar/>
            <FlatButton />
            <Avatar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
