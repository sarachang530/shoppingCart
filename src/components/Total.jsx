import React, { useState } from 'react';


const Total = props => {
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
