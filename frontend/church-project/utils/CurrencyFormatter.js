import React from 'react';

const CurrencyFormatter = ({ amount }) => {
  // Format number to currency
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);

  return <div>{formattedAmount}</div>;
};

export default CurrencyFormatter;
