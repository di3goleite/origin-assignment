import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import containers from './containers';

const { Home, Result } = containers;

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="result" element={<Result />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
