/**
 * Check if a minimum constraint is valid
 * @param {*} data input to be validated
 * @param {*} min minimum accepted value
 * @returns result of data validation
 */
const min = (data, min) => {
  if (data < min) {
    return {
      success: false,
      message: `This field needs to be higher than ${min - 1}.`
    };
  }
  return { success: true };
};

/**
 * Check if a required constraint is valid
 * @param {*} data input to be validated
 * @returns result of data validation
 */
const required = (data) => {
  if (data === '') {
    return { success: false, message: `This field is required.` };
  }
  return { success: true };
};

const validations = { min, required };

/**
 * Do input validation for a given data based on a requirements list
 * @param {*} data input to be validated
 * @param {*} requirements list of requirement objects describing type and condition to be checked against the data
 * @returns list of found errors
 */
export const validation = (data, requirements) => {
  const errors = [];

  requirements.forEach((requirement) => {
    const result = validations[requirement.type](data, requirement.condition);
    if (!result.success) errors.push(result.message);
  });

  return errors;
};
