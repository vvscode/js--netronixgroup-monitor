import React from 'react';
import { connect } from 'react-redux';

import { createMeasurementsClient } from '../../api/measurements';
import { addMeasurements } from '../../actions/measurements';

import './style.css';

class MeasurementsTable extends React.Component {
  componentDidMount() {
    this.stopMeasurementsListen = createMeasurementsClient(
      'https://jsdemo.envdev.io/sse',
      this.handleNewMeasurements,
    );
  }

  handleNewMeasurements = data => {
    console.log('handleNewMeasurements', data);
    this.props.addMeasurements(data);
  };

  render() {
    return (
      <div className="measurements-table">
        <table className="measurements-table__table">
          <caption className="measurements-table__caption">
            Measurements Table
          </caption>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Unit</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {this.props.measurements.map(el => (
              <tr key={el.id}>
                <td>{el.date.toLocaleTimeString()}</td>
                <td>{el.type}</td>
                <td>
                  <code>{el.unit}</code>
                </td>
                <td>
                  <pre>
                    <code>{el.details}</code>
                  </pre>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  componentWillUnmount() {
    console.log('xxx');
  }
}

export default connect(
  ({ measurements }) => ({ measurements }),
  { addMeasurements },
)(MeasurementsTable);
