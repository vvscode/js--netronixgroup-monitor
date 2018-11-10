import * as actions from '../actions/measurements';

const DEFAULT_STATE = [];
const MAX_MEASUREMENTS = 20;

let uniqId = 0;

const convertDataItemToStateMeasurements = item =>
  item.measurements.map(el => ({
    date: new Date(el[0] * 1000),
    details: JSON.stringify(el[1]),
    type: item.name,
    unit: item.unit || '',
    id: uniqId++,
  }));

const convertDataToStateMeasurements = list =>
  list
    .map(convertDataItemToStateMeasurements)
    .reduce((acc, el) => [...acc, ...el], []);

const items = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actions.ADD_MEASUREMENT: {
      console.log(action);
      return [
        ...convertDataToStateMeasurements(action.payload),
        ...state,
      ].slice(0, MAX_MEASUREMENTS);
    }
    default:
      return state;
  }
};

export default items;
