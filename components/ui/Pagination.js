import React from 'react';

export const Pagination = ({ load }) => {
  return (
    <div className="flex">
      <button onClick={load}>load more</button>
    </div>
  );
};
