import React from 'react';
import ReactToggle from 'react-toggle';
import "style.css" // for ES6 modules

const Toggle = () => {
  return(
    <ReactToggle
      id='cheese-status'
      defaultChecked={true}
      onChange={(e) => console.log(e)}
    />
  );
}

export default Toggle;