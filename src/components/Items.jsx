import React, { useState, useEffect } from 'react';


const fetchURL = 'https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json?fbclid=IwAR3DsqgJIiYhFmp4Rksyg8WMyglNaiBzU7ZUK1evtw3PFrXiGXIBQfygiEw';
const getItems = () => fetch(fetchURL).then(res => res.json());

const Items = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);

  return (
    <div>
      <ul>
        {items
        ? items.map(item => {
            return <div key={item.id}>{item.title}</div>;
          })
        : "Loading..."}
      </ul>
    </div>
  );
};

export default Items;

