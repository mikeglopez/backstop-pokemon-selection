import React from 'react';

const Card = props => {
  let inches = (props.attributes.height * 3.93701).toFixed(0);
  const feet = Math.floor(inches / 12);
  inches %= 12;
  const pounds = (props.attributes.weight * 0.220462).toFixed(1);
  let imgPath;

  if (props.front) {
    imgPath = props.attributes.sprites.front_default;
  } else {
    imgPath = props.attributes.sprites.back_default;
  }

  return (
    <div>
      <h3>{props.formattedName}</h3>
      <div className='mx-auto my-3 pt-3' style={pokeballStyle}>
        <img
          src={imgPath}
          style={!props.front ? { filter: 'brightness(30%)' } : {}}
          alt={props.formattedName}
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
        <div className='col px-0'>
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

const pokeballStyle = {
  backgroundImage: 'url("../assets/images/pokeball.png")',
  backgroundRepeat: 'no-repeat',
  height: 107,
  width: 89
};

export default Card;
