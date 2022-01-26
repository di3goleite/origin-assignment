import React from 'react';

import components from '../../components';
import './index.scss';

const { Navbar } = components;

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
