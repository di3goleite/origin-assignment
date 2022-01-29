// Request validation for financial life object
const financialLifeSchema = {
  schema: {
    body: {
      type: 'object',
      properties: {
        annualIncome: { type: 'number', exclusiveMinimum: 0 },
        monthlyCosts: { type: 'number', exclusiveMinimum: 0 }
      },
      required: ['annualIncome', 'monthlyCosts'],
      additionalProperties: false
    }
  }
};

module.exports = {
  financialLifeSchema
};
