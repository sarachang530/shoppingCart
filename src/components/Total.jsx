import React, { useState } from 'react';

// return <div>quantity: {products[item.id] && products[item.id].quantity}</div>

const Total = props => {
  // const [total, setTotal] = useState(0);

  // const handleTotal = e => {
  //   setTotal(e.target.value);
  // };

  // let totalPrice =
  //   props.products &&
  //   props.products.reduce((acc, i) => {
  //     return i.price * i.quantity + acc;
  //   }, 0);

  let subtotal =
    props.products &&
    props.products.reduce((acc, i) => {
      return i.price * i.quantity + acc;
    }, 0);
  
  let tax = subtotal * .08
  let allDiscounts = props.products &&
  props.products.reduce((acc, i) => {
    return i.credit_coupon_price + acc
  }, 0);
  let total = (subtotal + tax) - allDiscounts


  return <div className="total">
   subtotal: {subtotal}
   <br/> tax: {tax}
   <br/> discount: -{allDiscounts}
   <br/> total: {total}

  </div>;
};

export default Total;
