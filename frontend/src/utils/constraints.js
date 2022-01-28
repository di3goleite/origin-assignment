export const scoreTypeMessage = {
  healthy: {
    title: 'Congratulations!',
    state: 'Healthy'
  },
  medium: {
    title: 'There is room for improvement.',
    state: 'Average'
  },
  low: {
    title: 'Caution!',
    state: 'Unhealthy'
  }
};

export const inputValidations = [
  { type: 'required', condition: true },
  { type: 'min', condition: 1 }
];
