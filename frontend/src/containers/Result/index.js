import React from 'react';

import components from '../../components';

import icons from '../../assets/icons';
import './index.scss';

const { Navbar, Footer, Card, Button, Scorebar } = components;
const scoreTypeMessage = {
  healthy: 'Congratulations!',
  average: 'There is room for improvement.',
  unhealthy: 'Caution!'
};

function Result({ score = 'healthy' }) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

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
