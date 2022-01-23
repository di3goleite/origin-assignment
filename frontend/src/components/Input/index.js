import React from 'react';

const Input = ({ id, label, type = 'text' }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type}></input>
    </div>
  );
};

export default Input;
