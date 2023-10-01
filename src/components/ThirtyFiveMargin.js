import React, { useState } from 'react';

const ThirtyFiveMargin = () => {
  const [quantity, setQuantity] = useState('');
  const [casePrice, setCasePrice] = useState('');

  // Helper function to check if a value is numeric
  const isNumeric = (value) => {
    return /^(\d+(\.\d{0,2})?|\.\d{1,2})$/.test(value); // Updated regex to allow up to 2 decimal points
  };

  // Calculate the cost per unit and price
  const calculateValues = () => {
    if (isNumeric(casePrice) && isNumeric(quantity)) { // Switched the order
      const costPerUnit = casePrice / quantity;
      const price = costPerUnit / 0.65;
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
          <h2>35% Margin</h2>
          <input
            type="number"
            placeholder="Case Price" // Switched the placeholder text
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
            type="number"
            placeholder="Quantity" // Switched the placeholder text
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

export default ThirtyFiveMargin;
