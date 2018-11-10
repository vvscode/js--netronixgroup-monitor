export const ADD_MEASUREMENT = 'ADD_MEASUREMENT';

export const addMeasurements = measurements => ({
  type: ADD_MEASUREMENT,
  payload: measurements,
});
