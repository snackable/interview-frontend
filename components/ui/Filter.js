import React from 'react';

export const Filter = ({ name, values, handleChange, clear }) => {
  if (!values || values.length === 0) {
    return null;
  }

  return (
    <div className="flex">
      <span className="mr-2">filter:</span>
      {values.map(({ value, checked }) => (
        <div key={value} className="mr-2">
          <input type="radio" id={value} name={name} value={value} checked={checked} onChange={handleChange} />
          <label htmlFor={value}>{value}</label>
        </div>
      ))}
      <button onClick={clear}>clear</button>
    </div>
  );
};
