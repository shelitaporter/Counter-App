export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const timesClicked = () => ({
  type: 'TIMES_CLICKED'
});

export const inputNumber = () => ({
  type: 'INPUT_NUMBER'
});

export const inputNumberChange = (number) => ({
  type: 'INPUT_NUMBER_CHANGE',
  number
});
