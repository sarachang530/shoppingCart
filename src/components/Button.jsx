import React, { useState } from 'react';

const Button = props => {
  const handleDelete = () => {
    props.items.cart.products = props.items.cart.products.filter(curr => {
      return props.item !== curr;
    });
    props.handleItemsChange();
  };


  return (
    <button className="delete" onClick={() => handleDelete()}>
      Delete Item
    </button>
  );
};

export default Button;
