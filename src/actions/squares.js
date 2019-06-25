import { CLICK_SQUARE, RESET_GRID } from './actionTypes';

export const clickSquare = (index) => ({
  type: CLICK_SQUARE,
  index
});

export const resetGrid = () => ({
  type: RESET_GRID
});
