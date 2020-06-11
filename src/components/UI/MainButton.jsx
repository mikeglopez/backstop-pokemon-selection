import React from 'react';

const MainButton = props => {
  return <button onClick={props.clickHandler}>{props.btnText}</button>;
};

export default MainButton;
