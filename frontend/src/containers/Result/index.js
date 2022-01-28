import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import BaseContainer from '../Base';
import components from '../../components';
import { scoreTypeMessage } from '../../utils/constraints';

import icons from '../../assets/icons';
import './index.scss';

const { Card, Button, Scorebar } = components;

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state;

  return (
    <BaseContainer className="result">
      <h2>
        Here&apos;s your <b>financial wellness score:</b>
      </h2>
      <Card>
        <div className="card-header">
          <img src={icons.origin} alt="Origin Financial Logo" />
        </div>
        <div className="card-body">
          <Scorebar type={score} />
          <div>
            <h1>{scoreTypeMessage[score].title}</h1>
            <p>
              {'Your financial wellness score is '}
              <b>{scoreTypeMessage[score].state}</b>
              {'.'}
            </p>
          </div>
        </div>
        <div className="card-footer">
          <Button variant="secondary" onClick={() => navigate('/')}>
            Return
          </Button>
        </div>
      </Card>
    </BaseContainer>
  );
}

export default Result;
