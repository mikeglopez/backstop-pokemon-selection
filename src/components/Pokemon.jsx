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
    <div className='col-sm my-5 text-center'>
      <h3>{formattedName}</h3>
      <div
        className='mx-auto my-3 pt-3'
        style={{
          backgroundImage: 'url("../assets/images/pokeball.png")',
          backgroundRepeat: 'no-repeat',
          height: 107,
          width: 89
        }}
      >
        <img
          src={props.attributes.sprites.back_default}
          style={{ filter: 'brightness(30%)' }}
          alt={formattedName}
          height='96'
          width='96'
        />
      </div>
      <div className='row'>
        <div className='col px-0'>
          <span>
            <b>Height:</b> {feet}'{inches}"
          </span>
        </div>
        <div className='col px-1'>
          <span>
            <b>Weight:</b> {pounds} lbs
          </span>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <span>
            <b>Base Exp:</b> {props.attributes.base_experience}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
