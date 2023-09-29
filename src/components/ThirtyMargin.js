import React, { useState } from 'react';

const ThirtyMargin = () => {
  const [quantity, setQuantity] = useState('');
  const [casePrice, setCasePrice] = useState('');

  // Helper function to check if a value is numeric
  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  // Calculate the cost per unit and price
  const calculateValues = () => {
    if (isNumeric(quantity) && isNumeric(casePrice)) {
      const costPerUnit = casePrice / quantity;
      const price = costPerUnit / 0.70;
      return { costPerUnit, price };
    } else {
      return { costPerUnit: 0, price: 0 };
    }
  };

  const { costPerUnit, price } = calculateValues();

  return (
    <div className="keyboardAvoidingContainer">
      <div className="container">
        <div className="row">
          <h2>30% Margin</h2>
          <input
            type="number"
            placeholder="Quantity"
            value={quantity.toString()}
            onChange={(e) => {
              const text = e.target.value;
              if (isNumeric(text)) {
                setQuantity(parseFloat(text));
              } else {
                setQuantity(0);
              }
            }}
          />
        </div>
        <div className="row">
          <input
            type="number"
            placeholder="Case Price"
            value={casePrice.toString()}
            onChange={(e) => {
              const text = e.target.value;
              if (isNumeric(text)) {
                setCasePrice(parseFloat(text));
              } else {
                setCasePrice(0);
              }
            }}
          />
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="Cost Per Unit"
            value={costPerUnit.toFixed(2)}
            readOnly
          />
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="Price"
            value={price.toFixed(2)}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ThirtyMargin;
