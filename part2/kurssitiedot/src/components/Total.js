import React from 'react';

const Total = ({ parts }) => {
  const all = parts.reduce((total, amount) => {
    return total + amount.exercises },
    0 // the default value to start from
  );
  return (
    <div>
      <b>
        Total number of exercises is {all}
      </b>
    </div>
  );
};

export default Total;