import React from 'react';

const ColoredLine = ({ color }) => (
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
export default ColoredLine;
