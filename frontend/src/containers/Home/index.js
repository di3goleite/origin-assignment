import React from 'react';

import components from '../../components';

import icons from '../../assets/icons';
import './index.scss';

const { Navbar, Footer, Card, CurrencyInput, Button } = components;

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <h2>
          Let&apos;s find out your <b>financial wellness score.</b>
        </h2>
        <Card>
          <div className="card-header">
            <img src={icons.originIcon} alt="Origin Financial Logo" />
            <div>
              <h1>Financial wellness test</h1>
              <p>Enter your financial information below</p>
            </div>
          </div>
          <div className="card-body">
            <CurrencyInput id="annual-income" label="Annual Income" />
            <CurrencyInput id="monthly-costs" label="Monthly Costs" />
          </div>
          <div className="card-footer">
            <Button variant="primary">Continue</Button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
