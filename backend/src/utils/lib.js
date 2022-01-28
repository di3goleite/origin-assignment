const computeScore = (annualIncome, monthlyCosts) => {
  const incomeTax = 8 / 100;
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
