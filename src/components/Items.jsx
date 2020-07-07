import React, { useState, useEffect } from 'react';
import Total from './total.jsx'

const fetchURL =
  'https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json?';

const productsURL =
  'https://prodcat.gopuff.com/api/products?location_id=6&product_ids=';

const getItems = () => fetch(fetchURL).then(res => res.json());
const getProducts = productIDs =>
  fetch(productsURL + productIDs).then(res => res.json());

const Items = () => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState({});

  useEffect(() => {
    getItems().then(data => {
      const itemsString = data.cart.products.map(item => item.id).join(',');
      getProducts(itemsString).then(productsdata => {
        return setProducts(
          productsdata.products.reduce((acc, curprod) => {
            acc[curprod.product_id] = curprod;
            return acc;
          }, {}),
        );
      });
      return setItems(data);
    });
  }, []);

  // short circuiting items.cart because its a truthy value and stops there and returns so need to "&&" to continue to search inside obj
  return (
    <div>
      <ul>
        {items.cart &&
          products &&
          items.cart.products.map(item => (
            <li key={item.id}>
              {
                products[item.id] && products[item.id].name
              }
              <img src={products[item.id] && products[item.id].avatar.thumb}/>
              <div dangerouslySetInnerHTML={{__html: products[item.id] && products[item.id].description}}></div>
              <Total />
              <div>price: {products[item.id] && products[item.id].price}</div>
            
            </li>
          ))}
        {console.log('products: ', products)}
        {console.log('items: ', items)}
      </ul>
    </div>
  );
};

export default Items;

