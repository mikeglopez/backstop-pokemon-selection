import React from 'react';

const Pokemon = props => {
  return (
    <div style={{ display: 'inline-block' }}>
      <p>
        <b>Height</b> {props.attributes.height}
      </p>
      <p>
        <b>Weight</b> {props.attributes.weight}
      </p>
      <img src={props.attributes.sprites.front_default} />
      <h3>
        {props.attributes.name.charAt(0).toUpperCase() +
          props.attributes.name.slice(1)}
      </h3>
      <p>
        <b>Base Exp.</b> {props.attributes.base_experience}
      </p>
    </div>
  );
};

export default Pokemon;
