import React from 'react';

const Line = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1.5,
      opacity: 0.5,
      marginTop: 50,
    }}
  />
);
export default Line;
