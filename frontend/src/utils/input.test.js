import { validation } from './input';

describe('Input validation', () => {
  it('should do validation of a required input', () => {
    const validationTest = [{ type: 'required', condition: true }];
    const validationErrors = validation('', validationTest);
    expect(validationErrors).toHaveLength(1);
    expect(validationErrors[0]).toBe('This field is required.');
  });

  it('should do validation of an input with minimum value', () => {
    const validationTest = [{ type: 'min', condition: 1 }];
    const validationErrors = validation('0', validationTest);
    expect(validationErrors).toHaveLength(1);
    expect(validationErrors[0]).toBe('This field needs to be higher than 0.');
  });

  it('should do validation of a required input with minimum value', () => {
    const validationTest = [
      { type: 'required', condition: true },
      { type: 'min', condition: 1 }
    ];
    const validationErrors = validation('', validationTest);
    expect(validationErrors).toHaveLength(2);
    expect(validationErrors[0]).toBe('This field is required.');
    expect(validationErrors[1]).toBe('This field needs to be higher than 0.');
  });
});
