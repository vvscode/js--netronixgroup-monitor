import React, { Component } from 'react';
import './style.css';

import MeasurementsTable from '../MeasurementsTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MeasurementsTable />
      </div>
    );
  }
}

export default App;
