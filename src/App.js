import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from './Button';
import Avatar from './Avatar';
import SimpleAppBar from './SimpleAppBar';

import GrApp from 'grommet/components/App';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import '../node_modules/grommet/grommet.min.css';

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
            <br/>
            <br/>
            <p className="Paragraph">Hi, I'm James Abtahi and one thing
              you should know about me is that I dream about machines that can
              think and feel.
            </p>

        <GrApp>
        <Columns>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            <FlatButton Title="Mathematics and Computer Science"/>
            <br/>
             <h4>Basic Mathematics</h4>
              <a href="./log" >Logarithm</a>

              <a href="./trig">Trigonometry</a>
              <br/>
              <h4>Basic Topology</h4>
              <a href="./topology">Metric Space and Topology </a>

              <a href="./interior">Interior, Limit Point, and Closure</a>

              <a href="./compact">Compactness and Completeness</a>
              <br/>

              <h4>Basic Analysis</h4>
              <a href="./limit">Limit</a>

              <a href="./series">Series</a>

              <a href="./continuity">Continuous Functions</a>

              <a href="./derivative">The Derivative</a>

              <a href="./integral">The Integral</a>
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            
            <FlatButton Title="Web Development"/>
            <br/>
            <a href="./func"> Functional Programming in JS </a>
            <a href="./webpack">Webpack Essentials </a>
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            <FlatButton Title="Artificial Intelligence"/>
            
          </Box>

        </Columns>
        </GrApp>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
