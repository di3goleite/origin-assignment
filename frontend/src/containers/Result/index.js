import React from 'react';

import components from '../../components';
import { scoreTypeMessage } from '../../utils/constraints';
import { capitalize } from '../../utils/lib';

import icons from '../../assets/icons';
import './index.scss';

const { Navbar, Footer, Card, Button, Scorebar } = components;

function Result({ score = 'healthy' }) {
  return (
    <div className="result">
      <Navbar />
      <div className="container">
        <h2>
          Here&apos;s your <b>financial wellness score:</b>
        </h2>
        <Card>
          <div className="card-header">
            <img src={icons.originIcon} alt="Origin Financial Logo" />
          </div>
          <div className="card-body">
            <Scorebar type={score} />
            <div>
              <h1>{scoreTypeMessage[score]}</h1>
              <p>
                {'Your financial wellness score is '}
                <b>{capitalize(score)}</b>
                {'.'}
              </p>
            </div>
          </div>
          <div className="card-footer">
            <Button variant="secondary">Return</Button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Result;
