import React, { useState, useEffect } from 'react';
import Total from './Total.jsx';

const fetchURL =
  'https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json?';

const productsURL =
  'https://prodcat.gopuff.com/api/products?location_id=6&product_ids=';

const getItems = () => fetch(fetchURL).then(res => res.json());
const getProducts = productIDs =>
  fetch(productsURL + productIDs).then(res => res.json());

const Items = () => {
  const [items, setItems] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const [total, setTotal] = useState(0);
  const handleQuantity = (e, product) => {
    event.preventDefault();
    if (product) {
      product.quantity = e.target.value;
      setTotal(e.target.value);
    }
  };

  useEffect(() => {
    getItems().then(data => {
      const itemsString = data.cart.products.map(item => item.id).join(',');
      getProducts(itemsString).then(productsdata => {
        return setProductInfo(
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
    <div className="itemList">
      <ul>
        {items.cart &&
          productInfo &&
          items.cart.products.map(item => (
            <li key={item.id}>
              {productInfo[item.id] && productInfo[item.id].name}
              <img
                src={productInfo[item.id] && productInfo[item.id].avatar.thumb}
              />
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html:
                    productInfo[item.id] && productInfo[item.id].description,
                }}
              ></div>
              <div className="discountPrice">
                {' '}
                Sale: {item.credit_coupon_price}{' '}
              </div>
              <div className="price">
                price: {productInfo[item.id] && productInfo[item.id].price}
              </div>
              quantity:
              <input
                type="number"
                value={item.quantity}
                onChange={e => handleQuantity(e, item)}
              ></input>
            </li>
          ))}
        {console.log('items: ', items)}
      </ul>

      <Total products={items.cart && productInfo && items.cart.products} handleQuantity={handleQuantity} />
    </div>
  );
};

export default Items;
