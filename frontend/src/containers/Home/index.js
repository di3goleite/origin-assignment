import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BaseContainer from '../Base';
import components from '../../components';
import { computeScore } from '../../utils/api';
import { validation } from '../../utils/input';
import { inputValidations } from '../../utils/constraints';

import icons from '../../assets/icons';
import './index.scss';

const { Card, Input, Button } = components;

function Home() {
  const [annualIncome, setAnnualIncome] = useState('');
  const [monthlyCosts, setMonthlyCosts] = useState('');
  const [errors, setErrors] = useState({ annualIncome: '', monthlyCosts: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Reset validation errors states
  useEffect(() => {
    setErrors({ annualIncome: '', monthlyCosts: '' });
  }, [annualIncome, monthlyCosts]);

  const runInputsValidations = () => {
    const annualIncomeErrors = validation(annualIncome, inputValidations);
    const monthlyCostsErrors = validation(monthlyCosts, inputValidations);
    const foundErrors = {
      annualIncome: annualIncomeErrors.length > 0 ? annualIncomeErrors[0] : '',
      monthlyCosts: monthlyCostsErrors.length > 0 ? monthlyCostsErrors[0] : ''
    };
    setErrors(foundErrors);
    return foundErrors;
  };

  const onSubmit = async () => {
    const foundErrors = runInputsValidations();
    if (!foundErrors.annualIncome && !foundErrors.monthlyCosts) {
      try {
        setIsLoading(true);
        const result = await computeScore({ annualIncome, monthlyCosts });
        navigate('/result', {
          state: { score: String(result.score).toLowerCase() }
        });
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <BaseContainer className="home">
      <h2>
        Let&apos;s find out your <b>financial wellness score.</b>
      </h2>
      <Card>
        <div className="card-header">
          <img src={icons.origin} alt="Origin Financial Logo" />
          <div>
            <h1>Financial wellness test</h1>
            <p>Enter your financial information below</p>
          </div>
        </div>
        <div className="card-body">
          <Input
            id="annual-income"
            label="Annual Income"
            onChange={setAnnualIncome}
            error={errors.annualIncome}
          />
          <Input
            id="monthly-costs"
            label="Monthly Costs"
            onChange={setMonthlyCosts}
            error={errors.monthlyCosts}
          />
        </div>
        <div className="card-footer">
          <Button variant="primary" onClick={onSubmit} isLoading={isLoading}>
            Continue
          </Button>
        </div>
      </Card>
    </BaseContainer>
  );
}

export default Home;
