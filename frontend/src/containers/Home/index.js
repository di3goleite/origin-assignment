import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BaseContainer from '../Base';
import components from '../../components';
import { computeScore } from '../../utils/api';

import icons from '../../assets/icons';
import './index.scss';

const { Card, Input, Button } = components;

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasInputError, setHasInputError] = useState(false);
  const [annualIncome, setAnnualIncome] = useState('');
  const [monthlyCosts, setMonthlyCosts] = useState('');

  const navigate = useNavigate();

  const onSubmit = async () => {
    if (!annualIncome || !monthlyCosts) {
      setHasInputError(true);
    } else {
      try {
        setIsLoading(true);
        setHasInputError(false);

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
            onError={setHasInputError}
            isRequired
          />
          <Input
            id="monthly-costs"
            label="Monthly Costs"
            onChange={setMonthlyCosts}
            onError={setHasInputError}
            isRequired
          />
        </div>
        <div className="card-footer">
          <Button
            variant="primary"
            onClick={onSubmit}
            disabled={hasInputError}
            isLoading={isLoading}
          >
            Continue
          </Button>
        </div>
      </Card>
    </BaseContainer>
  );
}

export default Home;
