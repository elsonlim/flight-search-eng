import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import FlightSearchEngine from './components/FlightSearchEngine';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="App" >
          <Grid>
          <Grid.Row className="App-title-container">
              <Grid.Column width={1} />
              <Grid.Column width={14} >
                <div className="App-title">
                  Flight Search Engine
                </div>
              </Grid.Column>
          </Grid.Row>
            
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={14} >
                <FlightSearchEngine />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
