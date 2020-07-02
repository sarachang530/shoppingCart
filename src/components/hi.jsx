import React, { useState, useEffect } from 'react';

const fetchURL =
  'https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json?';

const fetchProducts =
  'https://prodcat.gopuff.com/api/products?location_id=6&product_ids=2830,989';

const getItems = () => fetch(fetchURL).then(res => res.json());
// const getProducts = () => fetch(fetchProducts).then(res => res.json())

const Items = () => {
  const [items, setItems] = useState([]);
  // const [products, setProducts] = useState([])

  useEffect(() => {
    getItems().then(data =>
      // getProducts().then(product => setProducts(product.id))
      setItems(data),
    );
  });

  // short circuiting items.cart because its a truthy value and stops there and returns so need to "&&" to continue to search inside obj
  return (
    <div>
      {console.log('items', items.cart && items.cart.products)}
      <ul>
        {items.cart &&
          items.cart.products.map(item => <li key={item.id}>{item.id}</li>)}
      </ul>
    </div>
  );
};

export default Items;
