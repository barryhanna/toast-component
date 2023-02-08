import React from 'react';

function VariantRadioItem({ variant, setVariant }) {
  return (
    <label key={variant} htmlFor={`variant-${variant}`}>
      <input
        id={`variant-${variant}`}
        type="radio"
        name="variant"
        value={variant}
        onClick={(e) => setVariant(e.target.value)}
      />
      {variant}
    </label>
  );
}

export default VariantRadioItem;
