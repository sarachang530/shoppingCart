import React, { useState, useEffect } from 'react';
import Items from './components/Items.jsx'

const api =
  'https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json?fbclid=IwAR3DsqgJIiYhFmp4Rksyg8WMyglNaiBzU7ZUK1evtw3PFrXiGXIBQfygiEw';

const App = () => {

  return (
    <div className='App'>
      <Items />

    </div>
  );
};

console.log('hi')

export default App;
