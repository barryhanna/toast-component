import React from 'react';

function VariantRadioItem({ variant, setVariant, checked }) {
  return (
    <label key={variant} htmlFor={`variant-${variant}`}>
      <input
        id={`variant-${variant}`}
        type="radio"
        name="variant"
        value={variant}
        checked={checked}
        onChange={(e) => setVariant(e.target.value)}
      />
      {variant}
    </label>
  );
}

export default VariantRadioItem;
