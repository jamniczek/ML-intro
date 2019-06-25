import { CLICK_SQUARE, RESET_GRID } from '../actions/actionTypes';

const initialState = new Array(100).fill(false);

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK_SQUARE:
      const newState = [...state];
      newState[action.index] = !newState[action.index];
      return [...newState];
    case RESET_GRID:
      return [...initialState];
    default:
      return state;
  }
};
