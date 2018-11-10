import * as actions from '../actions/measurements';

const DEFAULT_STATE = [];

const items = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actions.ADD_MEASUREMENT:
      return state;
    default:
      return state;
  }
};

export default items;
