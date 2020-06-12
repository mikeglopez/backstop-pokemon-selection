import React from 'react';

const Pokemon = props => {
  let inches = (props.attributes.height * 3.93701).toFixed(0);
  const feet = Math.floor(inches / 12);
  inches %= 12;
  const pounds = (props.attributes.weight * 0.220462).toFixed(1);
  const formattedName =
    props.attributes.name.charAt(0).toUpperCase() +
    props.attributes.name.slice(1);

  return (
    <div style={{ display: 'inline-block' }}>
      <h3>{formattedName}</h3>
      <img src={props.attributes.sprites.front_default} alt={formattedName} />
      <p>
        <b>Height:</b> {feet}'{inches}"
      </p>
      <p>
        <b>Weight:</b> {pounds} lbs
      </p>
      <p>
        <b>Base Exp:</b> {props.attributes.base_experience}
      </p>
    </div>
  );
};

export default Pokemon;
