const min = (data, min) => {
  if (data < min) {
    return {
      success: false,
      message: `This field needs to be higher than ${min - 1}.`
    };
  }
  return { success: true };
};

const required = (data) => {
  if (data === '') {
    return { success: false, message: `This field is required.` };
  }
  return { success: true };
};

const validations = { min, required };

export const validation = (data, requirements) => {
  const errors = [];

  requirements.forEach((requirement) => {
    const result = validations[requirement.type](data, requirement.condition);
    if (!result.success) errors.push(result.message);
  });

  return errors;
};
