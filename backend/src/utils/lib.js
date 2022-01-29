/**
 * Compute user financial wellness
 * @param {*} annualIncome annual income
 * @param {*} monthlyCosts monthly costs
 * @returns user score
 */
const computeScore = (annualIncome, monthlyCosts) => {
  const incomeTax = 8 / 100;
  // eslint-disable-next-line prettier/prettier
  const annualNetCompensation = annualIncome - (annualIncome * incomeTax);
  const annualCosts = monthlyCosts * 12;
  const annualCostsRate = (annualCosts / annualNetCompensation) * 100;

  if (annualCostsRate <= 25) {
    return 'HEALTHY';
  } else if (annualCostsRate > 25 && annualCostsRate <= 75) {
    return 'MEDIUM';
  } else {
    return 'LOW';
  }
};

module.exports = {
  computeScore
};
